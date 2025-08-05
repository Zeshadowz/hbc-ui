import { type FormEvent, useState } from "react";
import { TextInput } from "../component/input/TextInput.tsx";
import { PasswordInput } from "../component/input/PasswordInput.tsx";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const handleShowPassword = () => {
        console.log("Handle Show Password");
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextInput
                label="Username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                togglePassword={true}
                showPasswordHandler={handleShowPassword}
                showPassword={showPassword}
            />
            <button
                className="lqd-btn group inline-flex items-center justify-center gap-1.5 font-medium rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl lqd-btn-primary bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:bg-indigo-700 focus-visible:shadow-indigo-300/10 px-5 py-3"
                id="LoginFormButton" type="submit">
                Sign in
            </button>
        </form>
    );
}

export default LoginForm;