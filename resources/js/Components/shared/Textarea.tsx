import { ChangeEvent } from "react";

type TextareaProps = {
    id: string;
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ id, value, placeholder, onChange }: TextareaProps) => {
    return (
        <textarea
            className="dark:text-white px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none h-24 border bg-white dark:bg-slate-800 "
            placeholder={placeholder}
            value={value}
            id={id}
            onChange={onChange}
        ></textarea>
    );
};

export default Textarea;
