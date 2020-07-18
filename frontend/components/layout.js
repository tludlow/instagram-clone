import Head from 'next/head'
import Nav from '@/components/nav/nav'

export default function Layout(props) {
    return (
        <div className="text-black w-full">
            <Head>
                <title>{props.title || 'Instagram'}</title>
            </Head>

            <Nav />

            {/* Have the option to remove the container if wanted */}
            <div className={`${props.contained ? 'max-w-5xl mx-auto px-4 pb-12 md:mb-0 md:px-0' : ''}`}>
                {props.children}
            </div>
        </div>
    )
}
