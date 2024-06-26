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


export interface DrawerInputFieldProps {
    labelName: string;
    width?: string;
    widthType?: string;
    inputBoxBG?: string;
    endLabel?: ReactNode;
    placeHolder?: string;
    value?: string;
}

export interface LocationData {
    locationName?: string;
    shortName?: string;
    address?: string;
    timeZone?: string;
    weekdays?: Array<string>;
    holidays?: Array<{
        date: string;
        title: string;
    }>;
}

export interface LocationProps {
    title: string;
    onClose?: () => void;
    open?: boolean;
    data?: LocationData;
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