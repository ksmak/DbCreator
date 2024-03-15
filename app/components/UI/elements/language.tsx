import { useTranslation } from "react-i18next";

export default function LanguagePanel() {
    const { i18n } = useTranslation();

    const langs = [
        {
            title: 'KAZ',
            label: 'kk'
        },
        {
            title: 'RUS',
            label: 'ru'
        },
    ]

    return (
        <div className='flex flex-row justify-center items-center gap-4 font-bold'>
            {langs.map((item, index) => (
                <span
                    key={index}
                    className={`${i18n.language === item.label ? 'bg-primary text-white' : 'border border-primary'} p-1 text-sm rounded-md hover:cursor-pointer`}
                    onClick={() => i18n.changeLanguage(item.label)}
                >
                    {item.title}
                </span>
            ))}
        </div>
    )
}