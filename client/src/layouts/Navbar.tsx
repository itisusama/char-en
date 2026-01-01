import { icon } from "@/imports/icon";
import { ui } from "@/imports/ui";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation()
    return(
        <nav className="fixed top-0 py-2 px-6 w-full bg-white flex justify-between border-b">
        <Link to="/dashboard" className="flex items-center gap-3">
            <img src={icon.Logo} alt="logo" className="w-9"/>
            <h2 className="font-bold text-md">Finanical Log</h2>
        </Link>
        <div className="flex gap-3 items-center">
            {
                location.pathname !== '/add-finance' && (
                    <Link to="/add-finance">
                        <ui.Button variant="outline" size="sm"> <icon.Plus/> Add Finance</ui.Button>
                    </Link>
                )
            }
            <ui.UserMenu/>
        </div>
        </nav>
    )
}