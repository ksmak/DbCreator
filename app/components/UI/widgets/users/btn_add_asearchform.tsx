import { Form, useNavigate } from "@remix-run/react";
import CustomButton from "../../elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonAddAccessSearchFormProps = {
    roleId: number
}

export default function ButtonAddAccessSearchForm({ roleId }: ButtonAddAccessSearchFormProps) {
    const { t } = useTranslation()

    return (
        <Form method="post">
            <input type="hidden" name="roleId" value={roleId} />
            <CustomButton
                className="bg-primary hover:shadow-blue-gray-100"
                type="submit"
                name="_action"
                value="createEmptyAccessSearch"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {t('add')}
            </CustomButton>
        </Form>
    )
}