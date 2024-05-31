import { useState } from "react";

type MenuItemProps = {
    item: {
        title: string;
        iconClass: string;
        children?: Array<{ title: string; link: string }>;
    };
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <li className="my-4">
            <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-accent dark:text-white dark:hover:bg-gray-700"
                onClick={toggleDropdown}
            >
                <i
                    className={`${item.iconClass} flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                ></i>
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                    {item.title}
                </span>
            </button>
            {isOpen && item.children && (
                <ul className="py-2 space-y-2">
                    {item.children.map((subItem) => (
                        <li key={subItem.title}>
                            <a
                                href={subItem.link}
                                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-accent dark:text-white dark:hover:bg-gray-700"
                            >
                                {subItem.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
