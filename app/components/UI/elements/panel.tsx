import { ReactNode } from "react"

type PanelProps = {
    className?: string,
    children?: ReactNode,
}
export default function Panel({ className, children, ...props }: PanelProps) {
    return (
        <div
            className={`${className} bg-white border p-1 shadow-blue-gray-700 shadow-md`}
            {...props}
        >
            {children}
        </div>
    )
}