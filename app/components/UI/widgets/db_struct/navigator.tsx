import { Dictionary, Group, InputForm, SearchForm } from "@prisma/client";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

type DbStructNavProps = {
    state: string | null,
    inputForms: any,
    searchForms: any,
    dictionaries: any,
    groups: any,
    inputFormId: number | undefined,
    searchFormId: number | undefined,
    dictionaryId: number | undefined,
    groupId: number | undefined,
}
export default function DbStructNav({
    state,
    inputForms,
    searchForms,
    dictionaries,
    inputFormId,
    searchFormId,
    dictionaryId,
    groupId,
}: DbStructNavProps) {
    const { i18n, t } = useTranslation()

    return (
        <div className="p-4 mr-5 w-1/4 border">
            <ul>
                <li
                    className={["flex items-center gap-1 font-bold",
                        state === 'inputForm' && !inputFormId ? "bg-selected" : ""].join(' ')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <Link
                        to={`/dashboard/db_struct?state=inputForm&inputFormId=0`}
                    >
                        {t('inputforms')}
                    </Link>
                </li>
                <ul>
                    {inputForms.map((form: InputForm & { groups: Group[] }) => {
                        let formTitle = `${form.pos}. ${form[`title_${i18n.language}` as keyof typeof form]}`
                        return (
                            <div key={form.id}>
                                <Link
                                    to={`/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`}
                                >
                                    <li
                                        className={["pl-4 flex items-center gap-1 hover:cursor-pointer",
                                            state === 'inputForm' && form.id === inputFormId ? "bg-selected" : ""].join(' ')}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        {formTitle}
                                    </li>
                                </Link>
                                <ul>
                                    {form.groups.map((gr: Group) => {
                                        let groupTitle = `${gr.pos}. ${gr[`title_${i18n.language}` as keyof typeof gr]}`
                                        return (
                                            <Link
                                                key={gr.id}
                                                to={`/dashboard/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`}
                                            >
                                                <li
                                                    className={["pl-8 flex items-center gap-1 hover:cursor-pointer",
                                                        state === 'group' && gr.id === groupId ? "bg-selected" : ""].join(' ')}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                    {groupTitle}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </ul>
                <li
                    className={["flex items-center gap-1 font-bold",
                        state === 'searchForm' && !searchFormId ? "bg-selected" : ""].join(' ')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <Link
                        to={`/dashboard/db_struct?state=searchForm&searchFormId=0`}
                    >
                        {t('searchforms')}
                    </Link>
                </li>
                <ul>
                    {searchForms.map((form: SearchForm) => {
                        let formTitle = `${form.pos}. ${form[`title_${i18n.language}` as keyof typeof form]}`
                        return (
                            <Link
                                key={form.id}
                                to={`/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`}
                            >
                                <li
                                    className={["pl-4 flex items-center gap-1 hover:cursor-pointer",
                                        state === 'searchForm' && form.id === searchFormId ? "bg-selected" : ""].join(' ')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    {formTitle}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                <li
                    className={["flex items-center gap-1 font-bold",
                        state === 'dictionary' && !dictionaryId ? "bg-selected" : ""].join(' ')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <Link
                        to={`/dashboard/db_struct?state=dictionary&dictionaryId=0`}
                    >
                        {t('dictionaries')}
                    </Link>
                </li>
                <ul>
                    {dictionaries.map((dict: Dictionary) => {
                        let dicTitle = dict[`title_${i18n.language}` as keyof typeof dict]
                        return (
                            <Link
                                key={dict.id}
                                to={`/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`}
                            >
                                <li
                                    className={["pl-4 flex items-center gap-1 hover:cursor-pointer",
                                        state === 'dictionary' && dict.id === dictionaryId ? "bg-selected" : ""].join(' ')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    {dicTitle}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </ul>
        </div>
    )
}