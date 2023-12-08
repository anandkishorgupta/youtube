import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestion, setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const searchCache = useSelector((state) => state.search)

    useEffect(() => {
        // make an api call after every key press
        // but if the difference between 2 API calls is <200ms decline the api call>
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery])
            } else {
                getSearchSuggestion()

            }
        }, 200);

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestion(json[1])
        // console.log(json[1])
        // update the cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

    function toggleMenuHandler() {
        dispatch(toggleMenu())
    }
    return (
        <div className="flex justify-between px-5 items-center fixed top-0 w-full bg-white shadow-sm z-10 ">
            <div className="flex items-center">
                <RxHamburgerMenu onClick={toggleMenuHandler} className="cursor-pointer" />
                <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="" className="w-28" />
            </div>
            {/* search */}
            <div className="relative w-5/12 flex items-center">
                <input type="text" placeholder="Search..." className="w-[90%] outline-none ps-3 pr-7  border-gray-300 border py-2 rounded-l-2xl"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />
                {
                    showSuggestion &&
                    suggestion.length > 0 &&
                    <ul className="absolute bg-white rounded-2xl border border-gray-300  w-[90%] top-0  translate-y-[9%]   py-3 flex flex-col gap-y-2 shadow-lg">
                        {
                            suggestion?.map((item, index) => (
                                <li className="flex items-center gap-x-3 hover:bg-gray-200 px-3 py-2 cursor-pointer" key={index}>
                                    <CiSearch />
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                }
                <button
                    className=" border-gray-300 border rounded-r-2xl  py-2 px-3 bg-gray-100 h-full"
                >
                    <CiSearch
                        size={24}
                    />
                </button>
            </div>

            <div>
                <FaRegUser className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Head
