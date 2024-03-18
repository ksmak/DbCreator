import { InputField } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"
import Field from "./field"
import { useTranslation } from "react-i18next"

type SingleGroupProps = {
    state: string | null,
    dictionaries: any,
    group: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
}
export default function SingleGroup({ state, dictionaries, group, doc, setDoc }: SingleGroupProps) {
    const { i18n } = useTranslation()

    return (
        <div className="border p-1 grid grid-cols-3 gap-1">
            {group?.fields && group.fields.map((fld: InputField) => {
                let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`
                let fieldName = `f${fld.id}`
                let fieldTitle = fld[`title_${i18n.language}` as keyof typeof fld] as string
                let fieldLen = fld.len ? fld.len : 30
                let fieldRequired = fld.isRequire && state === 'edit'
                let fieldDisabled = !fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))
                let tableName = `tbl_${fld.groupId}`
                let val = ''
                if (doc[tableName].length) {
                    val = doc[tableName][0][fieldName]
                }

                return (
                    <Field
                        key={fld.id}
                        cls={cls}
                        state={state}
                        dictionaries={dictionaries}
                        fieldName={`${tableName}__${fieldName}__0`}
                        fieldType={fld.fieldType}
                        fieldTitle={fieldTitle}
                        fieldLen={fieldLen}
                        fieldRequired={fieldRequired}
                        fieldDisabled={fieldDisabled}
                        fieldDict={fld.dicId}
                        defaultVal={val}
                    />
                )
            })}
        </div>
    )
}