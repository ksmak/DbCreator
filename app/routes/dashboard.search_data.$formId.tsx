import { InputField, Prisma, SearchField } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { useActionData, useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import api from "~/components/api";
import { ContexType, ICondition } from "~/types/types";
import SearchDataView from "~/components/UI/widgets/search_data/view";

export async function loader({
    request,
    params,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    let searchForm: any | undefined
    searchForm = await api.db.getSearchForm(Number(params.formId))
    return json({ searchForm, state })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let ok: boolean = false
    let errors: string = ''
    let docs: { formId?: number, ids?: number[] } | null = null
    const formData = await request.formData()
    const {
        _action,
        _user,
        _inputFormId,
        ...values
    } = Object.fromEntries(formData)
    try {
        let jsonData = JSON.parse(String(values.json))
        const results: { id: number }[] | [] = await api.doc.searchDoc(jsonData)
        docs = {
            formId: Number(_inputFormId),
            ids: results.map((item: any) => item.id)
        }
        ok = true
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            errors = e.message
        } else {
            throw e
        }
    }
    return json({ errors })
}

export default function SearchData() {
    const { conditions, setConditions } = useOutletContext<ContexType>()
    const { searchForm, state } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()
    const [showCondition, setShowCondition] = useState(false)
    const [cond, setCond] = useState<ICondition>({})
    const [condIndex, setCondIndex] = useState<number | null>(null)
    const [fld, setFld] = useState<SearchField & { field: InputField } | null>(null)
    const userId = 19;

    return (
        <SearchDataView
            errors={data?.errors}
            condIndex={condIndex}
            setCondIndex={setCondIndex}
            cond={cond}
            setCond={setCond}
            show={showCondition}
            setShow={setShowCondition}
            conditions={conditions}
            setConditions={setConditions}
            userId={userId}
            inputFormId={searchForm ? searchForm.inputFormId : null}
            searchForm={searchForm}
            fld={fld}
            setFld={setFld}
        />
    )
}