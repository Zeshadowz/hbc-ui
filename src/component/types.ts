import type { ChangeEvent, MouseEventHandler, ReactNode } from "react";

export interface InputProps {
    type?: string;
    label?: string;
    value?: string | number;
    name?: string;
    placeholder: string;
    error?: string;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    icon?: ReactNode;
    class?: string;
    togglePassword?: boolean;
    showPasswordHandler?: MouseEventHandler<HTMLButtonElement> | undefined;
    showPassword?: boolean;
}

export interface ButtonPros {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'outline';
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}