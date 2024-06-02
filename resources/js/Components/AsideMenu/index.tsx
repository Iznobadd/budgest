import { MenuAsideItem } from "../../interfaces";
import Logo from "../../../images/logo.png";
import Item from "./Item";
import menu from "./MenuList";

export default function AsideMenu() {
    return (
        <aside className="h-screen fixed left-0 w-60 flex z-40 top-0 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* LOGO */}
                <div className="flex h-14 items-center justify-center">
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
