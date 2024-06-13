import { Option } from "@/interfaces";
import { Dropdown, Input, Textarea, Button, DatePicker } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";

interface TransactionFormProps {
    categoriesOptions: Option[];
    accountsOptions: Option[];
}

const TransactionForm = ({
    categoriesOptions,
    accountsOptions,
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

        console.log(data);
        post("add");
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
                                errors.category_id && "border-red-500 border-2"
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
                                errors.account_id && "border-red-500 border-2"
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
