import { Dropdown, Input, Textarea, Button, DatePicker } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { Option } from "@/interfaces";

type AddAccountProps = {
    options: Option[];
};

const AccountForm = ({ options }: AddAccountProps) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        account_type: "",
        balance: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("add");
    };

    return (
        <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900/70">
            <div className="flex-1 p-6">
                <form action="" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Input
                            type="text"
                            placeholder="Account Name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={errors.name && "border-red-500 border-2"}
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
                                errors.account_type && "border-red-500 border-2"
                            }
                        />
                    </div>

                    <div className="mb-6">
                        <Input
                            type="number"
                            placeholder="Balance"
                            id="balance"
                            value={data.balance}
                            onChange={(e) => setData("balance", e.target.value)}
                            className={
                                errors.balance && "border-red-500 border-2"
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

export default AccountForm;
