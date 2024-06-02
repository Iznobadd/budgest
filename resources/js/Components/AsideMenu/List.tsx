import { MenuAsideItem } from "@/interfaces";
import Item from "./Item";

type Props = {
    menu: MenuAsideItem[];
    className?: string;
    isDropdownList: boolean;
};

const MenuList = ({ menu, className = "", isDropdownList = false }: Props) => {
    return (
        <ul className={className}>
            {menu.map((item, index): any => (
                <Item key={index} item={item} isDropdownList={isDropdownList} />
            ))}
        </ul>
    );
};

export default MenuList;
