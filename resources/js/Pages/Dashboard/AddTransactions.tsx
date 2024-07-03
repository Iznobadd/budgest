import TransactionForm from "@/Components/forms/TransactionForm";
import Dashboard from "@/Layouts/DashboardLayout";
import { Option } from "@/interfaces";
import { Head } from "@inertiajs/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

type AddTransactionProps = {
    categoriesOptions: Option[];
    accountsOptions: Option[];
};

const AddTransactions = (props: AddTransactionProps) => {
    return (
        <Dashboard>
            <Head title="Add new transaction" />
            <section className="mb-6 flex items-center justify-start">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
                    <FaMoneyCheckDollar className="w-6 h-6" />
                </span>
                <h1 className="leading-tight text-3xl">Add new transaction</h1>
            </section>
            <TransactionForm
                categoriesOptions={props.categoriesOptions}
                accountsOptions={props.accountsOptions}
            />
        </Dashboard>
    );
};

export default AddTransactions;
