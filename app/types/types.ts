import { InputField, SearchField } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"

export interface IDict {
    id: number,
    title_kk: string,
    title_ru: string,
    data_browse: IDictVal[],
    data_edit: IDictVal[],
}

export interface IDictVal {
    id: number,
    title_kk: string,
    title_ru: string,
    is_enabled: boolean
}

export interface IField {
    name: string,
    _type: string,
    value: string
}

export interface ITable {
    name: string,
    fields: IField[]
}

export interface IDocument {
    id: number | null,
    tables: ITable[]
}

export interface ICondition {
    log?: string,
    field?: SearchField & { field: InputField },
    oper?: string,
    val1?: string,
    val2?: string,
}

export interface MenuItem {
    title: string,
    link: string,
    icon: any
}

export type ContexType = {
    dictionaries?: any,
    inputForms?: any,
    searchForms?: any,
    docs: { formId?: number, ids?: number[] },
    setDocs: Dispatch<SetStateAction<{ formId?: number, ids?: number[] }>>,
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>,
    conditions: ICondition[],
    setConditions: Dispatch<SetStateAction<ICondition[]>>
}