import { MenuAsideItem } from "@/interfaces";
import { Bs0Circle } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { BiCoinStack } from "react-icons/bi";
const menuList: MenuAsideItem[] = [
    {
        icon: <RiComputerLine />,
        label: "Dashboard",
        menu: [
            {
                label: "Charts",
                href: "/charts",
            },
        ],
    },
    {
        icon: <GrTransaction />,
        label: "Transactions",
    },
    {
        href: "#",
        icon: <BiCoinStack />,
        label: "Budget",
    },
];

export default menuList;
