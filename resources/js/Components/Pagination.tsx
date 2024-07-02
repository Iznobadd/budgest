import { Link } from "@inertiajs/react";

const Pagination = ({ links }: any) => {
    return (
        <nav className="text-center mt-4">
            {links.map((link: any) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-200 text-md " +
                        (link.active ? "bg-slate-900 " : " ") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed "
                            : "hover:bg-slate-900")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
};

export default Pagination;
