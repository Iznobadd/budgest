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

export interface Option {
    label: string;
    value: string;
}

export interface Transaction {
    account: Account;
    category: Category;
    amount: number;
    transaction_date: Date;
}

export interface Account {
    name: string;
    account_type: string;
    balance: number;
}

export interface Category {
    name: string;
    limit: number;
}
