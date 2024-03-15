import { Dictionary } from "@prisma/client"
import { useNavigate } from "@remix-run/react"
import { useTranslation } from "react-i18next"

type DictionariesTableProps = {
    dictionaries: Dictionary[],
    dictionary: Dictionary,
}

export default function DictionariesTable({
    dictionaries,
    dictionary
}: DictionariesTableProps) {
    const { i18n, t } = useTranslation()
    const navigate = useNavigate()

    return (
        <table
            className="w-full"
        >
            <thead
                className="bg-primary text-white text-center"
            >
                <tr>
                    <th className="p-1 text-sm border border-blue-gray-500">#</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('title')}</th>
                </tr>
            </thead>
            <tbody>
                {dictionaries && dictionaries.map((dic: Dictionary, index: number) => (
                    <tr
                        key={dic.id}
                        className={dic?.id === dictionary.id ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer"}
                        onClick={() => navigate(`/dashboard/dictionaries?current_dic=${dic.id}`)}
                    >
                        <td className="p-1 text-sm border border-blue-gray-500 w-10">{index + 1}</td>
                        <td className="p-1 text-sm border border-blue-gray-500">
                            {dic[`title_${i18n.language}` as keyof typeof dic]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}