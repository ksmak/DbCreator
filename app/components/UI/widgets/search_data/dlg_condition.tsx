import MaterialTailwind from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";
import CustomButton from "../../elements/custom_button";
import CustomInput from "../../elements/custom_input";
import { ICondition } from "~/types/types";
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind

type ConditionDialogProps = {
    condIndex: number | null,
    cond: ICondition,
    setCond: Dispatch<SetStateAction<ICondition>>,
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    conditions: ICondition[]
    setConditions: Dispatch<SetStateAction<ICondition[]>>
}

export default function ConditionDialog({
    condIndex,
    cond,
    setCond,
    show,
    setShow,
    conditions,
    setConditions
}: ConditionDialogProps) {
    const handlerOK = () => {
        if (condIndex !== null) {
            let conds = [...conditions]
            conds.splice(condIndex, 1, cond)
            setConditions(conds)
        } else {
            if (conditions.length > 0) {
                setConditions([...conditions, { log: 'AND' }, cond])
            } else {
                setConditions([...conditions, cond])
            }
        }
        setShow(false)
    }

    return (
        <Dialog
            placeholder=""
            size="md"
            open={show}
            handler={() => setShow(false)}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full" placeholder="">
                <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                    <div className="flex justify-between items-center gap-1 w-full">
                        <CustomButton
                            className={`${cond.oper === 'between' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: 'between' })}
                            disabled={['TEXT', 'CYRILLIC', 'DICT'].includes(String(cond.field?.field.fieldType))}
                        >
                            С..ПО
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '=' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '=' })}
                        >
                            =
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '>' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '>' })}
                            disabled={['TEXT', 'CYRILLIC', 'DICT'].includes(String(cond.field?.field.fieldType))}
                        >
                            &gt;
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '>=' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '>=' })}
                            disabled={['TEXT', 'CYRILLIC', 'DICT'].includes(String(cond.field?.field.fieldType))}
                        >
                            &gt;=
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '<' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '<' })}
                            disabled={['TEXT', 'CYRILLIC', 'DICT'].includes(String(cond.field?.field.fieldType))}
                        >
                            &lt;
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '<=' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '<=' })}
                            disabled={['TEXT', 'CYRILLIC', 'DICT'].includes(String(cond.field?.field.fieldType))}
                        >
                            &lt;=
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '<>' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '<>' })}
                        >
                            &lt;&gt;
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '=()' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '=()' })}
                        >
                            =()
                        </CustomButton>
                        <CustomButton
                            className={`${cond.oper === '<>()' ? 'bg-green-600  hover:shadow-green-100' : 'bg-blue-gray-600  hover:shadow-blue-gray-100'} flex justify-center flex-1`}
                            onClick={() => setCond({ ...cond, oper: '<>()' })}
                        >
                            &lt;&gt;()
                        </CustomButton>
                    </div>
                    <div className="text-sm font-bold text-blue-gray-600">{cond.field?.title}</div>
                    <div>
                        {cond.oper === 'between'
                            ? <div>
                                <CustomInput
                                    id="val1"
                                    type="text"
                                    name="val1"
                                    title="Val1: "
                                    value={cond.val1}
                                    onChange={(e) => setCond({ ...cond, val1: e.target.value })}
                                />
                                <CustomInput
                                    id="val2"
                                    type="text"
                                    name="val2"
                                    title="Val2: "
                                    value={cond.val2}
                                    onChange={(e) => setCond({ ...cond, val2: e.target.value })}
                                />
                            </div>
                            : <div>
                                <CustomInput
                                    id="val1"
                                    type="text"
                                    name="val1"
                                    title="Val1: "
                                    value={cond.val1}
                                    onChange={(e) => setCond({ ...cond, val1: e.target.value })}
                                />
                            </div>}
                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3" placeholder="">
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-green-100"
                        onClick={() => handlerOK()}
                    >
                        OK
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-green-100"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </CustomButton>
                </CardFooter>
            </Card>
        </Dialog>
    )
}