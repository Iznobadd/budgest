import AccountForm from "@/Components/forms/AccountForm";
import Dashboard from "@/Layouts/DashboardLayout";
import { LuLayers } from "react-icons/lu";
import { Option } from "@/interfaces";

type AddAccountProps = {
    options: Option[];
};

const AddAccount = (props: AddAccountProps) => {
    return (
        <Dashboard>
            <section className="mb-6 flex items-center justify-start">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
                    <LuLayers className="w-6 h-6" />
                </span>
                <h1 className="leading-tight text-3xl">Add new account</h1>
            </section>
            <AccountForm options={props.options} />
        </Dashboard>
    );
};

export default AddAccount;
