import { MenuAsideItem } from "@/interfaces";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";
import MenuList from "./List";

type Props = {
    item: MenuAsideItem;
    isDropdownList?: boolean;
};

const Item = ({ item, isDropdownList = false }: Props) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const { url } = usePage();
    const isActive = item.href === url;
    const asideInnerContent = (
        <>
            {item.icon && (
                <span
                    className={`inline-flex justify-center items-center w-16 h-6 flex-none ${
                        isActive ? "font-bold text-white" : ""
                    }`}
                >
                    {item.icon}
                </span>
            )}
            <span
                className={`grow text-ellipsis line-clamp-1 ${
                    item.menu ? "" : "pr-12"
                } ${isActive ? "font-bold text-white" : ""}`}
            >
                {item.label}
            </span>
            {item.menu && (
                <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                    {!isDropdownActive ? <GoPlus /> : <GoDash />}
                </span>
            )}
        </>
    );
    return (
        <li className="transition-colors hover:text-white">
            {item.href && (
                <Link
                    href={item.href}
                    className={`flex cursor-pointer py-3 ${
                        isDropdownList ? "px-6 text-sm" : ""
                    } `}
                >
                    {asideInnerContent}
                </Link>
            )}
            {!item.href && (
                <div
                    className="py-3 flex cursor-pointer"
                    onClick={() => setIsDropdownActive(!isDropdownActive)}
                >
                    {asideInnerContent}
                </div>
            )}
            {item.menu && (
                <MenuList
                    menu={item.menu}
                    className={`${isDropdownActive ? "block" : "hidden"}`}
                    isDropdownList
                />
            )}
        </li>
    );
};

export default Item;
