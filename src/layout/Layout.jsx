import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import "../css/layout.css"


export default function Layout() {

    return (
        <div className="layout">
            <Header />
            <div className="section">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}