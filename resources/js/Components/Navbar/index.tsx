import { ReactNode, useEffect, useState } from "react";
import Logo from "../../../images/logo.png";
import Avatar from "../../../images/avatar.png";
import { GoChevronDown } from "react-icons/go";
import { IoMoon, IoSunny } from "react-icons/io5";

type Props = {
    className: string;
    onClick?: (e: React.MouseEvent) => void;
    icon: ReactNode;
};
const Navbar = ({ className, onClick, icon }: Props) => {
    const [dark, setDark] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode
            ? savedMode === "true"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("darkMode", dark.toString());
    }, [dark]);

    const darkModeHandler = () => {
        setDark(!dark);
    };

    return (
        <nav
            className={`${className} top-0 fixed h-14 z-30 w-screen inset-x-0 transition-position`}
        >
            <div className="flex items-stretch">
                <div className="flex flex-1 items-stretch h-14">
                    <div className="items-center cursor-pointer flex py-2 px-3 lg:hidden">
                        <span
                            className="inline-flex justify-center items-center w-6 h-6"
                            onClick={onClick}
                        >
                            {icon}
                        </span>
                    </div>
                    <div className="items-center cursor-pointer flex py-2 px-3">
                        <img src={Logo} alt="" className="h-8" />
                    </div>
                </div>
                <div className="h-14 flex items-center cursor-pointer flex-none">
                    <div className="flex items-center p-3">
                        <button
                            className="bg-yellow-100 dark:bg-slate-900"
                            onClick={() => darkModeHandler()}
                        >
                            {dark && <IoSunny />}
                            {!dark && <IoMoon />}
                        </button>
                    </div>
                    <div className="flex items-center p-3">
                        <div className="w-6 h-6 mr-3 inline-flex">
                            <img src={Avatar} alt="" />
                        </div>
                        <span className="px-2">John Doe</span>
                        <span className="inline-flex justify-center items-center w-6 h-6">
                            <GoChevronDown />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
