import { IDict } from "~/types/types"
import CustomInput from "~/components/UI/elements/custom_input"
import CustomSelect from "~/components/UI/elements/custom_select"
import { useTranslation } from "react-i18next"
import moment from "moment"
import { MouseEvent } from "react"

type FieldProps = {
    state: string | null,
    dictionaries: any,
    cls: string,
    fieldName: string,
    fieldType: string,
    fieldTitle: string,
    fieldLen: number,
    fieldRequired: boolean,
    fieldDisabled: boolean,
    fieldDict: number | null,
    defaultVal: string | File,
    handleDeleteFile?: (e: MouseEvent<HTMLButtonElement>) => void,
    fieldScale: number,
}

export default function Field({
    state,
    dictionaries,
    cls,
    fieldName,
    fieldType,
    fieldTitle,
    fieldLen,
    fieldRequired,
    fieldDisabled,
    fieldDict,
    defaultVal,
    handleDeleteFile,
    fieldScale,
}: FieldProps) {
    const { i18n, t } = useTranslation()

    switch (fieldType) {
        case "TEXT":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="text"
                    name={fieldName}
                    defaultValue={defaultVal as string}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "CYRILLIC":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="text"
                    name={fieldName}
                    defaultValue={defaultVal as string}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "INTEGER":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="number"
                    name={fieldName}
                    defaultValue={defaultVal as string}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "NUMERIC":
            let step = "0."
            for (let i = 0; i < fieldScale - 1; i++) {
                step = step + "0"
            }
            step = step + "1"
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="number"
                    step={step}
                    name={fieldName}
                    defaultValue={defaultVal as string}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "DICT":
            const dic = dictionaries.find((item: IDict) => item.id === fieldDict)
            return (
                <CustomSelect
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    name={fieldName}
                    defaultValue={defaultVal as string}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                >
                    <option value="">-</option>
                    {['create', 'edit', 'search', 'find'].includes(String(state))
                        ? dic?.data_edit.map((item: any) => (
                            <option key={item.id} value={item.id}>{item[`title_${i18n.language}` as keyof typeof item]}</option>
                        ))
                        : dic?.data_browse.map((item: any) => (
                            <option key={item.id} value={item.id}>{item[`title_${i18n.language}` as keyof typeof item]}</option>
                        ))}
                </CustomSelect>
            )
        case "DATE":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="date"
                    name={fieldName}
                    defaultValue={moment(defaultVal as string, 'DD.MM.YYYY').format("YYYY-MM-DD")}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "TIME":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="time"
                    name={fieldName}
                    defaultValue={defaultVal as string}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "FILE":
            if (typeof (defaultVal) === 'string' && defaultVal !== "") {
                return <div className={`${cls} p-1 flex gap-2 items-baseline mb-3`}>
                    <input type="hidden" name={fieldName} defaultValue={defaultVal} />
                    <div className="font-bold text-sm mr-1 min-w-40">
                        {fieldTitle}
                    </div>
                    <a className="text-primary underline" href={defaultVal} target="_blank">
                        {defaultVal}
                    </a>
                    {state == 'edit' &&
                        <button
                            className="p-1 rounded bg-danger shadow-danger_shadow text-white"
                            onClick={handleDeleteFile}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>}
                </div>
            } else if (defaultVal instanceof File && defaultVal.size > 0) {
                return <div className={`${cls} p-1 flex gap-2 items-baseline mb-3`}>
                    <input type="hidden" name={fieldName} defaultValue={defaultVal.name} />
                    <div className="font-bold text-sm mr-1 min-w-40">
                        {fieldTitle}
                    </div>
                    <div className="text-primary">
                        {defaultVal.name}
                    </div>
                    {state == 'edit' &&
                        <button
                            className="p-1 rounded bg-danger shadow-danger_shadow text-white"
                            onClick={handleDeleteFile}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>}
                </div>
            } else {
                return <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="file"
                    name={fieldName}
                    defaultValue=""
                    required={fieldRequired}
                    disabled={fieldDisabled}
                />
            }
    }
}