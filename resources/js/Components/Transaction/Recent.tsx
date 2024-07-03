import { Transaction } from "@/interfaces";
import { BsEyeFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { MdPieChart } from "react-icons/md";

const Recent = ({ transactions }: any) => {
    return (
        <div>
            <div className="flex items-center justify-start mb-6">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2">
                    <MdPieChart className="w-6 h-6 text-black/90 dark:text-white/90" />
                </span>
                <h2 className="text-2xl">Recent Transactions</h2>
            </div>
            <div className="bg-white flex  rounded-2xl flex-col dark:bg-slate-900/70 text-black dark:text-white ">
                <div className="flex-1">
                    <table className="w-full border-collapse">
                        <thead className="hidden lg:table-header-group">
                            <tr className="table-row relative">
                                <th className="text p-3 text-left">Account</th>
                                <th className="text p-3 text-left">Category</th>
                                <th className="text p-3 text-left">Amount</th>
                                <th className="text p-3 text-left">Date</th>
                                <th className="text p-3 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(
                                (transaction: Transaction, index: any) => (
                                    <tr key={index}>
                                        <td data-label="Account">
                                            {transaction.account.name}
                                        </td>
                                        <td data-label="Category">
                                            {transaction.category.name}
                                        </td>
                                        <td data-label="Amount">
                                            {transaction.amount} €
                                        </td>
                                        <td
                                            data-label="Date"
                                            className="lg:w-1 whitespace-nowrap"
                                        >
                                            <small className="text-gray-500 dark:text-slate-400">
                                                {transaction.transaction_date.toString()}
                                            </small>
                                        </td>
                                        <td className="lg:w-1 before:hidden whitespace-nowrap flex justify-center lg:table-cell">
                                            <div className="flex items-center justify-start lg:justify-end -mb-3 flex-nowrap">
                                                <button className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 p-1">
                                                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                                                        <BsEyeFill />
                                                    </span>
                                                </button>
                                                <button className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 mr-3 last:mr-0 mb-3 p-1">
                                                    <span className="inline-flex justify-center items-center w-6 h-6">
                                                        <FaTrashAlt />
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recent;
