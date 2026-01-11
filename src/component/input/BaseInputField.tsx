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
                            icon
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
                    {icon}
                </button>
            }
            {error && <p className="mt-1 ml-3 text-sm text-red-600">{error}</p>}
        </div>

    )
}

export default BaseInputField;