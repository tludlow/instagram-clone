type SearchDropdownType = {
    visible: boolean,
}

const SearchDropdown: React.FC<SearchDropdownType> = ({ visible }) => {
    return (
        <>
            <div
                className={`${
                    visible ? 'block' : 'hidden'
                } h-6 w-6 absolute left-1/2 top-11 bg-white border border-gray-200 transform rotate-45 -translate-x-1/3 shadow`}
            ></div>
            <div
                className={`${
                    visible ? 'flex' : 'hidden'
                } h-72 w-125 absolute top-14 -left-6 z-20 flex-col bg-white border border-gray-200 overflow-y-auto rounded shadow`}
            >
                <SearchPerson />
                <SearchTrend />
                <SearchTrend />
                <SearchTrend />
                <SearchPerson />
                <SearchPerson />
                <SearchPerson />
                <SearchPerson />
            </div>
        </>
    )
}

export default SearchDropdown

function SearchPerson() {
    return (
        <div className="h-16 w-full p-5 flex items-center border-b border-gray-200 hover:bg-gray-200">
            <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1571536338851-d312476c7b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faceindex=2&facepad=1.5&w=300&h=300"
                alt="person"
            />
            <div className="ml-3 flex flex-col text-sm">
                <p className="text-black font-semibold">#wowthisiscool</p>
                <p className="-mt-1 text-gray-400">1,321 posts</p>
            </div>
        </div>
    )
}

function SearchTrend() {
    return (
        <div className="h-16 w-full p-5 flex items-center border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
            <p className="w-8 text-gray-300 text-center italic font-semibold text-3xl">#</p>
            <div className="ml-3 flex flex-col text-sm">
                <p className="text-black font-semibold">#wowthisiscool</p>
                <p className="-mt-1 text-gray-400">1,321 posts</p>
            </div>
        </div>
    )
}
