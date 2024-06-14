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

