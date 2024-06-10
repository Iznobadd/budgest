import { Option } from "@/interfaces";
import Dropdown from "../shared/Dropdown";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import DatePicker from "../shared/DatePicker";
import Button from "../shared/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { router } from "@inertiajs/react";
import { DateValueType } from "react-tailwindcss-datepicker";

interface TransactionFormProps {
    options: Option[];
}

interface FormValues {
    amount: number | null;
    category: string;
    date: DateValueType;
    description: string;
}

const TransactionForm = ({ options }: TransactionFormProps) => {
    const [values, setValues] = useState<FormValues>({
        amount: null,
        category: "",
        date: {
            startDate: new Date(),
            endDate: new Date(),
        },
        description: "s",
    });

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleDateChange = (date: DateValueType) => {
        setValues((prev) => ({ ...prev, date }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (key === "date" && value.startDate) {
                formData.append(key, value.startDate);
            } else {
                formData.append(key, value);
            }
        });
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
        router.post("/test", formData);
    };

    return (
        <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900/70">
            <div className="flex-1 p-6">
                <form action="" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Input
                            type="number"
                            placeholder="Amount"
                            id="amount"
                            value={values.amount ?? ""}
                            onChange={handleChange}
                        />
                        <DatePicker
                            value={values.date}
                            onChange={handleDateChange}
                        />
                        <Dropdown
                            options={options}
                            name="category"
                            id="category"
                            value={values.category}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-6">
                        <Textarea
                            value={values.description}
                            id="description"
                            placeholder="Enter a description for your transaction"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Button label="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransactionForm;
