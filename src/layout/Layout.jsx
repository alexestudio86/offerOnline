import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export function Layout ( ) {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Outlet />
            <footer>Soy el footer</footer>
        </div>
    )
}