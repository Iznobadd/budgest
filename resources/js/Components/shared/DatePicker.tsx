import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Datepicker from "tailwind-datepicker-react";

const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    maxDate: new Date(new Date().setDate(new Date().getDate() + 30)),
    minDate: new Date(new Date().setDate(new Date().getDate() - 30)),
    theme: {
        background: "bg-white dark:bg-slate-800",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "text-black dark:text-white",
        disabledText: "",
        input: "dark:bg-slate-800 border-gray-700 bg-white dark:border-gray-700 rounded py-3.5 dark:text-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none",
        inputIcon: "",
        selected: "border-blue-600",
    },
    icons: {
        prev: () => <GrFormPreviousLink />,
        next: () => <GrFormNextLink />,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
};

type DatePickerProps = {
    value: Date;
    onChange: (value: Date, event?: HTMLInputElement | null) => void;
    className?: string;
};

const DatePicker = ({ value, onChange }: DatePickerProps) => {
    const [show, setShow] = useState<boolean>(false);
    const handleClose = (state: boolean) => {
        setShow(state);
    };
    return (
        <div className="relative">
            <Datepicker
                value={value}
                options={options}
                onChange={onChange}
                show={show}
                setShow={handleClose}
            />
        </div>
    );
};

export default DatePicker;
