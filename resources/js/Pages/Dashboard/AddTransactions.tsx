import TransactionForm from "@/Components/forms/TransactionForm";
import Dashboard from "@/Layouts/DashboardLayout";
import { Option } from "@/interfaces";
import { usePage } from "@inertiajs/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

type AddTransactionProps = {
    options: Option[];
};

const AddTransactions = (props: AddTransactionProps) => {
    console.log(usePage().props);
    return (
        <Dashboard>
            <section className="mb-6 flex items-center justify-start">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
                    <FaMoneyCheckDollar className="w-6 h-6" />
                </span>
                <h1 className="leading-tight text-3xl">Add new transaction</h1>
            </section>
            <TransactionForm options={props.options} />
        </Dashboard>
    );
};

export default AddTransactions;