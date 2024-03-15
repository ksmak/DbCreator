import { ICondition } from "~/types/types";
import ErrorMessage from "../../elements/error_message";
import ConditionDialog from "./dlg_condition";
import { Dispatch, SetStateAction } from "react";
import Buttons from "./buttons/buttons";
import Panel from "../../elements/panel";
import ListFields from "./list_fields";
import { InputField, SearchField } from "@prisma/client";
import { useSubmit } from "@remix-run/react";
import ConditionButtons from "./cond_buttons";
import ListConditions from "./list_conditions";

type SearchDataViewProps = {
    errors?: string,
    condIndex: number | null,
    setCondIndex: Dispatch<SetStateAction<number | null>>,
    cond: ICondition,
    setCond: Dispatch<SetStateAction<ICondition>>,
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    conditions: ICondition[]
    setConditions: Dispatch<SetStateAction<ICondition[]>>,
    userId: number,
    inputFormId: number,
    searchForm: any,
    fld: SearchField & { field: InputField } | null
    setFld: Dispatch<SetStateAction<SearchField & { field: InputField } | null>>
}

export default function SearchDataView({
    errors,
    condIndex,
    setCondIndex,
    cond,
    setCond,
    show,
    setShow,
    conditions,
    setConditions,
    userId,
    inputFormId,
    searchForm,
    fld,
    setFld,
}: SearchDataViewProps) {
    const submit = useSubmit()

    const handleOpenCondition = (cond: ICondition, condIndex: number | null = null) => {
        setCondIndex(condIndex)
        setCond(cond)
        setShow(true)
    }

    const handleAddCondition = () => {
        if (fld) {
            handleOpenCondition({
                oper: ['TEXT', 'CYRILLIC', 'DICT'].includes(fld.field.fieldType) ? '=' : 'between',
                field: fld
            })
        }
    }

    const handleDeleteCondition = () => {
        if (condIndex !== null) {
            let conds = [...conditions]
            if (conds[condIndex].log) {
                conds.splice(condIndex, 1)
            } else {
                conds.splice(condIndex - 1, 2)
            }
            setConditions(conds)
        }
    }

    const handleEraseConditions = () => {
        setConditions([])
    }

    const handleBktBoth = () => {
        if (conditions.length > 0) {
            setConditions([
                { log: '(' }, ...conditions, { log: ')' }])
        }
    }

    const handleBktLeft = () => {
        if (condIndex !== null && !conditions[condIndex].log) {
            let conds = [...conditions]
            conds.splice(condIndex, 0, { log: '(' })
            setConditions(conds)
        }
    }

    const handleBktRight = () => {
        if (condIndex !== null && !conditions[condIndex].log) {
            let conds = [...conditions]
            conds.splice(condIndex + 1, 0, { log: ')' })
            setConditions(conds)
        }
    }

    const handleReplaceOrAnd = (log: string) => {
        if (condIndex !== null && ['OR', 'AND'].includes(String(conditions[condIndex].log))) {
            let conds = [...conditions]
            conds.splice(condIndex, 1, { log: log })
            setConditions(conds)
        }
    }

    return (
        <div className="h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5">
            <ErrorMessage errors={errors} />
            <ConditionDialog
                condIndex={condIndex}
                cond={cond}
                setCond={setCond}
                show={show}
                setShow={setShow}
                conditions={conditions}
                setConditions={setConditions}
            />
            <Panel className="h-full overflow-auto">
                <Buttons
                    userId={userId}
                    inputFormId={inputFormId}
                    conditions={conditions}
                />
                <div className="flex flex-row">
                    <ListFields
                        searchForm={searchForm}
                        fld={fld}
                        setFld={setFld}
                        handleOpenCondition={handleOpenCondition}
                    />
                    <ConditionButtons
                        handleAddCondition={handleAddCondition}
                        handleDeleteCondition={handleDeleteCondition}
                        handleEraseConditions={handleEraseConditions}
                        handleBktBoth={handleBktBoth}
                        handleBktLeft={handleBktLeft}
                        handleBktRight={handleBktRight}
                        handleReplaceOrAnd={handleReplaceOrAnd}
                    />
                    <ListConditions
                        conditions={conditions}
                        condIndex={condIndex}
                        setCondIndex={setCondIndex}
                        handleOpenCondition={handleOpenCondition}
                    />
                </div>
            </Panel>
        </div>
    )
}