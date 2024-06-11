import { ChangeEvent, ComponentProps } from "react";

interface InputProps2 extends ComponentProps<"input"> {}

const Input = ({
    type,
    placeholder,
    id,
    value,
    className,
    onChange,
}: InputProps2) => {
    return (
        <input
            type={type}
            className={`dark:text-white px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder:text-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none h-12 border bg-white dark:bg-slate-800 ${className}`}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
