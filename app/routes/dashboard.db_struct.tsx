import { InputForm, SearchForm, InputField, FieldType, Prisma } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useOutletContext } from "@remix-run/react";
import invariant from "tiny-invariant";
import api from "~/components/api";
import DbStructView from "~/components/UI/widgets/db_struct/view";
import { ContexType } from "~/types/types";

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    const inputFormId = url.searchParams.get("inputFormId")
    const searchFormId = url.searchParams.get("searchFormId")
    const dictionaryId = url.searchParams.get("dictionaryId")
    const groupId = url.searchParams.get("groupId")
    const inputFieldId = url.searchParams.get("inputFieldId")
    const groups = await api.db.getGroups(Number(inputFormId))
    const inputFields = await api.db.getInputFields()
    let inputForm, searchForm, dictionary, group, inputField
    switch (state) {
        case 'dictionary': {
            invariant(dictionaryId, "Missing dictionaryId param")
            dictionary = await api.db.getDictionary(Number(dictionaryId))
            break
        }
        case 'inputForm': {
            invariant(inputFormId, "Missing inputFormId param")
            inputForm = await api.db.getInputForm(Number(inputFormId))
            break
        }
        case 'searchForm': {
            invariant(searchFormId, "Missing searchFormId param")
            searchForm = await api.db.getSearchForm(Number(searchFormId))
            break
        }
        case 'group': {
            invariant(groupId, "Missing groupId param")
            group = await api.db.getGroup(Number(groupId))
            inputField = group?.fields.find((item: InputField) => { item.id === Number(inputFieldId) })
            break
        }
    }
    return json({
        state,
        dictionary,
        inputForm,
        searchForm,
        group,
        inputField,
        groups,
        inputFields,
    })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'updateInputForm') {
        try {
            await api.db.updateInputForm(Number(values.id), {
                id: Number(values.id),
                pos: Number(values.pos),
                title_kk: String(values.title_kk),
                title_ru: String(values.title_ru),
            } as InputForm)
            return redirect(`/dashboard/db_struct?state=inputForm&inputFormId=${values.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyInputForm') {
        try {
            const form = await api.db.createEmptyInputForm(Number(values.cnt))
            return redirect(`/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteInputForm') {
        try {
            await api.db.deleteInputForm(Number(values.id))
            return redirect(`/dashboard/db_struct`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateSearchForm') {
        try {
            await api.db.updateSearchForm(Number(values.id), {
                id: Number(values.id),
                pos: Number(values.pos),
                title_kk: String(values.title_kk),
                title_ru: String(values.title_ru),
            } as SearchForm)
            return redirect(`/dashboard/db_struct?state=searchForm&searchFormId=${values.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptySearchForm') {
        try {
            const form = await api.db.createEmptySearchForm(Number(values.cnt))
            return redirect(`/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteSearchForm') {
        try {
            await api.db.deleteSearchForm(Number(values.id))
            return redirect(`/dashboard/db_struct`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateDictionary') {
        try {
            await api.db.updateDictionary(Number(values.id), {
                id: Number(values.id),
                title_kk: String(values.title_kk),
                title_ru: String(values.title_ru),
            })
            return redirect(`/dashboard/db_struct?state=dictionary&dictionaryId=${values.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyDictionary') {
        try {
            const dict = await api.db.createEmptyDictionary(Number(values.cnt))
            return redirect(`/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteDictionary') {
        try {
            await api.db.deleteDictionary(Number(values.id))
            return redirect(`/dashboard/db_struct`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyGroup') {
        try {
            const group = await api.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt))
            return redirect(`/dashboard/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateGroup') {
        try {
            const group = await api.db.updateGroup(Number(values.id),
                {
                    id: Number(values.id),
                    inputFormId: Number(values.inputFormId),
                    pos: Number(values.pos),
                    title_kk: String(values.title_kk),
                    title_ru: String(values.title_ru),
                    isMulty: Boolean(values.isMulty),
                },
            )
            return redirect(`/dashboard/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteGroup') {
        try {
            await api.db.deleteGroup(Number(values.id))
            return redirect('/dashboard/db_struct')
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateInputField') {
        try {
            await api.db.updateInputField(Number(values.id), {
                id: Number(values.id),
                groupId: Number(values.groupId),
                colSpan: Number(values.colSpan),
                colStart: Number(values.colStart),
                pos: Number(values.pos),
                title_kk: String(values.title_kk),
                title_ru: String(values.title_ru),
                len: Number(values.len),
                fieldType: String(values.fieldType) as FieldType,
                dicId: Number(values.dicId),
                isKey: Boolean(values.isKey),
                isVisible: Boolean(values.isVisible),
                isEnable: Boolean(values.isEnable),
                isRequire: Boolean(values.isRequire),
                precision: Number(values.precision),
                isDuplicate: Boolean(values.isDuplicate),
            })
            return redirect(`/dashboard/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.groupId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyInputField') {
        try {
            await api.db.createEmptyInputField(Number(values.groupId), Number(values.cnt))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteInputField') {
        try {
            await api.db.deleteInputField(Number(values.id))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptySearchField') {
        try {
            await api.db.createEmptySearchField(Number(values.searchFormId), Number(values.cnt))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateSearchField') {
        try {
            await api.db.updateSearchField(Number(values.id), {
                id: Number(values.id),
                pos: Number(values.pos),
                searchFormId: Number(values.searchFormId),
                title_kk: String(values.title_kk),
                title_ru: String(values.title_ru),
                fieldId: Number(values.fieldId),
            })
            return redirect(`/dashboard/db_struct?state=searchForm&searchFormId=${values.searchFormId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteSearchField') {
        try {
            await api.db.deleteSearchField(Number(values.id))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'generateStructDb') {
        try {
            await api.db.generateStructDb()
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    return json({ errors })
}

export default function DbStruct() {
    const { dictionaries, inputForms, searchForms } = useOutletContext<ContexType>()
    const {
        state,
        dictionary,
        inputForm,
        searchForm,
        group,
        groups,
        inputFields
    } = useLoaderData<typeof loader>()

    const data = useActionData<typeof action>()

    return (
        <DbStructView
            errors={data?.errors ? data?.errors : undefined}
            state={state}
            inputForms={inputForms}
            searchForms={searchForms}
            dictionaries={dictionaries}
            groups={groups}
            inputFormId={inputForm?.id}
            searchFormId={searchForm?.id}
            dictionaryId={dictionary?.id}
            groupId={group?.id}
            inputForm={inputForm}
            searchForm={searchForm}
            dictionary={dictionary}
            group={group}
            inputFields={inputFields}
        />
    )
}