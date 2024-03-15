import { InputField, SearchField } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"
import { ICondition } from "~/types/types"

type ListFieldsProps = {
    searchForm: any,
    fld: SearchField & { field: InputField } | null
    setFld: Dispatch<SetStateAction<SearchField & { field: InputField } | null>>,
    handleOpenCondition: (cond: ICondition, condIndex: number | null) => void
}

export default function ListFields({ searchForm, fld, setFld, handleOpenCondition }: ListFieldsProps) {
    return (
        <div className="w-1/3">
            {searchForm && searchForm.fields.map((field: SearchField & { field: InputField }) => (
                <div
                    key={field.id}
                    className={`${fld?.id === field.id ? 'bg-blue-gray-100' : ''} hover:cursor-pointer hover:bg-blue-gray-100 select-none`}
                    onClick={() => setFld(field)}
                    onDoubleClick={() => handleOpenCondition({
                        oper: ['TEXT', 'CYRILLIC', 'DICT'].includes(field.field.fieldType) ? '=' : 'between',
                        field: field
                    }, null)}
                >
                    {field.title}
                </div>
            ))}
        </div>
    )
}