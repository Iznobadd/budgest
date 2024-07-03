import AccountForm from "@/Components/forms/AccountForm";
import Dashboard from "@/Layouts/DashboardLayout";
import { LuLayers } from "react-icons/lu";
import { Option } from "@/interfaces";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

type AddAccountProps = {
    options: Option[];
};

const AddAccount = (props: AddAccountProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Dashboard>
            <Head title="Add new bank account" />
            <section className="mb-6 flex items-center justify-start">
                <button className="bg-white p-5" onClick={() => setOpen(!open)}>
                    OPEN
                </button>
            </section>
            {open && (
                <AccountForm
                    options={props.options}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </Dashboard>
    );
};

export default AddAccount;
