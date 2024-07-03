type ButtonProps = {
    label: string;
    disabled?: boolean;
    color: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
};

const Button = ({
    label,
    disabled,
    color,
    type = "button",
    onClick,
}: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-${color}-600 dark:border-${color}-500 ring-${color}-300 dark:ring-${color}-700 bg-${color}-600 dark:bg-${color}-500 text-white hover:bg-${color}-700 hover:border-${color}-700 hover:dark:bg-${color}-600 hover:dark:border-${color}-600 mr-3 last:mr-0 mb-3 undefined py-2 px-3`}
            onClick={onClick}
        >
            <span className="px-2">{label}</span>
        </button>
    );
};

export default Button;
