import { Form, useLocation, useSubmit } from "@remix-run/react";
import SingleGroup from "./single_group";
import MultyGroup from "./multy_group";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Group, InputField } from "@prisma/client";
import { useTranslation } from "react-i18next";


type EditFormProps = {
    formRef: any,
    userId: number,
    inputForm: any,
    state: string | null,
    dictionaries: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
    setGroup: Dispatch<SetStateAction<Group & { fields: InputField[] } | null>>,
    setRecordIndex: Dispatch<SetStateAction<number>>,
}

export default function EditForm({
    formRef,
    userId,
    inputForm,
    state,
    dictionaries,
    setGroup,
    doc,
    setDoc,
    setRecordIndex
}: EditFormProps) {
    const { i18n } = useTranslation()
    const location = useLocation()
    const submit = useSubmit()
    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        formData.append("_action", "saveDocument")
        inputForm?.groups.forEach(
            (group: Group & { fields: InputField[] }) => {
                if (group.isMulty) {
                    let tableName = `tbl_${group.id}`
                    for (let i = 0; i < doc[tableName].length; i++) {
                        group.fields.forEach((fld: InputField) => {
                            let fieldName = `f${fld.id}`
                            let r = `${tableName}__${fieldName}__${i}`
                            formData.append(r, doc[tableName][i][fieldName])
                        })
                    }
                    formData.append(`${tableName}__count`, doc[tableName].length)
                }
            })
        submit(formData, {
            method: 'post',
            encType: 'multipart/form-data'
        })
    }

    return (
        <form
            key={location.key}
            id="documentForm"
            method="post"
            ref={formRef}
            onSubmit={handleSave}
        >
            <input type="hidden" name="_user" value={userId} />
            <input type="hidden" name="_inputFormId" value={inputForm.id} />
            <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
            {inputForm?.groups && inputForm.groups.map((group: Group & { fields: InputField[] }) => {
                let groupTitle = group[`title_${i18n.language}` as keyof typeof group] as string
                return (
                    <div key={group.id} className="mb-2">
                        <h2 className="col-span-3 bg-primary text-white font-bold text-sm p-1 pl-4">
                            {groupTitle}
                        </h2>
                        {!group.isMulty
                            ? <SingleGroup
                                state={state}
                                dictionaries={dictionaries}
                                group={group}
                                doc={doc}
                                setDoc={setDoc}
                            />
                            : <MultyGroup
                                state={state}
                                dictionaries={dictionaries}
                                group={group}
                                setGroup={setGroup}
                                doc={doc}
                                setDoc={setDoc}
                                setRecordIndex={setRecordIndex}
                            />}
                    </div>
                )
            })}
        </form>
    )
}