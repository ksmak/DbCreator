import { Dictionary } from "@prisma/client";
import ButtonAddDictValue from "./btn_add_value";
import ButtonDeleteDictValue from "./btn_delete_value";

type ButtonsProps = {
    dictionary: Dictionary
}

export default function Buttons({ dictionary }: ButtonsProps) {
    return (
        <div className="mb-2 flex justify-end items-center py-2 px-2 border">
            <ButtonAddDictValue dictionary={dictionary} />
        </div>
    )
}