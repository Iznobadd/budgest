import MenuItem from "./MenuItem";

const menuItems = [
    {
        title: "Dashboard",
        iconClass: "fa-solid fa-chart-pie",
        children: [
            { title: "Overview", link: "#" },
            { title: "Charts", link: "#" },
        ],
    },
    {
        title: "Transactions",
        iconClass: "fa-solid fa-arrow-right-arrow-left",
        children: [
            { title: "Add new transaction", link: "#" },
            { title: "List of all transactions", link: "#" },
        ],
    },
    {
        title: "Budget",
        iconClass: "fa-solid fa-coins",
        children: [
            { title: "Add new budget", link: "#" },
            { title: "View budgets", link: "#" },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {menuItems.map((item) => (
                        <MenuItem key={item.title} item={item} />
                    ))}
                </ul>
            </div>
        </aside>
    );
}
