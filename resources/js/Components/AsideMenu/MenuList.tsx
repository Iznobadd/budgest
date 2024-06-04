import { MenuAsideItem } from "@/interfaces";
import {
    LuGoal,
    LuTrendingUp,
    LuLayers,
    LuArrowLeftRight,
    LuHome,
} from "react-icons/lu";
const menuList: MenuAsideItem[] = [
    {
        icon: <LuHome />,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: <LuLayers />,
        label: "Accounts",
    },
    {
        icon: <LuArrowLeftRight />,
        label: "Transactions",
        href: "/dashboard/transactions/add",
    },
    {
        href: "#",
        icon: <LuGoal />,
        label: "Goals",
    },
    {
        href: "#",
        icon: <LuTrendingUp />,
        label: "Investments",
    },
];

export default menuList;
