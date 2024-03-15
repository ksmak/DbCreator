import { ReactNode, SelectHTMLAttributes } from 'react';

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string,
    id: string,
    title?: string,
    errors?: string,
    children?: ReactNode,
}

export default function CustomSelect({ className, id, title, errors, children, ...props }: CustomSelectProps) {
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
                <select
                    id={id}
                    className="font-mono text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white"
                    {...props}
                >
                    {children}
                </select>
                <span className="text-sm text-red-500 h-4">{errors}</span>
            </div>
        </div>
    );
};