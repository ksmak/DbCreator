import { Dictionary } from "@prisma/client"
import ErrorMessage from "../../elements/error_message"
import Panel from "../../elements/panel"
import Buttons from "./buttons/buttons"
import DictionariesTable from "./tbl_dictionaries"
import DicValuesTable from "./tbl_dic_values"
import { IDictVal } from "~/types/types"

type DictionariesViewProps = {
    errors?: string,
    dictionaries: any,
    dictionary: Dictionary,
    dictValues: IDictVal[],
}

export default function DictionariesView({
    errors,
    dictionaries,
    dictionary,
    dictValues,
}: DictionariesViewProps) {
    return (
        <div className="mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]">
            <ErrorMessage errors={errors} />
            <Panel className="h-full overflow-auto">
                <Buttons dictionary={dictionary} />
                <div className="flex flex-row gap-10">
                    <div className="w-1/3">
                        <DictionariesTable
                            dictionaries={dictionaries}
                            dictionary={dictionary}
                        />
                    </div>
                    <div className="w-2/3">
                        <DicValuesTable
                            dictionary={dictionary}
                            dictValues={dictValues}
                        />
                    </div>
                </div>
            </Panel>
        </div>
    )
}