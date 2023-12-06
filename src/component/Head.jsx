import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch()

    function toggleMenuHandler() {
        dispatch(toggleMenu())
    }
    return (
        <div className="flex justify-between px-5 items-center shadow-sm">
            <div className="flex items-center">
                <RxHamburgerMenu onClick={toggleMenuHandler} className="cursor-pointer" />
                <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="" className="w-28" />
            </div>
            <div className="w-5/12 flex items-center">
                <input type="text" placeholder="search" className="w-full outline-none ps-3 pr-7  border-gray-300 border py-2 rounded-l-2xl" />
                <button
                    className=" border-gray-300 border rounded-r-2xl  py-2 px-3 bg-gray-100 h-full"
                >
                    <CiSearch
                        size={24}
                    />
                </button>

            </div>
            <div>
                <FaRegUser />
            </div>
        </div>
    )
}

export default Head
