import { AccessSearchForm, AccessType, SearchForm } from "@prisma/client";
import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import ButtonDeleteAccessSearchForm from "./btn_delete_asearchform";
import CustomButton from "../../elements/custom_button";


type AccessSearchFormsTableProps = {
    aforms: any,
    searchForms: SearchForm[]
}

export default function AccessSearchFormsTable({ aforms, searchForms }: AccessSearchFormsTableProps) {
    const { i18n, t } = useTranslation()

    return (
        <>
            {aforms && aforms.map((aform: AccessSearchForm) => (
                <Form
                    className="hidden"
                    id={`updateAccessSearchForm_${aform.id}`}
                    key={`updateAccessSearchForm_${aform.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={aform.id} />
                    <input type="hidden" name="roleId" defaultValue={aform.roleId} />
                    <input type="hidden" name="accessType" defaultValue={AccessType.READ} />
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        id={`updateAccessSearchFormButton_${aform.id}`}
                        form={`updateAccessSearchForm_${aform.id}`}
                        type="submit"
                        name="_action"
                        value="updateAccessSearch"
                    />
                </Form>
            ))}
            <table
                className="w-full"
            >
                <thead
                    className="bg-primary text-white text-center"
                >
                    <tr>
                        <th className="p-1 text-sm border border-blue-gray-500">#</th>
                        <th className="p-1 text-sm border border-blue-gray-500">{t('form')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500"></th>
                    </tr>
                </thead>
                <tbody>
                    {aforms.map((aform: AccessSearchForm, index: number) => (
                        <tr
                            key={aform.id}
                        >
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">{index + 1}</td>
                            <td className="p-1 text-sm border border-blue-gray-500">
                                <select
                                    className="text-sm w-full"
                                    form={`updateAccessSearchForm_${aform.id}`}
                                    name="formId"
                                    defaultValue={aform.formId ? aform.formId : ''}
                                    onChange={() => {
                                        const button = document.getElementById(`updateAccessSearchFormButton_${aform.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                >
                                    {searchForms.map((searchForm: SearchForm) => (
                                        <option key={searchForm.id} value={searchForm.id}>
                                            {searchForm[`title_${i18n.language}` as keyof typeof searchForm]}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">
                                <ButtonDeleteAccessSearchForm aform={aform} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}