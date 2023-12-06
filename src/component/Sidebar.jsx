import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const { isMenuOpen } = useSelector((state) => state.app)
    // early return pattern
    if (!isMenuOpen) return null
    return (
        <div className='w-60 h-[calc(100vh-4rem)] border-r border-gray-200 '>
            <div className="flex gap-x-3 items-center px-4 py-3">
                <IoHomeOutline />
                Home
            </div>
        </div>
    )
}

export default Sidebar