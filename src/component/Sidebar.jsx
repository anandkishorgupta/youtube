import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const { isMenuOpen } = useSelector((state) => state.app)
    // early return pattern
    if (!isMenuOpen) return null
    return (
        <div className=' h-[calc(100vh-4rem)] border-r border-gray-200 px-8 '>
            <Link to={"/"} className="flex gap-x-3 items-center px-4 py-3">
                <IoHomeOutline />
                Home
            </Link>
        </div>
    )
}

export default Sidebar