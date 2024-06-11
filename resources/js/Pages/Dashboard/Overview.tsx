import MonthlyBudget from "@/Components/charts/MonthlyBudget";
import Shortcuts from "@/Components/shared/Shortcuts";
import Dashboard from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LuLayers } from "react-icons/lu";
import { MdOutlineShowChart } from "react-icons/md";
import { MdCategory } from "react-icons/md";

export default function Overview() {
    console.log(usePage().url);

    return (
        <Dashboard>
            <div>
                <div className="flex items-center justify-start mb-6">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                        <MdOutlineShowChart className="w-6 h-6 text-black/90 dark:text-white/90" />
                    </span>
                    <h2 className="text-3xl">Overview</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <Shortcuts
                        color="text-emerald-500"
                        bg="bg-emerald-500"
                        label="Add new transaction"
                        icon={<FaMoneyCheckDollar className="w-6 h-6" />}
                        href="/dashboard/transactions/add"
                    />
                    <Shortcuts
                        color="text-blue-500"
                        bg="bg-blue-500"
                        label="Add new category"
                        icon={<MdCategory className="w-6 h-6" />}
                        href="/dashboard/transactions/add"
                    />
                    <Shortcuts
                        color="text-yellow-500"
                        bg="bg-yellow-500"
                        label="Add new account"
                        icon={<LuLayers className="w-6 h-6" />}
                        href="/dashboard/transactions/add"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <MonthlyBudget />
            </div>
        </Dashboard>
    );
}
