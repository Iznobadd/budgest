import Table from "@/Components/Transaction/Table";
import Dashboard from "@/Layouts/DashboardLayout";
import { Transaction } from "@/interfaces";
import { Link } from "@inertiajs/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

type ListTransactionProps = {
    transactions: Transaction[];
};
const ListTransaction = (props: ListTransactionProps) => {
    return (
        <Dashboard>
            <section className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
                        <FaMoneyCheckDollar className="w-6 h-6" />
                    </span>
                    <h1 className="leading-tight text-3xl">
                        Recent transactions
                    </h1>
                </div>
                <Link
                    href="/add"
                    className="inline-flex items-center capitalize leading-none text-md rounded-full py-2 px-3 text-white bg-emerald-500"
                >
                    <span>Add new transaction</span>
                </Link>
            </section>

            <Table transactions={props.transactions} />
        </Dashboard>
    );
};

export default ListTransaction;
