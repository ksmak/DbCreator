import { useTranslation } from "react-i18next";
import CustomButton from "~/components/UI/elements/custom_button";
import { useSubmit } from "@remix-run/react";

type ButtonSaveProps = {
    userId: number,
    inputFormId: number,
    doc: any
}

export default function ButtonSave({ userId, inputFormId, doc }: ButtonSaveProps) {
    const { t } = useTranslation()
    // const submit = useSubmit()

    // const handleSave = () => {
    //     submit({
    //         _action: "saveDocument",
    //         _user: userId ? userId : '',
    //         _inputFormId: inputFormId ? inputFormId : '',
    //         _id: doc.id ? doc.id : '',
    //         json: JSON.stringify(doc)
    //     }, {
    //         method: "post",
    //     })
    // }
    return (
        <CustomButton
            className="bg-primary hover:shadow-primary_shadow"
            // onClick={() => handleSave()}
            form="documentForm"
            type="submit"
            name="_action"
            value="saveDocument"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
            {t('save')}
        </CustomButton>
    )
}