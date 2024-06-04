import { ReactNode, useEffect, useState } from "react";
import Logo from "../../../images/logo.png";
import Avatar from "../../../images/avatar.png";
import { GoChevronDown } from "react-icons/go";
import { IoMoon, IoSunny } from "react-icons/io5";
import { usePage } from "@inertiajs/react";
import { User } from "@/interfaces";

type Props = {
    className: string;
    onClick?: (e: React.MouseEvent) => void;
    icon: ReactNode;
};
const Navbar = ({ className, onClick, icon }: Props) => {
    const auth = usePage().props.auth as User;

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
            className={`${className} top-0 fixed h-14 z-30 w-screen inset-x-0 transition-position text-black dark:text-white`}
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
                    <div className="flex items-center p-3 ">
                        <label className="relative inline-flex cursor-pointer select-none items-center">
                            <input
                                type="checkbox"
                                checked={dark}
                                onChange={darkModeHandler}
                                className="sr-only"
                            />
                            <div className="shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md">
                                <span
                                    className={`flex h-9 w-9 items-center justify-center rounded ${
                                        !dark
                                            ? "bg-white text-gray-500"
                                            : "text-white"
                                    }`}
                                >
                                    <IoSunny />
                                </span>
                                <span
                                    className={`flex h-9 w-9 items-center justify-center rounded ${
                                        dark
                                            ? "dark:bg-slate-900/70"
                                            : "text-gray-500"
                                    }`}
                                >
                                    <IoMoon />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center p-3">
                        <div className="w-6 h-6 mr-3 inline-flex">
                            {auth.user.avatar_url && (
                                <img
                                    src={auth.user.avatar_url}
                                    alt=""
                                    className=" rounded-xl"
                                />
                            )}
                            {!auth.user.avatar_url && (
                                <img
                                    src={Avatar}
                                    alt=""
                                    className=" rounded-xl"
                                />
                            )}
                        </div>
                        <span className="px-2">{auth.user.name}</span>
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
