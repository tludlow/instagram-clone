import Layout from '@/components/layout'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup, Dot } from 'pure-react-carousel'

export default function Index() {
    return (
        <Layout title="Instagram" contained>
            <div className="grid grid-cols-3 gap-8">
                {/* Left col */}
                <div className="col-span-3 md:col-span-2">
                    {/* Stories carousel/presentation */}
                    <div className="w-full h-28 bg-white border border-gray-200">
                        <CarouselProvider
                            className="relative"
                            totalSlides={10}
                            visibleSlides={6}
                            naturalSlideWidth={110}
                            naturalSlideHeight={100}
                            step={2}
                            infinite={true}
                        >
                            <Slider className="h-24 w-full mt-3 mb-2">
                                {[...Array(10)].map((e, i) => (
                                    <Slide
                                        key={i}
                                        index={i}
                                        style={{ width: '6%', marginLeft: '0.5rem', marginRight: '0.5rem' }}
                                    >
                                        <div className="flex flex-col items-center">
                                            <Image
                                                hasMasterSpinner={false}
                                                className="h-10 w-12 rounded-full p-0.5 border-2 border-red-500"
                                                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faceindex=2&facepad=1.5&w=300&h=300"
                                                alt=""
                                                style={{ width: '68px', height: '68px' }}
                                            />
                                            <h5 className="text-sm">jennifer{i}</h5>
                                        </div>
                                    </Slide>
                                ))}
                            </Slider>
                            <ButtonBack>
                                <div className="absolute left-2 top-9 bg-white rounded-full w-5 h-5 shadow-xl flex items-center justify-center border border-gray-300">
                                    <svg className="text-black w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </ButtonBack>
                            <ButtonNext>
                                <div className="absolute right-5 top-9 bg-white rounded-full w-5 h-5 shadow-xl flex items-center justify-center border border-gray-300">
                                    <svg className="text-black w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </ButtonNext>
                        </CarouselProvider>
                    </div>

                    {/* Home Image */}
                    <div className="w-full mt-12 border border-gray-300 rounded-xs">
                        <div className="h-13 w-full px-5 flex justify-between items-center bg-white">
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/96493051_169399917785899_3453132171017977856_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=0U-Fhq_WOvEAX95hD0n&oh=69c36fcedcb05327d5cd59690b72d95b&oe=5F3B8B84"
                                    alt="healthychefsteph"
                                />
                                <h5 className="font-semibold text-sm">healthychefsteph</h5>
                            </div>
                            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                        </div>
                        <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                            <img
                                className="absolute w-full h-full"
                                src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/108131326_3123380117710607_3250120263370267364_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=X_lDxzU2kAkAX8whIht&oh=0de7359b04e5e9e69899519f0ea641b5&oe=5F3BB04F"
                                alt=""
                            />
                        </div>
                        <div className="w-full py-2 px-5">
                            <div className="w-full flex justify-between">
                                <div className="flex items-center  space-x-3">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>

                                    <svg
                                        className="h-8 w-8"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                        <line x1="12" y1="12" x2="12" y2="12.01" />
                                        <line x1="8" y1="12" x2="8" y2="12.01" />
                                        <line x1="16" y1="12" x2="16" y2="12.01" />
                                    </svg>

                                    <svg
                                        className="h-8 w-8"
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
                                </div>
                                <div className="">
                                    <svg
                                        className="h-8 w-8"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                        <circle cx="12" cy="14" r="2" />
                                        <polyline points="14 4 14 8 8 8 8 4" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-1 text-sm font-semibold">3072 likes</p>
                            <p className="mt-1 text-sm">
                                <span className="font-semibold mr-2">healthychefsteph</span>
                                Happy Friday everyone💞
                            </p>
                            <p className="mt-2 font-semibold text-sm text-gray-400">View all 56 comments</p>
                            {/* Top comments */}
                            <div className="w-full flex justify-between items-center">
                                <p className="text-sm">
                                    <span className="font-semibold mr-2">Jeffwow</span>omg this is so amazing
                                </p>
                                <svg
                                    className="h-4 w-4 text-red-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        fill="#f25767"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-sm">
                                    <span className="font-semibold mr-2">aintreeone</span>I hope to see you soon
                                    sweetie!! 🎂
                                </p>
                                <svg
                                    className="h-4 w-4"
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
                            <p className="mt-2 text-xs uppercase text-gray-400">5 hours ago</p>
                        </div>
                        <div className="h-12 px-5 flex justify-between items-center border-t border-gray-200">
                            <form action="">
                                <input
                                    className="focus:outline-none"
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    placeholder="Add a comment..."
                                />
                            </form>
                            <p className="text-blue-300">Post</p>
                        </div>
                    </div>
                </div>

                {/* Right col */}
                <div className="">
                    <div className="flex items-center space-x-3">
                        <img
                            className="h-14 w-14 rounded-full cursor-pointer"
                            src="https://images.unsplash.com/photo-1571536338851-d312476c7b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faceindex=2&facepad=1.5&w=300&h=300"
                            alt="thiscoolusername"
                        />
                        <h3 className="font-semibold cursor-pointer">thiscoolusername</h3>
                    </div>

                    {/* Suggestions for you */}
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center space-x-2">
                            <img
                                className="h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1590895340509-793cb98788c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faceindex=2&facepad=1.5&w=300&h=300"
                                alt=""
                            />
                            <div className="flex flex-col flex-grow truncate">
                                <span className="font-semibold">jackmister3</span>
                                <span className="text-gray-400 text-sm">Follows you</span>
                            </div>
                            <div className="">
                                <button className="text-sm font-semibold text-blue-600">Follow</button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img
                                className="h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faceindex=2&facepad=1.5&w=300&h=300"
                                alt=""
                            />
                            <div className="flex flex-col flex-grow truncate">
                                <span className="font-semibold">jackmister3</span>
                                <span className="text-gray-400 text-sm">Followed by aliengal3 + 13 more</span>
                            </div>
                            <div className="">
                                <button className="text-sm font-semibold text-blue-600">Follow</button>
                            </div>
                        </div>
                    </div>

                    {/* Misc links and copyright */}
                    <div className="mt-6 text-gray-400 text-xs">
                        <ul className="flex flex-wrap">
                            <li className="misc-link">About</li>
                            <li className="misc-link">Help</li>
                            <li className="misc-link">Press</li>
                            <li className="misc-link">API</li>
                            <li className="misc-link">Jobs</li>
                            <li className="misc-link">Privacy</li>
                            <li className="misc-link">Terms</li>
                            <li className="misc-link">Locations</li>
                            <li className="misc-link">Top Accounts</li>
                            <li className="misc-link">Hashtags</li>
                            <li className="misc-link">Languages</li>
                        </ul>
                        <p className="mt-2">© 2020 INSTAGRAM FROM FACEBOOK</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
