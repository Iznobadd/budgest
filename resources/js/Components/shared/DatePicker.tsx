import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type DatePickerProps = {
    value: DateValueType;
    onChange: (value: DateValueType, event?: HTMLInputElement | null) => void;
    className?: string;
};

const DatePicker = ({ value, onChange, className }: DatePickerProps) => {
    return (
        <Datepicker
            value={value}
            onChange={onChange}
            asSingle={true}
            useRange={false}
            displayFormat={"DD/MM/YYYY"}
            minDate={new Date()}
            i18n={"en"}
            classNames={{
                input: () => {
                    return `relative transition-all border dark:border-gray-700 duration-300 py-[0.825rem] pl-4 pr-14 w-full border-gray-700 dark:bg-slate-800 dark:text-white/80 rounded tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed ${className}`;
                },
            }}
        />
    );
};

export default DatePicker;
