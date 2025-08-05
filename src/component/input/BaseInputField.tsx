// Abstract base input component

import type { InputProps } from "../types.ts";

function BaseInputField({
                            type,
                            name,
                            value,
                            label,
                            placeholder,
                            error,
                            disabled,
                            onChange,
                            togglePassword,
                            showPasswordHandler,
                            showPassword
                        }: InputProps) {
    return (
        <div className="relative base-input">
            {label && (
                <label
                    htmlFor={name}
                    className="flex cursor-pointer items-center gap-2 text-xs font-medium leading-none text-gray-700 dark:text-gray-200 mb-3">
                    <span>{label}</span>
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                className="block peer w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-800  dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder-gray-400 transition-colors focus:border-indigo-500 focus:outline-0 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500"
            />
            {(togglePassword === true) &&
                <button
                    className="lqd-show-password absolute right-3 top-8/12 z-10 inline-flex -translate-y-1/2 cursor-pointer items-center justify-center rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                    type="button" onClick={showPasswordHandler}>
                    {showPassword ?
                        <svg stroke-width="1.5" className="w-5" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                            <path
                                d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                        </svg> :
                        <svg stroke-width="1.5" className="w-5" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
                            <path
                                d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
                            <path d="M3 3l18 18"></path>
                        </svg>}
                </button>
            }
            {error && <p className="mt-1 ml-3 text-sm text-red-600">{error}</p>}
        </div>

    )
}

export default BaseInputField;