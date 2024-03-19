import { Group, InputField } from "@prisma/client"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import CustomButton from "~/components/UI/elements/custom_button"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "@remix-run/react"
import { IDict, IDictVal } from "~/types/types"

type MultyGroupProps = {
    state: string | null,
    dictionaries: any,
    group: Group & { fields: InputField[] } | null,
    setGroup: Dispatch<SetStateAction<Group & { fields: InputField[] } | null>>,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
    setRecordIndex: Dispatch<SetStateAction<number>>,
}
export default function MultyGroup({
    state,
    dictionaries,
    group,
    setGroup,
    doc,
    setDoc,
    setRecordIndex
}: MultyGroupProps) {
    const { i18n, t } = useTranslation()
    const handleCreate = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRecordIndex(-1)
        setGroup(group)
    }
    const handleDelete = (e: MouseEvent<HTMLButtonElement>, recordIndex: number) => {
        e.preventDefault()
        const response = confirm(
            t('confirm_delete')
        )
        if (response) {
            let d = { ...doc }
            const tbl = `tbl_${group?.id}`
            d[tbl].splice([recordIndex], 1)
            setDoc(d)
        }
    }
    const handleEdit = (e: MouseEvent<HTMLButtonElement>, recordIndex: number) => {
        e.preventDefault()
        setRecordIndex(recordIndex)
        setGroup(group)
    }
    const isEdit = ["edit", "create"].includes(String(state))

    return (
        <div className="border p-1 flex flex-col gap-3">
            <div className="mt-2">
                {state === 'create' || state === 'edit'
                    ? <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        onClick={handleCreate}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        {t('add')}
                    </CustomButton>
                    : null}
            </div>
            <table
                className="border border-blue-gray-700 w-fit"
            >
                <thead
                    className="bg-primary text-white text-center"
                >
                    <tr>
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                        {group?.fields && group.fields.map((fld: InputField) => (
                            <th key={fld.id} className="p-1 text-sm border border-blue-gray-700">
                                {fld[`title_${i18n.language}` as keyof typeof fld]}
                            </th>
                        ))}
                        {isEdit
                            ? <>
                                <th className="p-1 text-sm border border-blue-gray-700"></th>
                                <th className="p-1 text-sm border border-blue-gray-700"></th>
                            </>
                            : null}
                    </tr>
                </thead>
                <tbody>
                    {doc[`tbl_${group?.id}`].map((record: any, index: number) => (
                        <tr key={index} >
                            <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                            {group?.fields && group.fields.map((fld: InputField) => {
                                let val = doc[`tbl_${group.id}`][index][`f${fld.id}`]
                                if (fld.fieldType === 'DICT') {
                                    let dic = dictionaries.find((item: IDict) => item.id === fld.dicId)
                                    if (dic) {
                                        let dicVal = dic.data_browse.find((item: IDictVal) => item.id === Number(val))
                                        if (dicVal) {
                                            val = dicVal[`title_${i18n.language}` as keyof typeof dicVal]
                                        }
                                    }
                                }
                                return (
                                    <td key={fld.id} className="p-1 text-sm border border-blue-gray-700">
                                        {fld.fieldType === "FILE"
                                            ? val instanceof File
                                                ? val.name
                                                : <a className="text-primary underline" href={val}>
                                                    {val}
                                                </a>
                                            : val}
                                    </td>
                                )
                            })}
                            {isEdit
                                ? <>
                                    <td className="p-1 text-sm border border-blue-gray-700 w-10">
                                        <CustomButton
                                            className="bg-primary hover:shadow-primary_shadow"
                                            onClick={(e) => handleEdit(e, index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>
                                        </CustomButton>
                                    </td>
                                    <td className="p-1 text-sm border border-blue-gray-700 w-10">
                                        <CustomButton
                                            className="bg-danger hover:shadow-danger_shadow"
                                            onClick={(e) => handleDelete(e, index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </CustomButton>
                                    </td>
                                </>
                                : null}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}