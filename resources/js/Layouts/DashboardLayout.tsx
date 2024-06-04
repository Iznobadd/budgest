import AsideMenu from "@/Components/AsideMenu";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import { RiMenuFold3Line, RiMenuUnfold3Line } from "react-icons/ri";

interface DashboardProps {
    children?: React.ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
    const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);

    return (
        <div className="overflow-hidden bg-gray-100 dark:bg-slate-800">
            <div
                className={`pt-14 min-h-screen w-screen lg:w-auto transition-position bg-gray-100 dark:bg-slate-800 ${
                    isAsideMobileExpanded ? "ml-60" : "lg:ml-60"
                }`}
            >
                <Navbar
                    className={isAsideMobileExpanded ? "ml-60" : ""}
                    onClick={() =>
                        setIsAsideMobileExpanded(!isAsideMobileExpanded)
                    }
                    icon={
                        isAsideMobileExpanded ? (
                            <RiMenuFold3Line className="h-6 w-6" />
                        ) : (
                            <RiMenuUnfold3Line className="h-6 w-6" />
                        )
                    }
                />
                <AsideMenu isAsideMobileExpanded={isAsideMobileExpanded} />
                <div className="p-6 lg:mx-auto xl:max-w-6xl">{children}</div>
            </div>
        </div>
    );
}
