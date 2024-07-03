import { Link } from "@inertiajs/react";
import { ReactNode, useState } from "react";
import AccountForm from "../forms/AccountForm";
import { Option } from "@/interfaces";
import CategoryForm from "../forms/CategoryForm";
import TransactionForm from "../forms/TransactionForm";

type ShortcutsProps = {
    color: string;
    bg: string;
    label: string;
    icon: ReactNode;
    formType: "account" | "category" | "transaction";
    accountOptions?: Option[];
    categoryOptions?: Option[];
};

const Shortcuts = (props: ShortcutsProps) => {
    const {
        color,
        label,
        icon,
        bg,
        formType,
        accountOptions,
        categoryOptions,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<
        "account" | "category" | "transaction" | null
    >(null);

    const openModal = (type: "account" | "category" | "transaction") => {
        setModalType(type);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white dark:bg-slate-900/70 rounded-2xl flex-col flex mb-6">
            <div className="flex-1 p-6">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0">
                        <span
                            className={`inline-flex justify-center items-center w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-800 md:mr-6 mb-6 md:mb-0 ${color}`}
                        >
                            {icon}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            console.log("test");
                            openModal(formType);
                        }}
                        className={`inline-flex items-center capitalize leading-none text-md rounded-full py-2 px-3 ${bg} text-white`}
                    >
                        <span>{label}</span>
                    </button>
                </div>
            </div>
            {isModalOpen && modalType === "account" && (
                <AccountForm
                    options={accountOptions || []}
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                />
            )}

            {isModalOpen && modalType === "category" && (
                <CategoryForm open={isModalOpen} setOpen={setIsModalOpen} />
            )}

            {isModalOpen && modalType === "transaction" && (
                <TransactionForm
                    accountsOptions={accountOptions || []}
                    categoriesOptions={categoryOptions || []}
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                />
            )}
        </div>
    );
};

export default Shortcuts;
