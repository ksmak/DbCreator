import { useNavigate } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonCancelProps = {
    inputFormId: number,
    docId: number | undefined
}

export default function ButtonCancel({ inputFormId, docId }: ButtonCancelProps) {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <CustomButton
            outline={true}
            className="hover:shadow-primary_shadow text-primary border-primary"
            onClick={() => navigate(`/dashboard/enter_data/${inputFormId}?docId=${docId}`)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            {t('cancel')}
        </CustomButton>
    )
}