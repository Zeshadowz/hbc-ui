import * as React from "react";
import { type FormEvent, useState } from "react";
import { TextInput } from "../component/input/TextInput.tsx";
import { PasswordInput } from "../component/input/PasswordInput.tsx";
import { validatePassword } from "../utils/validate.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


interface FormErrors {
    username?: string;
    password?: string;
}

interface LoginProps {
    navigateTo?: string;
}

function LoginForm({navigateTo}: LoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors({});

        // validate inputs
        const passError = validatePassword(password);

        if (passError) {
            setErrors({password: passError});
            toast.error('Login failed. Please try again.');
            return;
        }

        try {

            toast.success('Login successfully.');
            navigate(`${navigateTo}`);
        } catch (error) {
            toast.error('Login failed. Please try again.');
            console.log(error)
        }
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextInput
                label="Username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                // onChange={(e) => setUsername(e.target.value)}
                error={errors.username}
            />
            <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                togglePassword={true}
                showPasswordHandler={handleShowPassword}
                showPassword={showPassword}
                error={errors.password}
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