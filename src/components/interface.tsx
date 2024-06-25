import { ReactNode } from "react";


export interface IconProps {
    color: string;
    fill: string;
}

export interface ButtonProps {
    title: string;
    icon?: ReactNode;
    height?: number;
    onClick?: () => void;
}

export interface NewLocationProps {
    onClose?: () => void;
    open?: boolean;
}


export interface SidebarProps {
    children: ReactNode
}

export interface LogoProps {
    collapsed: boolean;
}

export interface SelectDeptProps {
    department: string;
}

export interface UserCardProps {
    text: String;
    data: number;
    data2: number;
}

export interface StringComponentProps {
    text: string;
}