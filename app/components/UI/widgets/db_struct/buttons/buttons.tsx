import ButtonAddDicionary from "./btn_add_dictionary";
import ButtonAddInputForm from "./btn_add_inputform";
import ButtonAddSearchForm from "./btn_add_searchform";
import ButtonRestructDb from "./btn_restruct_db";

type ButtonsProps = {
    state: string | null,
    dictionaries_count: number,
    inputForms_count: number,
    searchForms_count: number
}

export default function Buttons({
    state,
    dictionaries_count,
    inputForms_count,
    searchForms_count
}: ButtonsProps) {
    return (
        <div className="mb-2 flex justify-between py-2 px-2 border">
            <div className="flex items-center gap-3">
                {state === 'dictionary'
                    ? <ButtonAddDicionary count={dictionaries_count} />
                    : state === 'inputForm'
                        ? <ButtonAddInputForm count={inputForms_count} />
                        : state === 'searchForm'
                            ? <ButtonAddSearchForm count={searchForms_count} />
                            : null}
            </div>
            <ButtonRestructDb />
        </div>
    )
}