import { useTranslation } from "react-i18next";
import CustomButton from "~/components/UI/elements/custom_button";

export default function ButtonSave() {
    const { t } = useTranslation()
    return (
        <CustomButton
            className="bg-primary hover:shadow-primary_shadow"
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