import { ReactNode } from "react";

type ShortcutsProps = {
    color: string;
    bg: string;
    label: string;
    icon: ReactNode;
};

const Shortcuts = ({ color, label, icon, bg }: ShortcutsProps) => {
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
                    <div
                        className={`inline-flex items-center capitalize leading-none text-md rounded-full py-2 px-3 ${bg} text-white`}
                    >
                        <span>{label}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shortcuts;
