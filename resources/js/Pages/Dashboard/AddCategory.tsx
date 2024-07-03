import Dashboard from "@/Layouts/DashboardLayout";
import CategoryForm from "@/Components/forms/CategoryForm";
import { MdCategory } from "react-icons/md";
import { Head } from "@inertiajs/react";

const AddCategory = () => {
    return (
        <Dashboard>
            <Head title="Add new category" />
            <section className="mb-6 flex items-center justify-start">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
                    <MdCategory className="w-6 h-6" />
                </span>
                <h1 className="leading-tight text-3xl">Add new category</h1>
            </section>
            <CategoryForm />
        </Dashboard>
    );
};

export default AddCategory;
