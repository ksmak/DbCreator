import { Dispatch, SetStateAction } from "react"
import { ICondition } from "~/types/types"

type ListConditionsProps = {
    conditions: ICondition[],
    condIndex: number | null,
    setCondIndex: Dispatch<SetStateAction<number | null>>,
    handleOpenCondition: (cond: ICondition, condIndex: number | null) => void
}

export default function ListConditions({
    conditions,
    condIndex,
    setCondIndex,
    handleOpenCondition
}: ListConditionsProps) {
    return (
        <div className="w-2/3">
            {conditions.map((c: ICondition, index: number) => (
                <div
                    key={index}
                    className={`${condIndex === index ? 'bg-blue-gray-100' : ''} hover:cursor-pointer`}
                    onClick={() => setCondIndex(index)}
                >
                    {c.log
                        ? <div

                        >---- {c.log} ----</div>
                        : <div
                            onDoubleClick={() => handleOpenCondition(c, index)}
                        >
                            {c.field?.title} {c.oper} {c.val1} {c.val2}
                        </div>}
                </div>
            ))}
        </div>
    )
}