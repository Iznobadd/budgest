type InputProps = {
    type: string;
    placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
    return (
        <input
            type={type}
            className="dark:text-white px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder:text-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none h-12 border bg-white dark:bg-slate-800"
            placeholder={placeholder}
        />
    );
};

export default Input;
