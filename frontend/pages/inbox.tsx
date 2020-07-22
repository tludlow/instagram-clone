import Layout from '@/components/Layout'

export default function Inbox() {
    return (
        <Layout title="Inbox">
            <div className="max-h-85vh h-85vh grid grid-cols-3 bg-white border border-gray-300">
                <div className="col-span-1 h-85vh flex flex-col border-r border-gray-300">
                    <div className="h-15  w-full px-3 flex flex-shrink-0 items-center border-b border-gray-300">
                        <h3 className="flex-grow font-semibold text-center">Direct</h3>
                        <svg fill="currentColor" height="24" viewBox="0 0 44 44" width="24">
                            <path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path>
                            <path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path>
                            <path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
                        </svg>
                    </div>

                    <div className="w-full px-3 flex flex-col flex-grow space-y-4 pt-2 text-sm overflow-y-auto">
                        <div className="p-1 flex items-center rounded-sm cursor-pointer hover:bg-gray-50">
                            <img
                                className="h-15 w-15 mr-3 rounded-full"
                                src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/110180176_278262123501800_277833209118997729_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=I_RuIOIscOQAX8dXVV_&oh=a1a4a508db5a8d73aa8bcb9335b3a8b8&oe=5F42A8DD"
                                alt=""
                            />
                            <div className="flex flex-col">
                                <span>wowthatsacoolname</span>
                                <span className="text-gray-600">You reacted to their story: 🔥 ∙ 27w</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 h-85vh flex flex-col">
                    <div className="h-15 w-full px-5 flex flex-shrink-0 items-center border-b border-gray-300">
                        <div className="flex items-center flex-grow">
                            <img
                                className="h-6 w-6 mr-3 rounded-full"
                                src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/110180176_278262123501800_277833209118997729_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=I_RuIOIscOQAX8dXVV_&oh=a1a4a508db5a8d73aa8bcb9335b3a8b8&oe=5F42A8DD"
                                alt=""
                            />
                            <h4 className="font-semibold">wowthatsacoolname</h4>
                        </div>
                        <svg fill="currentColor" height="24" viewBox="0 0 48 48" width="24">
                            <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                            <circle clipRule="evenodd" cx="24" cy="14.8" fillRule="evenodd" r="2.6"></circle>
                            <path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
                            <path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z"></path>
                        </svg>
                    </div>
                    <div className="w-full px-5 py-3 flex flex-col flex-grow justify-end space-y-3">
                        {/* Date */}
                        <div className="w-full py-2 text-center">
                            <span className="text-sm text-gray-600">January 12th 2020</span>
                        </div>

                        {/* Their message  */}
                        <div className="w-5/12 py-1 pl-2 border-l-2 border-blue-600">
                            <span className="text-sm text-gray-800">
                                This is amazing that you have found this site!! 👌 hopefully you cant continue to work
                                on it into the future
                            </span>
                        </div>
                        {/* Your message */}
                        <div className="w-5/12 py-1 pr-2 border-r-2 border-gray-600 self-end">
                            <span className="text-sm text-gray-800">
                                Thanks for your thoughts.. we haven't spoke in a while, maybe again soon?
                            </span>
                        </div>

                        <form className="w-full pt-6" action="">
                            <input
                                className="w-full pl-12 form-input rounded-full"
                                type="text"
                                name=""
                                id=""
                                placeholder="Message"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
