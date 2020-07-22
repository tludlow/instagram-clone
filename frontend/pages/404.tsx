import Layout from '@/components/Layout'

import Link from 'next/link'

const FourOFour = () => {
    return (
        <Layout title="Page Not Found | Instagram">
            <div className="mt-6 text-center">
                <h2 className="font-semibold text-2xl">Sorry, this page isn't available.</h2>
                <p className="mt-6">
                    The link you followed may be broken, or the page may have been removed.{' '}
                    <Link href="/">
                        <a href="/">
                            <span className="text-blue-500 cursor-pointer">Go back to Instagram.</span>
                        </a>
                    </Link>
                </p>
            </div>

            <footer className="fixed bottom-12 max-w-5xl w-full">
                <div className="flex justify-between items-center uppercase text-xs font-semibold">
                    <ul className="flex items-center space-x-4 text-blue-700">
                        <li>About</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Locations</li>
                        <li>Top Accounts</li>
                        <li>Hashtags</li>
                        <li>Language</li>
                    </ul>

                    <p className="text-gray-500">© 2020 Instagram from Facebook</p>
                </div>
            </footer>
        </Layout>
    )
}

export default FourOFour

// export default function FourOFour() {
//     return (
//         <Layout title="Page Not Found - Billpop" contained>
//             <div className="mt-12 flex flex-col items-center justify-center">
//                 <div className="flex items-center justify-center space-x-1">
//                     <svg
//                         className="h-8 w-8 text-red-600"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//                     </svg>
//                     <h1 className="font-bold text-xl text-red-600">Billpop</h1>
//                 </div>

//                 <h2 className="font-bold text-2xl mt-6">Page not found</h2>
//                 <p>This page doesnt exist, try going back</p>

//                 <div className="mt-4 space-x-6">
//                     <button
//                         className="w-32 px-4 py-2 text-white rounded bg-black font-bold"
//                         onClick={() => Router.goBack()}
//                     >
//                         Go back
//                     </button>
//                     <Link href="/">
//                         <button className="w-32 px-4 py-2 text-white rounded bg-black font-bold">Home</button>
//                     </Link>
//                 </div>
//             </div>
//         </Layout>
//     )
// }
