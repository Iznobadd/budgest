import { usePage } from "@inertiajs/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { MdPieChart } from "react-icons/md";

ChartJS.register(ArcElement, Tooltip, Legend);

const MonthlyBudget = () => {
    const { props } = usePage();

    const data = {
        labels: props.categoriesTransactions as string[],
        datasets: [
            {
                data: props.monthlyTransactions as number[],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <div className="flex items-center justify-start mb-6">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                    <MdPieChart className="w-6 h-6 text-black/90 dark:text-white/90" />
                </span>
                <h2 className="text-2xl">Categories budget</h2>
            </div>
            <div className="bg-white dark:bg-slate-900/70 rounded-2xl p-6">
                <Pie data={data} />
            </div>
        </div>
    );
};

export default MonthlyBudget;
