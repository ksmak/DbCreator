import Buttons from "./buttons/buttons";
import ErrorMessage from "../../elements/error_message";
import Panel from "../../elements/panel";
import DbStructNav from "./navigator";
import Forms from "./forms/forms";

type DbStructViewProps = {
    errors?: string,
    state: string | null,
    inputForms: any,
    searchForms: any,
    dictionaries: any,
    groups: any,
    inputFormId: number | undefined,
    searchFormId: number | undefined,
    dictionaryId: number | undefined,
    groupId: number | undefined,
    inputForm: any,
    searchForm: any,
    dictionary: any,
    group: any,
    inputFields: any,
}

export default function DbStructView({
    errors,
    state,
    inputForms,
    searchForms,
    dictionaries,
    groups,
    inputFormId,
    searchFormId,
    dictionaryId,
    groupId,
    inputForm,
    searchForm,
    dictionary,
    group,
    inputFields,
}: DbStructViewProps) {
    return (
        <div className="mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]">
            <ErrorMessage errors={errors} />
            <Panel className="h-full overflow-auto">
                <Buttons
                    state={state}
                    dictionaries_count={dictionaries && dictionaries.length ? dictionaries.length : 0}
                    inputForms_count={inputForms && inputForms.length ? inputForms.length : 0}
                    searchForms_count={searchForms && searchForms.length ? searchForms.length : 0}
                />
                <div className="flex flex-row">
                    <DbStructNav
                        state={state}
                        inputForms={inputForms}
                        searchForms={searchForms}
                        dictionaries={dictionaries}
                        groups={groups}
                        inputFormId={inputFormId}
                        searchFormId={searchFormId}
                        dictionaryId={dictionaryId}
                        groupId={groupId}
                    />
                    <Forms
                        state={state}
                        dictionaries={dictionaries}
                        groups={groups}
                        inputForm={inputForm}
                        searchForm={searchForm}
                        dictionary={dictionary}
                        group={group}
                        inputFields={inputFields}
                    />
                </div>
            </Panel>
        </div>
    )
}