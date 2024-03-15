import CustomButton from "../../elements/custom_button"

type ConditionButtonsProps = {
    handleAddCondition: () => void,
    handleDeleteCondition: () => void,
    handleEraseConditions: () => void,
    handleBktBoth: () => void,
    handleBktLeft: () => void,
    handleBktRight: () => void,
    handleReplaceOrAnd: (log: string) => void
}

export default function ConditionButtons({
    handleAddCondition,
    handleDeleteCondition,
    handleEraseConditions,
    handleBktBoth,
    handleBktLeft,
    handleBktRight,
    handleReplaceOrAnd
}: ConditionButtonsProps) {
    return (
        <div className="self-center flex flex-col justify-center gap-1">
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleAddCondition()}
            >
                Add
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleDeleteCondition()}
            >
                Delete
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleEraseConditions()}
            >
                Erase
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleBktBoth()}
            >
                ()
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleBktLeft()}
            >
                (
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleBktRight()}
            >
                )
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleReplaceOrAnd('OR')}
            >
                OR
            </CustomButton>
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                onClick={() => handleReplaceOrAnd('AND')}
            >
                AND
            </CustomButton>
        </div>
    )
}