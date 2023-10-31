import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";


export function Layout ( ) {
    return (
        <div className="bg-body-tertiary h-100">
            <div className="container">
                <Navbar />
                <Outlet />
                <footer>Soy el footer</footer>
            </div>
        </div>
    )
}