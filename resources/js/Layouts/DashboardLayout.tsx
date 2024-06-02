import AsideMenu from "@/Components/AsideMenu";
import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { RiMenuFold3Line, RiMenuUnfold3Line } from "react-icons/ri";

export default function Dashboard() {
    const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);

    return (
        <div className="overflow-hidden">
            <div
                className={`pt-14 min-h-screen w-screen transition-position bg-gray-50 ${
                    isAsideMobileExpanded ? "ml-60" : ""
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
                <p className="p-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima provident eius, est esse, eligendi praesentium animi
                    at ea labore, quis molestias ipsam. Dignissimos, numquam
                    alias adipisci explicabo ipsum facilis qui.
                </p>
            </div>
        </div>
    );
}
