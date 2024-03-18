import { IDict } from "~/types/types"
import CustomInput from "~/components/UI/elements/custom_input"
import CustomSelect from "~/components/UI/elements/custom_select"
import { useTranslation } from "react-i18next"
import moment from "moment"

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
    defaultVal: string,
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
}: FieldProps) {
    const { i18n } = useTranslation()

    switch (fieldType) {
        case "TEXT":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="text"
                    name={fieldName}
                    defaultValue={defaultVal}
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
                    defaultValue={defaultVal}
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
                    defaultValue={defaultVal}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "NUMERIC":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="number"
                    step="0.01"
                    name={fieldName}
                    defaultValue={defaultVal}
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
                    defaultValue={defaultVal}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                >
                    <option>-</option>
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
                    defaultValue={moment(defaultVal, 'DD.MM.YYYY').format("YYYY-MM-DD")}
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
                    defaultValue={defaultVal}
                    required={fieldRequired}
                    disabled={fieldDisabled}
                    size={fieldLen}
                    maxLength={fieldLen}
                />
            )
        case "FILE":
            return (
                <CustomInput
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
                    type="file"
                    name={fieldName}
                    defaultValue=""
                    required={fieldRequired}
                    disabled={fieldDisabled}
                />
            )
    }
}