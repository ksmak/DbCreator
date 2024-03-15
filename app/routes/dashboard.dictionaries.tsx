import { Dictionary, Prisma } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useOutletContext } from "@remix-run/react";
import DictionariesView from "~/components/UI/widgets/dictionaries/view";
import api from "~/components/api";
import { ContexType } from "~/types/types";

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const currentDicId = url.searchParams.get("current_dic")
    let dictionary = {}
    let dictValues = []
    if (currentDicId) {
        dictionary = await api.db.getDictionary(Number(currentDicId))
        dictValues = await api.db.getDictValues(Number(currentDicId))
    }

    return json({ dictionary, dictValues })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    switch (_action) {
        case 'addDictVal': {
            try {
                const dictId = Number(values.dictId)
                const createDictVal = {
                    title_kk: 'Dict Value',
                    title_ru: 'Dict Value',
                    is_enabled: true
                }
                await api.db.updateDictValue(dictId, createDictVal)
                return redirect(`/dashboard/dictionaries?current_dic=${dictId}`)
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    errors = e.message
                }
            }
            break
        }
        case 'updateDictVal': {
            try {
                const dictId = Number(values.dictId)
                const updateDictVal = {
                    id: Number(values.id),
                    title_kk: String(values.title_kk),
                    title_ru: String(values.title_ru),
                    is_enabled: Boolean(values.is_enabled)
                }
                await api.db.updateDictValue(dictId, updateDictVal)
                return redirect(`/dashboard/dictionaries?current_dic=${dictId}`)
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    errors = e.message
                }
            }
            break
        }
        case 'deleteDictVal': {
            try {
                const dictId = Number(values.dictId)
                await api.db.deleteDictValue(dictId, Number(values.id))
                return redirect(`/dashboard/dictionaries?current_dic=${dictId}`)
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    errors = e.message
                }
            }
            break
        }
    }
    return json({ errors })
}

export default function Dictionaries() {
    const { dictionaries } = useOutletContext<ContexType>()
    const { dictionary, dictValues } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()

    return (
        <DictionariesView
            errors={data?.errors ? data?.errors : undefined}
            dictionaries={dictionaries}
            dictionary={dictionary as Dictionary}
            dictValues={dictValues}
        />
    )
}