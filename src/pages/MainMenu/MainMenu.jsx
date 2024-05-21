import { Outlet } from "react-router-dom"
import { Header } from "../../Components"

const MainMenu = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>)
}

export default MainMenu