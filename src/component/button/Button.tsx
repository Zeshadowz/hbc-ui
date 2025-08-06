import type { ButtonPros } from "../types.ts";

function Button({id, label, type, isLoading, disabled, onClick}: ButtonPros) {

    return (
        <button
            id={id}
            type={type}
            disabled={disabled || isLoading}
            onClick={onClick}
            className={`lqd-btn group inline-flex items-center justify-center gap-1.5 font-medium rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl lqd-btn-primary bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:bg-indigo-700 focus-visible:shadow-indigo-300/10 px-5 py-3 
            ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isLoading ? 'Loading...' : label}
        </button>
    )
}

export default Button;