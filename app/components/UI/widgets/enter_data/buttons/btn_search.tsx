import { Form, useNavigate } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonSearchProps = {
    inputFormId: number,
}

export default function ButtonSearch({ inputFormId }: ButtonSearchProps) {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <CustomButton
            className="bg-primary hover:shadow-primary_shadow"
            onClick={() => navigate(`/dashboard/enter_data/${inputFormId}?state=search`)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            {t('search')}
        </CustomButton>
    )
}