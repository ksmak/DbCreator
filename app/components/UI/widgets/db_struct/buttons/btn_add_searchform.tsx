import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonAddSearchFormProps = {
    count: any,
}

export default function ButtonAddSearchForm({ count }: ButtonAddSearchFormProps) {
    const { t } = useTranslation()

    return (
        <Form method="post">
            <input type="hidden" name="cnt" defaultValue={count + 1} />
            <CustomButton
                className="bg-primary hover:shadow-primary_shadow"
                type="submit"
                name="_action"
                value="createEmptySearchForm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {t('add_searchform')}
            </CustomButton>
        </Form>
    )
}