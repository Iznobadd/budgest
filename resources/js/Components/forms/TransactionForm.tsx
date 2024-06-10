import { Option } from "@/interfaces";
import { Dropdown, Input, Textarea, Button, DatePicker } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";

interface TransactionFormProps {
    options: Option[];
}

const TransactionForm = ({ options }: TransactionFormProps) => {
    const { data, setData, post, processing, errors } = useForm({
        amount: "",
        category: "",
        date: {
            startDate: new Date(),
            endDate: new Date(),
        },
        description: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);

        post("/dashboard/transactions/add");
    };

    return (
        <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900/70">
            <div className="flex-1 p-6">
                <form action="" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <Input
                                type="number"
                                placeholder="Amount"
                                id="amount"
                                value={data.amount}
                                onChange={(e) =>
                                    setData("amount", e.target.value)
                                }
                                className={
                                    errors.amount && "border-red-500 border-2"
                                }
                            />
                        </div>
                        <DatePicker
                            value={data.date}
                            onChange={(dateValue) => {
                                const safeDateValue = {
                                    startDate: dateValue?.startDate
                                        ? new Date(dateValue.startDate)
                                        : new Date(), // ensure it's a Date object
                                    endDate: dateValue?.endDate
                                        ? new Date(dateValue.endDate)
                                        : new Date(), // ensure it's a Date object
                                };
                                setData("date", safeDateValue);
                            }}
                            className={errors.date && "border-red-500 border-2"}
                        />
                        <Dropdown
                            options={options}
                            name="category"
                            id="category"
                            value={data.category}
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                            className={
                                errors.category && "border-red-500 border-2"
                            }
                        />
                    </div>

                    <div className="mb-6">
                        <Textarea
                            value={data.description}
                            id="description"
                            placeholder="Enter a description for your transaction"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className={
                                errors.description && "border-red-500 border-2"
                            }
                        />
                    </div>

                    <div>
                        <Button label="Submit" disabled={processing} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransactionForm;
