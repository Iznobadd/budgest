import MonthlyBudget from "@/Components/charts/MonthlyBudget";
import Dashboard from "@/Layouts/DashboardLayout";

export default function Overview() {
    return (
        <Dashboard>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 max-w-full">
                <MonthlyBudget />
            </div>
        </Dashboard>
    );
}
