import outlined from '@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    outline?: boolean,
    children?: ReactNode,
}

export default function CustomButton({ className, outline, children, ...props }: CustomButtonProps) {
    let cls = ""
    if (outline) {
        cls = `border text-xs py-1.5 px-3.5 flex items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}`
    } else {
        cls = `text-white text-xs py-1.5 px-3.5 flex items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}`
    }
    return (
        <button {...props}
            className={cls}
        >
            {children}
        </button>
    );
};
