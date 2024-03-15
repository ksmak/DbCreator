import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonDeleteProps = {
    userId: number,
    inputFormId: number,
    doc: any
}

export default function ButtonDelete({ userId, inputFormId, doc }: ButtonDeleteProps) {
    const { t } = useTranslation()
    const handleDelete = async (event: any) => {
        const response = confirm(
            "Please confirm you want to delete this record."
        )
        if (!response) {
            event.preventDefault()
        }
    }

    return (
        <Form method="post">
            <input type="hidden" name="_user" value={userId} />
            <input type="hidden" name="_inputFormId" value={inputFormId} />
            <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
            <CustomButton
                className="bg-red-500 hover:shadow-red-100"
                onClick={handleDelete}
                type="submit"
                name="_action"
                value="deleteDocument"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                {t('delete')}
            </CustomButton>
        </Form>
    )
}