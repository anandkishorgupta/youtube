import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex  mt-[65px]">
            <Sidebar />
            {/* <MainContainer /> */}
            <Outlet />
        </div>
    )
}

export default Body