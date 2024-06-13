import { Input, Button } from "../shared";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";

const CategoryForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        limit: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("add");
    };

    return (
        <div className="bg-white flex rounded-2xl flex-col dark:bg-slate-900/70">
            <div className="flex-1 p-6">
                <form action="" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Input
                            type="text"
                            placeholder="Category name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={errors.name && "border-red-500 border-2"}
                        />
                        <Input
                            type="number"
                            placeholder="Category Limit"
                            id="limit"
                            value={data.limit}
                            onChange={(e) => setData("limit", e.target.value)}
                            className={
                                errors.limit && "border-red-500 border-2"
                            }
                        />
                    </div>

                    <div>
                        <Button label="Submit" disabled={processing} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryForm;
