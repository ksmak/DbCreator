import { Dictionary } from "@prisma/client"
import { Form } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import { IDict, IDictVal } from "~/types/types"
import ButtonDeleteDictValue from "./buttons/btn_delete_value"

type DicValuesTableProps = {
    dictionary: Dictionary,
    dictValues: IDictVal[],
}
export default function DicValuesTable({
    dictionary,
    dictValues
}: DicValuesTableProps) {
    const { t } = useTranslation()

    return (
        <div>
            {dictValues && dictValues.map((item) => (
                <Form
                    key={item.id}
                    method="post"
                    className="hidden"
                    id={`updateDictValForm_${item.id}`}
                >
                    <input type="hidden" name="dictId" defaultValue={dictionary.id} />
                    <input type="hidden" name="id" defaultValue={item.id} />
                    <input
                        id={`updateDictValButton_${item.id}`}
                        type="submit"
                        name="_action"
                        value="updateDictVal"
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
                        <th className="p-1 text-sm border border-blue-gray-500">ID</th>
                        <th className="p-1 text-sm border border-blue-gray-500">{t('title_kk')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500">{t('title_ru')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500">{t('is_enable')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500"></th>
                    </tr>
                </thead>
                <tbody>
                    {dictValues && dictValues.map((item) => (
                        <tr key={item.id} >
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">{item.id}</td>
                            <td className="p-1 text-sm border border-blue-gray-500">
                                <input
                                    className="text-sm w-full focus:outline-none p-1 text-black"
                                    form={`updateDictValForm_${item.id}`}
                                    type="text"
                                    name="title_kk"
                                    defaultValue={item.title_kk}
                                    maxLength={45}
                                    onChange={() => {
                                        const button = document.getElementById(`updateDictValButton_${item.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                />
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500">
                                <input
                                    className="text-sm w-full focus:outline-none p-1 text-black"
                                    form={`updateDictValForm_${item.id}`}
                                    type="text"
                                    name="title_ru"
                                    defaultValue={item.title_ru}
                                    maxLength={45}
                                    onChange={() => {
                                        const button = document.getElementById(`updateDictValButton_${item.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                />
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500">
                                <input
                                    className="text-sm w-full focus:outline-none p-1 text-black"
                                    form={`updateDictValForm_${item.id}`}
                                    type="checkbox"
                                    name="is_enabled"
                                    defaultChecked={item.is_enabled}
                                    onChange={() => {
                                        const button = document.getElementById(`updateDictValButton_${item.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                />
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">
                                {item.id && <ButtonDeleteDictValue dictId={dictionary.id} id={item.id} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}