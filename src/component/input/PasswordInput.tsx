import type { InputProps } from "../types.ts";
import BaseInputField from "./BaseInputField.tsx";

export function PasswordInput(props: Omit<InputProps, "type">) {
    const {showPassword, ...rest} = props;

    console.log("Show-Password: ", showPassword);

    const hide =
        (<svg stroke-width="1.5" className="w-5" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
            <path
                d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
            <path d="M3 3l18 18"></path>
        </svg>);

    const show =
        (
            <svg stroke-width="1.5" className="w-5" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path
                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
            </svg>
        );

    return <BaseInputField
        {...rest}
        type={showPassword === true ? "text" : "password"}
        icon={showPassword ? show : hide}
    />
}