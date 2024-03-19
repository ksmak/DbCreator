import { useNavigate } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonCreateProps = {
    inputFormId: number
}

export default function ButtonCreate({ inputFormId }: ButtonCreateProps) {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <CustomButton
            className="w-32 bg-primary hover:shadow-primary_shadow"
            onClick={() => navigate(`/dashboard/enter_data/${inputFormId}?state=create`)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {t('create')}
        </CustomButton>
    )
}