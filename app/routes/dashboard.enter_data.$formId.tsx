import { Prisma } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect, unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation, useOutletContext } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import api from '~/components/api';
import EnterDataView from "~/components/UI/widgets/enter_data/view";
import { ContexType } from "~/types/types";

export async function loader({
    request,
    params,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    const docId = url.searchParams.get("docId")
    let inputForm = await api.db.getInputForm(Number(params.formId))
    let doc = await api.doc.getDoc(docId ? Number(docId) : null, inputForm)
    return json({ inputForm, doc, state })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let ok: boolean = false
    let errors: string = ''
    let docs: { formId?: number, ids?: number[] } | null = null
    let deletedDocId: number | null = null
    // const handler = unstable_createFileUploadHandler({
    //     directory: `${process.cwd()}/public/uploads`,
    //     file: ({ filename }) => filename,
    //     maxPartSize: 50_000_000
    // });
    // const uploadHandler = unstable_composeUploadHandlers(
    //     async ({ name, data }) => {
    //         return "url";
    //     },
    //     unstable_createMemoryUploadHandler()
    // );
    const uploadHandler = unstable_composeUploadHandlers(
        unstable_createFileUploadHandler({
            directory: `${process.cwd()}/public/uploads`,
            file: ({ filename }) => filename,
            maxPartSize: 50_000_000
        }),
        // parse everything else into memory
        unstable_createMemoryUploadHandler()
    );
    const formData = await unstable_parseMultipartFormData(request, uploadHandler);
    console.log(formData)
    // const file = formData.get("file") as File;
    // const formData = await request.formData()
    const {
        _action,
        _user,
        _inputFormId,
        _id,
        ...values
    } = Object.fromEntries(formData)
    console.log(values)
    switch (_action) {
        case 'saveDocument': {
            try {
                // let inputForm = await api.db.getInputForm(Number(_inputFormId))
                // let jsonData = JSON.parse(String(values.json))
                // if (_id) {
                //     await api.doc.updateDoc(Number(_user), inputForm, jsonData)
                //     return redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)
                // } else {
                //     await api.doc.createDoc(Number(_user), inputForm, jsonData)
                //     return redirect(`/dashboard/enter_data/${_inputFormId}`)
                // }
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    errors = e.message
                } else {
                    throw e
                }
            }
            break
        }
        case 'findDocument': {
            try {
                let inputForm = await api.db.getInputForm(Number(_inputFormId))
                let jsonData = JSON.parse(String(values.json))
                const results: { id: number }[] | [] = await api.doc.findDoc(inputForm, jsonData)
                if (results.length > 100) {
                    errors = "Find records more 100"
                } else {
                    docs = {
                        formId: inputForm.id,
                        ids: results.map((item: any) => item.id)
                    }
                    ok = true
                }
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    errors = e.message
                } else {
                    throw e
                }
            }
            break
        }
        case 'deleteDocument': {
            try {
                if (_id) {
                    await api.doc.deleteDoc(Number(_id))
                    deletedDocId = (Number(_id))
                    ok = true
                }
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    errors = e.message
                } else {
                    throw e
                }
            }
            break
        }
    }
    return json({ errors, docs, deletedDocId, ok })
}

export default function EnterData() {
    const { dictionaries, docs, setDocs, current, setCurrent } = useOutletContext<ContexType>()
    const { inputForm, doc, state } = useLoaderData<typeof loader>()
    const [document, setDocument] = useState<typeof doc>(doc)
    const navigation = useNavigation()
    const formRef = useRef<HTMLFormElement>(null)
    const userId = 1;
    const data = useActionData<typeof action>()
    const [showFind, setShowFind] = useState(false)

    useEffect(() => {
        setDocument(doc)
    }, [doc])


    useEffect(() => {
        if (data?.docs && data?.ok) {
            setDocs(data.docs)
            setShowFind(true)
        }
        if (navigation.state === "idle" && data?.ok) {
            formRef.current?.reset()
        }
        if (data?.deletedDocId && data?.ok) {
            setDocs(prev => ({ formId: prev.formId, ids: prev.ids?.filter(item => item !== data.deletedDocId) }))
        }
    }, [data])

    return (
        <EnterDataView
            errors={data?.errors}
            open={showFind}
            setOpen={setShowFind}
            docs={docs}
            userId={userId}
            current={current}
            setCurrent={setCurrent}
            formRef={formRef}
            inputForm={inputForm}
            state={state}
            dictionaries={dictionaries}
            doc={document}
            setDoc={setDocument}
        />
    )
}