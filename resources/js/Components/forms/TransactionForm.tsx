import { Option } from "@/interfaces";
import { Dropdown, Input, Textarea, Button, DatePicker } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

interface TransactionFormProps {
    categoriesOptions: Option[];
    accountsOptions: Option[];
    open: boolean;
    setOpen: (open: boolean) => void;
}

const TransactionForm = ({
    categoriesOptions,
    accountsOptions,
    open,
    setOpen,
}: TransactionFormProps) => {
    const { data, setData, post, processing, errors } = useForm({
        amount: "",
        category_id: "",
        account_id: "",
        transaction_date: new Date(),
        description: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("add");
    };

    return (
        <div
            className={`fixed inset-0 flex justify-center items-center z-50 ${
                open ? "bg-black/80" : ""
            }`}
        >
            <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900 p-8">
                <section className="mb-6 flex items-center justify-start">
                    <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-800 dark:text-white mr-3">
                        <FaMoneyCheckDollar className="w-6 h-6" />
                    </span>
                    <h1 className="leading-tight text-3xl">
                        Add new Transaction
                    </h1>
                </section>
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
                                        errors.amount &&
                                        "border-red-500 border-2"
                                    }
                                />
                            </div>
                            <DatePicker
                                value={data.transaction_date}
                                onChange={(newDate) =>
                                    setData("transaction_date", newDate)
                                }
                                className={
                                    errors.transaction_date &&
                                    "border-red-500 border-2"
                                }
                            />
                            {errors.transaction_date && (
                                <div>{errors.transaction_date}</div>
                            )}
                            <Dropdown
                                options={categoriesOptions}
                                name="category"
                                id="category"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                                className={
                                    errors.category_id &&
                                    "border-red-500 border-2"
                                }
                            />
                            <Dropdown
                                options={accountsOptions}
                                name="account"
                                id="account"
                                value={data.account_id}
                                onChange={(e) =>
                                    setData("account_id", e.target.value)
                                }
                                className={
                                    errors.account_id &&
                                    "border-red-500 border-2"
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
                                    errors.description &&
                                    "border-red-500 border-2"
                                }
                            />
                        </div>

                        <div>
                            <Button
                                label="Submit"
                                disabled={processing}
                                color="blue"
                                type="submit"
                            />
                            <Button
                                label="Cancel"
                                disabled={processing}
                                color="red"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                type="button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TransactionForm;
