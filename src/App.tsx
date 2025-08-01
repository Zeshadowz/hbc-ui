import './App.css'
import TextInput from "./component/input/TextInput.tsx";
import PasswordInput from "./component/input/PasswordInput.tsx";

function App() {

    return (
        <div>
            <TextInput
                id="username"
                label="Username"
                extra="mb-4"
                placeholder="Enter your username"
                variant="auth"
            />
            <PasswordInput
                id="password"
                label="Password"
                extra="mb-4"
                placeholder="Enter your password"
                variant="auth"
            />
        </div>
    );
}

export default App
