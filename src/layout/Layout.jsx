import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout ( ) {
    return (
        <div className="container">
            <Navbar />
            <h1>Hola mundo</h1>
            <Outlet />
            <footer>Soy el footer</footer>
        </div>
    )
}