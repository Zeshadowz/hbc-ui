import type {InputProps} from "./types.ts";
import BaseInput from "./BaseInput.tsx";

function TextInput(props: Omit<InputProps, "type">){
    return <BaseInput {...props} type="text" />;
}

export default TextInput;