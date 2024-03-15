import ButtonCancel from "./btn_cancel";
import ButtonCreate from "./btn_create";
import ButtonDelete from "./btn_delete";
import ButtonEdit from "./btn_edit";
import ButtonFind from "./btn_find";
import ButtonSave from "./btn_save";
import ButtonSearch from "./btn_search";

type ButtonsProps = {
    userId: number,
    inputFormId: number,
    state: string | null,
    doc: any
}

export default function Buttons({ userId, inputFormId, state, doc }: ButtonsProps) {
    return (
        <div
            className="flex items-center gap-3"
        >
            {!['create', 'edit', 'search'].includes(String(state))
                ? <ButtonCreate inputFormId={inputFormId} />
                : null}
            {!['create', 'edit', 'search'].includes(String(state))
                ? <ButtonSearch inputFormId={inputFormId} />
                : null}
            {state === "search"
                ? <ButtonFind userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
            {doc.id && !['create', 'edit'].includes(String(state))
                ? <ButtonEdit inputFormId={inputFormId} docId={doc.id} />
                : null}
            {state === 'edit' || state === 'create'
                ? <ButtonSave userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
            {state === 'edit' || state === 'search' || state === 'create'
                ? <ButtonCancel inputFormId={inputFormId} docId={doc.id} />
                : null}
            {doc.id && !['create', 'edit'].includes(String(state))
                ? <ButtonDelete userId={userId} inputFormId={inputFormId} doc={doc} />
                : null}
        </div>
    )
}