import { Dictionary } from "@prisma/client";
import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import CustomButton from "~/components/UI/elements/custom_button";

type ButtonAddDictValueProps = {
    dictionary: Dictionary
}

export default function ButtonAddDictValue({ dictionary }: ButtonAddDictValueProps) {
    const { t } = useTranslation()

    return (
        <Form method="post">
            <CustomButton
                className="bg-primary hover:shadow-primary_shadow"
                type="submit"
                name="_action"
                value="addDictVal"
            >
                <input type="hidden" name="dictId" value={dictionary.id} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {t('add')}
            </CustomButton>
        </Form>
    )
}