import { MenuAsideItem } from "@/interfaces";
import {
    LuGoal,
    LuTrendingUp,
    LuLayers,
    LuArrowLeftRight,
    LuHome,
} from "react-icons/lu";
import { MdCategory } from "react-icons/md";
const menuList: MenuAsideItem[] = [
    {
        icon: <LuHome />,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: <LuArrowLeftRight />,
        label: "Transactions",
        href: "/dashboard/transactions/add",
    },
    {
        icon: <MdCategory />,
        label: "Categories",
        href: "/dashboard/categories/add",
    },
    {
        icon: <LuLayers />,
        label: "Accounts",
        href: "/dashboard/accounts/add",
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
