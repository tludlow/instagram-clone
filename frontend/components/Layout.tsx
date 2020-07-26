import Head from 'next/head'
import Nav from '@/components/nav/Nav';

interface LayoutProps {
    title?: string
    contained?: boolean
}
const Layout: React.FC<LayoutProps> = ({ title = 'Instagram', contained = true, children }) => {
    return (
        <div className="text-black">
            <Head>
                <title>{title || 'Instagram'}</title>
            </Head>

            <Nav />

            {/* Have the option to remove the container if wanted */}
            <div className={`${contained ? 'mt-20 max-w-5xl mx-auto px-4 pb-12 md:mb-0 lg:px-0' : ''}`}>{children}</div>
        </div>
    )
}
export default Layout

// export default function Layout({ title: string, contained: boolean, children }) {
//     return (
//         <div className="text-black w-full">
//             <Head>
//                 <title>{title || 'Instagram'}</title>
//             </Head>

//             <Nav />

//             {/* Have the option to remove the container if wanted */}
//             <div className={`${contained ? 'max-w-5xl mx-auto px-4 pb-12 md:mb-0 lg:px-0' : ''}`}>{children}</div>
//         </div>
//     )
// }
