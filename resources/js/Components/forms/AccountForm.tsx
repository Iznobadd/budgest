import { Dropdown, Input, Textarea, Button, DatePicker } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { Option } from "@/interfaces";
import { MdCategory } from "react-icons/md";
import { LuLayers } from "react-icons/lu";

type AddAccountProps = {
    options: Option[];
    open: boolean;
    setOpen: (open: boolean) => void;
};

const AccountForm = ({ options, open, setOpen }: AddAccountProps) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        account_type: "",
        balance: "",
    });
    console.log(open);

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
                        <LuLayers className="w-6 h-6" />
                    </span>
                    <h1 className="leading-tight text-3xl">Add new Account</h1>
                </section>
                <div className="flex-1 py-6 px-3">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <Input
                                type="text"
                                placeholder="Account Name"
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className={
                                    errors.name && "border-red-500 border-2"
                                }
                            />
                            <Dropdown
                                options={options}
                                name="type"
                                id="type"
                                value={data.account_type}
                                onChange={(e) =>
                                    setData("account_type", e.target.value)
                                }
                                className={
                                    errors.account_type &&
                                    "border-red-500 border-2"
                                }
                            />
                        </div>

                        <div className="mb-6">
                            <Input
                                type="number"
                                placeholder="Balance"
                                id="balance"
                                value={data.balance}
                                onChange={(e) =>
                                    setData("balance", e.target.value)
                                }
                                className={
                                    errors.balance && "border-red-500 border-2"
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

export default AccountForm;
