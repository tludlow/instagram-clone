import { useState } from 'react'
import Link from 'next/link'
import Home from '@/icons/Home'
import Plane from '@/icons/Plane'
import Logo from '@/icons/Logo'
import Compass from '@/icons/Compass'
import Heart from '@/icons/Heart'

export default function Navbar() {
    const [searching, setSearching] = useState(false)
    const [searched, setSearched] = useState('')

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = e.target.value

        setSearched(text)
    }

    return (
        <header className="w-full h-13 mb-8 bg-white border-b border-gray-300">
            <nav className="max-w-5xl h-full mx-auto px-5 lg:px-0 flex justify-between items-center">
                <div className="flex-grow">
                    <Link href="/">
                        <>
                            <a className="hidden sm:block" href="">
                                <Logo className="w-24 h-8 mt-2 cursor-pointer" />
                            </a>
                            <a className="sm:hidden" href="">
                                <svg
                                    className="h-8 w-8 text-black"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                            </a>
                        </>
                    </Link>
                </div>

                {/* search */}
                <div className="relative">
                    <form action="">
                        {/* focus search icon */}
                        <svg
                            className={`${searching ? 'visibile' : 'hidden'} absolute h-3 w-3 left-2 top-2 z-20`}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>

                        {/* focus X icon */}
                        <svg
                            className={`${
                                searching ? 'visibile' : 'hidden'
                            } absolute h-5 w-5 text-gray-400 right-1 top-1 z-20 cursor-pointer`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            onMouseDown={() => {
                                setSearched('')
                                setSearching(false)
                            }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            ></path>
                        </svg>

                        <input
                            onChange={(e) => onSearchChange(e)}
                            onFocus={(e) => {
                                e.target.select()
                                setSearching(true)
                            }}
                            onBlur={() => setSearching(false)}
                            className={`${
                                searching ? 'text-gray-600' : 'text-gray-100'
                            } relative z-10 h-6 px-6 py-1 bg-gray-100 border border-gray-300 rounded text-sm focus:outline-none`}
                            type="text"
                            name="nav-search"
                            id="nav-search"
                            value={searched}
                            autoComplete="off"
                        />
                    </form>

                    {/* unfocused placeholder */}
                    <div
                        className={`${
                            searching ? 'hidden' : 'visibile'
                        } absolute w-full inset-0 z-20 pointer-events-none flex justify-center items-center space-x-1 text-gray-500`}
                    >
                        <span>
                            <svg
                                className="h-3 w-3"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </span>
                        <span className="max-w-3/5 text-sm truncate">{searched.length > 0 ? searched : 'Search'}</span>
                    </div>
                </div>

                {/* Menu or icons */}
                <div className="md:hidden flex flex-grow justify-end">
                    <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>

                <div className="hidden md:flex items-center flex-grow justify-end space-x-2 md:space-x-4">
                    {/* house */}
                    <div className="relative flex flex-col items-center">
                        <Link href="/">
                            <a href="">
                                <Home className="h-6 w-6 cursor-pointer" />
                            </a>
                        </Link>

                        <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-red-500"></div>
                        <div className="absolute w-2 h-2 bg-red-500 transform rotate-45 -bottom-4"></div>
                        <div className="absolute h-7 px-2 flex justify-center items-center bg-red-500 rounded shadow -bottom-10">
                            <span className="text-white">7</span>
                        </div>
                    </div>

                    {/* plane */}
                    <Link href="/inbox">
                        <a href="">
                            <Plane className="h-6 w-6 cursor-pointer" />
                        </a>
                    </Link>

                    {/* compass */}
                    <Link href="/explore">
                        <a href="">
                            <Compass className="h-6 w-6 cursor-pointer" />
                        </a>
                    </Link>

                    {/* heart */}
                    <a href="">
                        <Heart className="h-6 w-6 cursor-pointer" />
                    </a>
                </div>
            </nav>
        </header>
    )
}
