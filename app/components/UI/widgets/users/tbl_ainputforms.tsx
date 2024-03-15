import { AccessInputForm, AccessType, InputForm } from "@prisma/client";
import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import ButtonDeleteAccessInputForm from "./btn_delete_ainputform";
import CustomButton from "../../elements/custom_button";


type AccessInputFormsTableProps = {
    aforms: any,
    inputForms: InputForm[]
}

export default function AccessInputFormsTable({ aforms, inputForms }: AccessInputFormsTableProps) {
    const { i18n, t } = useTranslation()

    return (
        <>
            {aforms && aforms.map((aform: AccessInputForm) => (
                <Form
                    className="hidden"
                    id={`updateAccessInputForm_${aform.id}`}
                    key={`updateAccessInputForm_${aform.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={aform.id} />
                    <input type="hidden" name="roleId" defaultValue={aform.roleId} />
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        id={`updateAccessInputFormButton_${aform.id}`}
                        form={`updateAccessInputForm_${aform.id}`}
                        type="submit"
                        name="_action"
                        value="updateAccessInput"
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
                        <th className="p-1 text-sm border border-blue-gray-500">{t('access_type')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500"></th>
                    </tr>
                </thead>
                <tbody>
                    {aforms.map((aform: AccessInputForm, index: number) => (
                        <tr
                            key={aform.id}
                        >
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">{index + 1}</td>
                            <td className="p-1 text-sm border border-blue-gray-500">
                                <select
                                    className="text-sm w-full"
                                    form={`updateAccessInputForm_${aform.id}`}
                                    name="formId"
                                    defaultValue={aform.formId ? aform.formId : ''}
                                    onChange={() => {
                                        const button = document.getElementById(`updateAccessInputFormButton_${aform.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                >
                                    {inputForms.map((inputForm: InputForm) => (
                                        <option key={inputForm.id} value={inputForm.id}>
                                            {inputForm[`title_${i18n.language}` as keyof typeof inputForm]}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500 w-24">
                                <select
                                    className="text-sm w-full"
                                    form={`updateAccessInputForm_${aform.id}`}
                                    name="accessType"
                                    defaultValue={aform.accessType ? aform.accessType : ''}
                                    onChange={() => {
                                        const button = document.getElementById(`updateAccessInputFormButton_${aform.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                >
                                    {Object.keys(AccessType).map((key) => <option key={key} value={key}>{key}</option>)}
                                </select>
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">
                                <ButtonDeleteAccessInputForm aform={aform} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}