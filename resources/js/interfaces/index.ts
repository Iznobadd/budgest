import { ReactNode } from "react";
import { IconType } from "react-icons";

export type MenuAsideItem = {
    label: string;
    icon?: ReactNode;
    href?: string;
    target?: string;
    menu?: MenuAsideItem[];
};
