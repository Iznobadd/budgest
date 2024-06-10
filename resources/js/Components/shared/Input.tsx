import { ChangeEvent } from "react";

type InputProps = {
    type: string;
    placeholder: string;
    id: string;
    value: string | number;
    className?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
    type,
    placeholder,
    id,
    value,
    className,
    onChange,
}: InputProps) => {
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
