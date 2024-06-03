import { MenuAsideItem } from "../../interfaces";
import Logo from "../../../images/logo.png";
import Item from "./Item";
import menu from "./MenuList";

type Props = {
    isAsideMobileExpanded: boolean;
};

export default function AsideMenu({ isAsideMobileExpanded = false }: Props) {
    return (
        <aside
            className={`h-screen fixed w-60 flex z-40 transition-position top-0 overflow-hidden lg:py-2 lg:pl-2 ${
                isAsideMobileExpanded ? "left-0" : "-left-60 lg:left-0"
            }`}
        >
            <div className="flex-1 flex flex-col overflow-hidden bg-slate-800 dark:bg-slate-900 text-slate-300 lg:rounded-xl">
                {/* LOGO */}
                <div className="flex h-14 items-center justify-center bg-slate-900">
                    <img src={Logo} alt="" className="h-10" />
                </div>

                {/* MENU */}
                <div className="flex-1 overflow-auto overflow-x-hidden">
                    <ul>
                        {menu.map((item, index): any => (
                            <Item key={index} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
