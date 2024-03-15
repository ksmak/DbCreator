import DictionaryForm from "./form_dict"
import GroupForm from "./form_group"
import InputFormForm from "./form_input"
import SearchFormForm from "./form_search"

type FormsProps = {
    state: string | null,
    dictionaries: any,
    groups: any,
    inputForm: any,
    searchForm: any,
    dictionary: any,
    group: any,
    inputFields: any
}

export default function Forms({
    state,
    dictionaries,
    groups,
    inputForm,
    searchForm,
    dictionary,
    group,
    inputFields
}: FormsProps) {
    return (
        <div className="p-4 border w-3/4">
            {state === 'inputForm' && inputForm
                ? <InputFormForm inputForm={inputForm} groups={groups} />
                : state === 'searchForm' && searchForm
                    ? <SearchFormForm searchForm={searchForm} inputFields={inputFields} />
                    : state === 'dictionary' && dictionary
                        ? <DictionaryForm dictionary={dictionary} />
                        : state === 'group' && group
                            ? <GroupForm group={group} dicts={dictionaries} />
                            : null}
        </div>
    )
}