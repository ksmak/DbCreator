import { useTranslation } from "react-i18next";
import CustomButton from "~/components/UI/elements/custom_button";
import { useSubmit } from "@remix-run/react";

type ButtonFindProps = {
    userId: number,
    inputFormId: number,
    doc: any
}

export default function ButtonFind({ userId, inputFormId, doc }: ButtonFindProps) {
    const { t } = useTranslation()
    const submit = useSubmit()

    const handleFind = () => {
        submit({
            _action: "findDocument",
            _user: userId,
            _inputFormId: inputFormId,
            _id: doc.id ? doc.id : '',
            json: JSON.stringify(document)
        }, {
            method: "post",
        })
    }
    return (
        <CustomButton
            className="bg-blue-gray-500 hover:shadow-blue-gray-100"
            onClick={() => handleFind()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            {t('find')}
        </CustomButton>
    )
}