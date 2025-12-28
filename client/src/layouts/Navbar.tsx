import { icon } from "@/imports/icon";
import { ui } from "@/imports/ui";

export default function Navbar() {
    return(
        <nav className="fixed top-0 py-2 px-6 w-full bg-white flex justify-between border-b">
        <div className="flex items-center gap-3">
            <img src={icon.Logo} alt="logo" className="w-9"/>
            <h2 className="font-bold text-md">Character Encyclopedia</h2>
        </div>
        <ui.UserMenu/>
        </nav>
    )
}