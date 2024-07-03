import { Input, Button } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { MdCategory } from "react-icons/md";

type AddCategoryProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
const CategoryForm = ({ open, setOpen }: AddCategoryProps) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        limit: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("add");
    };

    return (
        <div
            className={`fixed inset-0 flex justify-center items-center z-50 ${
                open ? "bg-black/80" : ""
            }`}
        >
            <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900 p-8">
                <section className="mb-6 flex items-center justify-start">
                    <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-800 dark:text-white mr-3">
                        <MdCategory className="w-6 h-6" />
                    </span>
                    <h1 className="leading-tight text-3xl">Add new Category</h1>
                </section>
                <div className="flex-1 p-6">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <Input
                                type="text"
                                placeholder="Category name"
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className={
                                    errors.name && "border-red-500 border-2"
                                }
                            />
                            <Input
                                type="number"
                                placeholder="Category Limit"
                                id="limit"
                                value={data.limit}
                                onChange={(e) =>
                                    setData("limit", e.target.value)
                                }
                                className={
                                    errors.limit && "border-red-500 border-2"
                                }
                            />
                        </div>

                        <div>
                            <Button
                                label="Submit"
                                disabled={processing}
                                color="blue"
                                type="submit"
                            />
                            <Button
                                label="Cancel"
                                disabled={processing}
                                color="red"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                type="button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryForm;
