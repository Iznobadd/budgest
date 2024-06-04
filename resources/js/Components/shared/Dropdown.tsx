type DropdownProps = {
    options: {
        value: string;
        label: string;
    }[];
    name: string;
    id: string;
};

const Dropdown = ({ name, id, options }: DropdownProps) => {
    return (
        <select
            name={name}
            id={id}
            className="dark:text-white px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none h-12 border bg-white dark:bg-slate-800 "
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
