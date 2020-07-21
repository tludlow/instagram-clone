import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [searching, setSearching] = useState(false)
    const [searched, setSearched] = useState('')

    const onSearchChange = (e) => {
        let text = e.target.value

        setSearched(text)
    }

    return (
        <header className="w-full h-13 mb-8 bg-white border-b border-gray-300">
            <nav className="max-w-5xl h-full mx-auto px-5 md:px-0 flex justify-between items-center">
                <div className="flex-grow">
                    <Link href="/">
                        <img
                            className="mt-2 cursor-pointer"
                            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                            alt="Instagram"
                        />
                    </Link>
                </div>
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
                <div className="flex items-center flex-grow justify-end space-x-4">
                    {/* house */}
                    <div className="relative flex flex-col items-center">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>

                        {/* <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-red-500"></div>
                        <div className="absolute w-2 h-2 bg-red-500 transform rotate-45 -bottom-4"></div>
                        <div className="absolute h-7 px-2 flex justify-center items-center bg-red-500 rounded shadow -bottom-10">
                            <span className="text-white">1</span>
                        </div> */}
                    </div>

                    {/* plane */}
                    <Link href="/inbox">
                        <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                            <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                        </svg>
                    </Link>

                    {/* compass */}
                    <Link href="/explore">
                        <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                    </Link>

                    {/* heart */}
                    <svg
                        className="h-7 w-7"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </div>
            </nav>
        </header>
    )
}
