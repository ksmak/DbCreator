import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import CustomInput from "~/components/UI/elements/custom_input";
import { useTranslation } from "react-i18next";

type DictionaryFormProps = {
    dictionary: any
}

export default function DictionaryForm({ dictionary }: DictionaryFormProps) {
    const { i18n, t } = useTranslation()
    const handleDelete = async (event: any) => {
        const response = confirm(
            t('confirm_delete')
        )
        if (!response) {
            event.preventDefault()
        }
    }

    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <CustomButton
                    className="hidden"
                    id="updateDictionaryButton"
                    form="updateDictionary"
                    type="submit"
                    name="_action"
                    value="updateDictionary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('save')}
                </CustomButton>
                <Form method="post">
                    <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
                    <CustomButton
                        className="bg-red-500 hover:shadow-red-100"
                        onClick={handleDelete}
                        type="submit"
                        name="_action"
                        value="deleteDictionary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        {t('delete')}
                    </CustomButton>
                </Form>
            </div>
            <Form
                id="updateDictionary"
                key={dictionary?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
                <CustomInput
                    id={dictionary.id}
                    title={t('title_kk')}
                    type="text"
                    defaultValue={dictionary?.title_kk}
                    name="title_kk"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateDictionaryButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
                <CustomInput
                    id={dictionary.id}
                    title={t('title_ru')}
                    type="text"
                    defaultValue={dictionary?.title_ru}
                    name="title_ru"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateDictionaryButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
            </Form >
        </>
    )
}