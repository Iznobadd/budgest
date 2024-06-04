import { ReactNode } from "react";
import { IconType } from "react-icons";

export type MenuAsideItem = {
    label: string;
    icon?: ReactNode;
    href?: string;
    target?: string;
    menu?: MenuAsideItem[];
};

export interface User {
    user: {
        id: string;
        email: string;
        name: string;
        avatar_url: string | null;
    };
}
