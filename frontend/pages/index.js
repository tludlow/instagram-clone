import Layout from '@/components/layout'

export default function Index() {
    return (
        <Layout title="Instagram" contained>
            <div className="grid grid-cols-3 gap-4">
                {/* Left col */}
                <div className="col-span-2 w-full h-12 bg-red-500"></div>

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
                                src="https://images.unsplash.com/photo-1590895340509-793cb98788c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faceindex=2&facepad=1.5&w=300&h=300"
                                alt=""
                            />
                            <div className="flex flex-col flex-grow truncate">
                                <span className="font-semibold">jackmister3</span>
                                <span className="text-gray-400 text-sm">Follows by aliengal3 + 13 more</span>
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
