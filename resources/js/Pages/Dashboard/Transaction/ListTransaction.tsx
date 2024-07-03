import Pagination from "@/Components/Pagination";
import Table from "@/Components/Transaction/Table";
import Shortcuts from "@/Components/shared/Shortcuts";
import Dashboard from "@/Layouts/DashboardLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const ListTransaction = ({
    transactions,
    categoriesOptions,
    accountsOptions,
}: any) => {
    console.log(transactions);

    return (
        <Dashboard>
            <Head title="Transactions list" />
            <section className="mb-6 flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-5 md:mb-0">
                    <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
                        <FaMoneyCheckDollar className="w-6 h-6" />
                    </span>
                    <h1 className="leading-tight text-3xl">Transactions</h1>
                </div>
                <Shortcuts
                    color="text-emerald-500"
                    bg="bg-emerald-500"
                    label="Add new transaction"
                    icon={<FaMoneyCheckDollar className="w-6 h-6" />}
                    formType="transaction"
                    accountOptions={accountsOptions}
                    categoryOptions={categoriesOptions}
                />
            </section>

            <Table transactions={transactions} />
            <Pagination className="mt-6" links={transactions.links} />
        </Dashboard>
    );
};

export default ListTransaction;
