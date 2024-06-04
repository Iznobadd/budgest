import { Option } from "@/interfaces";
import Dropdown from "../shared/Dropdown";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";

interface TransactionFormProps {
    options: Option[];
}

const TransactionForm = ({ options }: TransactionFormProps) => {
    return (
        <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900/70">
            <div className="flex-1 p-6">
                <form action="">
                    <div className="mb-6">
                        <Input type="text" placeholder="Full Name" />
                    </div>
                    <div className="mb-6">
                        <Textarea placeholder="TEesttt" />
                    </div>
                    <div className="mb-6">
                        <Dropdown options={options} name="select" id="select" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransactionForm;
