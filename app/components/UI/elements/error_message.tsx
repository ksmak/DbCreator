import MaterialTailwind from "@material-tailwind/react"
import { useState } from "react"
const { Alert } = MaterialTailwind

type ErrorMessageProps = {
    errors?: string,
}

export default function ErrorMessage({ errors }: ErrorMessageProps) {
    const [open, setOpen] = useState(false)

    return (
        <Alert
            className="text-white bg-red-500"
            open={errors !== undefined}
            onClose={() => setOpen(false)}
        >
            {errors ? errors : ""}
        </Alert>
    )
}