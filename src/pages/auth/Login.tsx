import LoginForm from "../../forms/LoginForm.tsx";

function Login() {
    return (
        <div
            className="flex min-h-screen w-full flex-wrap items-stretch bg-white dark:bg-gray-800 max-md:pb-20 max-md:pt-32">
            <div className="grow md:flex md:w-1/2 md:flex-col md:items-center md:justify-center md:py-20">
                <div className="w-full px-4 text-center text-xs lg:w-1/2">
                    <h1 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">Welcome Back</h1>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">Access your account to explore our amazing
                        features.</p>
                    <LoginForm
                        navigateTo="/dashboard"
                    />
                    <div className="mt-20 text-gray-600 dark:text-gray-400">
                        Don't have an account yet?
                        <a className="font-medium text-indigo-600 underline" href="/register">Sign up</a>
                    </div>
                </div>
            </div>
            <div
                className="hidden flex-col justify-center overflow-hidden bg-cover bg-center md:flex md:w-1/2 bg-amber-500">

            </div>
        </div>
    )
}

export default Login;