type ButtonProps = {
    label: string;
    disabled?: boolean;
};

const Button = ({ label, disabled }: ButtonProps) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 undefined py-2 px-3"
        >
            <span className="px-2">{label}</span>
        </button>
    );
};

export default Button;
