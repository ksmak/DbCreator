import { ICondition } from "~/types/types";
import ButtonSearch from "./btn_search";

type ButtonsProps = {
    userId: number,
    inputFormId: number,
    conditions: ICondition[]
}

export default function Buttons({ userId, inputFormId, conditions }: ButtonsProps) {
    return (
        <div
            className="flex items-center gap-3"
        >
            <ButtonSearch
                userId={userId}
                inputFormId={inputFormId}
                conditions={conditions}
            />
        </div>
    )
}