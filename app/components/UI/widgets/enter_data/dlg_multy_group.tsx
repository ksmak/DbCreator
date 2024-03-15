import MaterialTailwind from "@material-tailwind/react";
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind;
import { Group, InputField } from "@prisma/client";
import { Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";
import { IDict } from "~/types/types";
import Field from "./edit_form/field";
import CustomButton from "../../elements/custom_button";
import { useTranslation } from "react-i18next";


type DialogMultyGroupProps = {
    state: string | null,
    group: Group & { fields: InputField[] } | null,
    setGroup: Dispatch<SetStateAction<Group & { fields: InputField[] } | null>>,
    dictionaries: IDict[],
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
    recordIndex: number
}

export default function DialogMultyGroup({
    state,
    group,
    setGroup,
    dictionaries,
    doc,
    setDoc,
    recordIndex
}: DialogMultyGroupProps) {
    const { i18n, t } = useTranslation()
    const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setGroup(null)
    }
    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (group) {
            let formData = new FormData(e.currentTarget)
            let values = Object.fromEntries(formData)
            let d = { ...doc }
            if (recordIndex >= 0) {
                d[`tbl_${group.id}`][recordIndex] = { ...values }
            } else {
                d[`tbl_${group.id}`].push({ ...values })
            }
            setDoc(d)
            setGroup(null)
            console.log(doc)
        }
    }

    return (
        <Dialog
            placeholder=""
            size="lg"
            open={group ? true : false}
            handler={() => setGroup(null)}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full" placeholder="">
                <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                    <form
                        id="groupForm"
                        method="post"
                        onSubmit={handleSave}
                    >
                        {group?.fields ? group.fields.map((fld: InputField) => {
                            let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`
                            let fieldName = `f${fld.id}`
                            let fieldTitle = fld[`title_${i18n.language}` as keyof typeof fld] as string
                            let fieldLen = fld.len ? fld.len : 30
                            let fieldRequired = fld.isRequire && state === 'edit'
                            let fieldDisabled = !fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))
                            let tableName = `tbl_${fld.groupId}`
                            let val = ''
                            if (recordIndex >= 0 && doc[tableName].length) {
                                val = doc[tableName][recordIndex][fieldName]
                            }
                            if (fld.fieldType === 'FILE') {
                                val = ''
                            }

                            return (
                                <Field
                                    key={fld.id}
                                    cls={cls}
                                    state={state}
                                    dictionaries={dictionaries}
                                    fieldName={fieldName}
                                    fieldType={fld.fieldType}
                                    fieldTitle={fieldTitle}
                                    fieldLen={fieldLen}
                                    fieldRequired={fieldRequired}
                                    fieldDisabled={fieldDisabled}
                                    fieldDict={fld.dicId}
                                    val={val}
                                />
                            )
                        }) : <>-</>}
                    </form>
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3 justify-center" placeholder="">
                    <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        form="groupForm"
                        type="submit"
                    >
                        {t('save')}
                    </CustomButton>
                    <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        onClick={handleClose}
                    >
                        {t('close')}
                    </CustomButton>
                </CardFooter>
            </Card>
        </Dialog>
    )
}