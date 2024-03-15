import { Form } from "@remix-run/react";
import { Group, InputField, InputForm, SearchField } from "@prisma/client";
import CustomButton from "~/components/UI/elements/custom_button";
import CustomInput from "~/components/UI/elements/custom_input";
import { useTranslation } from "react-i18next";

type SearchFormProps = {
    searchForm: any,
    inputFields: any,
}
export default function SearchFormForm({ searchForm, inputFields }: SearchFormProps) {
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
                    className="bg-primary hover:shadow-primary_shadow"
                    form="addSearchFieldForm"
                    type="submit"
                    name="_action"
                    value="createEmptySearchField"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {t('add_field')}
                </CustomButton>
                <CustomButton
                    className="hidden"
                    id="updateSearchFormButton"
                    form="updateSearchForm"
                    type="submit"
                    name="_action"
                    value="updateSearchForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('save')}
                </CustomButton>
                <CustomButton
                    className="bg-danger hover:shadow-danger_shadow"
                    form="deleteSearchForm"
                    type="submit"
                    name="_action"
                    value="deleteSearchForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {t('delete')}
                </CustomButton>
            </div>
            <Form
                id="addSearchFieldForm"
                method="post"
            >
                <input type="hidden" name="searchFormId" defaultValue={searchForm.id} />
                <input type="hidden" name="cnt" defaultValue={searchForm.fields?.length + 1} />
            </Form>
            <Form
                id="updateSearchForm"
                key={searchForm?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={searchForm.id} />
                <CustomInput
                    id="searchForm_pos"
                    title={t('pos')}
                    type="number"
                    value={searchForm?.pos}
                    name="pos"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    subClass="w-16"
                />
                <CustomInput
                    id="searchForm_title_kk"
                    title={t('title_kk')}
                    type="text"
                    value={searchForm?.title_kk}
                    name="title_kk"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
                <CustomInput
                    id="searchForm_title_ru"
                    title={t('title_ru')}
                    type="text"
                    value={searchForm?.title_ru}
                    name="title_ru"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
            </Form>
            <Form
                id="deleteSearchForm"
                method="post"
                onSubmit={(event) => {
                    const response = confirm(
                        t('confirm_delete')
                    );
                    if (!response) {
                        event.preventDefault();
                    }
                }}
            >
                <input type="hidden" name="id" defaultValue={searchForm.id ? searchForm.id : ''} />
            </Form>
            {searchForm?.fields && searchForm.fields.map((field: SearchField) => (
                <Form
                    className="hidden"
                    id={`updateSearchFieldForm_${field.id}`}
                    key={`updateSearchFieldForm_${field.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={field.id} />
                    <input type="hidden" name="searchFormId" defaultValue={field.searchFormId} />
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        id={`updateSearchFieldButton_${field.id}`}
                        form={`updateSearchFieldForm_${field.id}`}
                        type="submit"
                        name="_action"
                        value="updateSearchField"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {t('save')}
                    </CustomButton>
                </Form>
            ))}
            <div className="overflow-x-auto mt-4">
                <table className="w-full">
                    <thead
                        className="bg-primary text-white text-center"
                    >
                        <tr>
                            <th className="p-1 text-sm border">#</th>
                            <th className="p-1 text-sm border">ID</th>
                            <th className="p-1 text-sm border">{t('pos')}</th>
                            <th className="p-1 text-sm border">{t('title_kk')}</th>
                            <th className="p-1 text-sm border">{t('title_ru')}</th>
                            <th className="p-1 text-sm border">{t('field')}</th>
                            <th className="p-1 text-sm border"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchForm?.fields && searchForm.fields.map((field: SearchField, index: number) => (
                            <tr key={field.id} >
                                <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                                <td className="p-1 text-sm border border-blue-gray-700">F{field.id}</td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="number"
                                        name="pos"
                                        defaultValue={field.pos}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td
                                    className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40"
                                >
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="text"
                                        name="title_kk"
                                        defaultValue={field.title_kk}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td
                                    className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40"
                                >
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="text"
                                        name="title_ru"
                                        defaultValue={field.title_ru}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <select
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        name="fieldId"
                                        defaultValue={String(field.fieldId)}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    >
                                        <option value="">-</option>
                                        {inputFields && inputFields.map(
                                            (fld: InputField & { group: Group & { inputForm: InputForm } }) => {
                                                let frm = fld.group.inputForm.pos + '. ' + fld.group.inputForm[`title_${i18n.language}` as keyof typeof fld.group.inputForm]
                                                let grp = fld.group.pos + '. ' + fld.group[`title_${i18n.language}` as keyof typeof fld.group]
                                                let fieldTitle = frm + ' -> ' + grp + ' -> ' + fld.pos + '. ' + fld[`title_${i18n.language}` as keyof typeof fld]
                                                return (
                                                    <option key={fld.id} value={fld.id}>
                                                        {fieldTitle}
                                                    </option>)
                                            })}
                                    </select>
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-10">
                                    <Form method="post">
                                        <input type="hidden" name="id" defaultValue={field.id} />
                                        <CustomButton
                                            className="bg-danger hover:shadow-danger_shadow"
                                            onClick={handleDelete}
                                            type="submit"
                                            name="_action"
                                            value="deleteSearchField"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </CustomButton>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}