import type { InputProps } from "../types.ts";
import BaseInputField from "./BaseInputField.tsx";

export function PasswordInput(props: Omit<InputProps, "type">) {
    const {showPassword, ...rest} = props;

    return <BaseInputField {...rest} type={showPassword ? "text" : "password"}/>
}