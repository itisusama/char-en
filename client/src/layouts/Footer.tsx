import { icon } from "@/imports/icon";

export default function Footer() {
    return(
        <footer className="fixed bottom-0 mt-15 w-full bg-white border-t px-6 py-2">
            <div className="flex flex-col justify-center items-center">
                <img src={icon.Logo} alt="logo" className="w-9" />
                <h2 className="font-bold text-md">Finanical Log</h2>
            </div>
        </footer>
    )
}