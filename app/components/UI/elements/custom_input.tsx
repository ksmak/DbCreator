import { ReactNode, InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    subClass?: string,
    id: string,
    title?: string,
    errors?: string,
    children?: ReactNode,
}

export default function CustomInput({ className, subClass, id, title, errors, children, ...props }: CustomInputProps) {
    return (
        <div
            className={`${className} p-1 flex items-baseline`}
        >
            <label
                className="font-bold text-sm mr-1 min-w-40"
                htmlFor={id}
            >
                {title}
            </label>
            <div className="flex flex-col justify-between">
                <input
                    id={id}
                    className={`${subClass} font-mono font-bold text-sm border-2 p-1 focus:outline-blue-gray-500`}
                    {...props}
                >
                    {children}
                </input>
                <span className="text-sm text-red-500 h-4">{errors}</span>
            </div>
        </div>
    );
};