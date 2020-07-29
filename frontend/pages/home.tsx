import Layout from '@/components/Layout'
import Logo from '../icons/Logo'
import Link from 'next/link'
import Footer from '@/components/footer/footer'

export default function Home() {
    return (
        <>
            <div className="h-screen w-screen flex items-center">
                <div className="w-5/12 -mt-16 mx-auto grid grid-cols-2 gap-5 text-sm">
                    {/* Left col */}
                    <div
                        className="h-full w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                'url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png)',
                            backgroundSize: '454px 618px',
                        }}
                    ></div>
                    {/* Right col */}
                    <div>
                        <div className="w-full p-12 pb-5 flex flex-col items-center bg-white border border-gray-300">
                            <Logo className="w-40 h-12" />
                            <form className="w-full mt-12 flex flex-col">
                                <input
                                    className="p-2 bg-gray-100 border border-gray-200 rounded"
                                    type="text"
                                    placeholder="Phone number, username or email"
                                    name=""
                                    id=""
                                />
                                <input
                                    className="mt-2 p-2 bg-gray-100 border border-gray-200 rounded"
                                    type="password"
                                    placeholder="Password"
                                    name=""
                                    id=""
                                />
                                <button
                                    className="mt-4 py-2 bg-blue-600 disabled:bg-blue-400 text-white font-semibold rounded"
                                    type="submit"
                                    disabled
                                >
                                    Log in
                                </button>
                            </form>

                            <div className="w-full mt-7 flex justify-center border-t border-gray-300">
                                <span className="-mt-3 px-4 bg-white text-gray-600 font-semibold">OR</span>
                            </div>

                            <div className="mt-6 flex items-center text-blue-700">
                                <span className="mr-3">
                                    <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            fill="fillCurrent"
                                            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        />
                                    </svg>
                                </span>
                                <span className="font-semibold">Log in with Facebook</span>
                            </div>

                            <Link href="/forgot-password">
                                <a className="mt-4 font-light">Forgot password?</a>
                            </Link>
                        </div>
                        <div className="w-full mt-6 py-5 flex flex-col items-center bg-white border border-gray-300">
                            <p>
                                Dont have an account? <span className="text-blue-600 font-semibold">Sign up</span>
                            </p>
                        </div>

                        <p className="py-5 text-center">Get the app.</p>
                        <div className="flex justify-center items-center space-x-5">
                            <div className="h-12 w-1/3 bg-red-500"></div>
                            <div className="h-12 w-1/3 bg-red-500"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
