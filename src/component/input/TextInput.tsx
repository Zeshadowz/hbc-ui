import type { InputProps } from "../types.ts";
import BaseInputField from "./BaseInputField.tsx";

export function TextInput(props: Omit<InputProps, "type">){
    return <BaseInputField {...props} type="text" />
}