import MaterialTailwind from "@material-tailwind/react"
const { List } = MaterialTailwind
import NavListMenu from "./nav_list_menu"
import { MenuItem } from "~/types/types"
import { useTranslation } from "react-i18next"

type NavListProps = {
    editDataMenuItems: MenuItem[],
    searchDataMenuItems: MenuItem[],
    serviceMenuItems: MenuItem[],
}

export default function NavList({
    editDataMenuItems,
    searchDataMenuItems,
    serviceMenuItems
}: NavListProps) {
    const { t } = useTranslation()

    return (
        <List
            className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
            placeholder=""
        >
            <NavListMenu
                menuTitle={t('edit_data')}
                navListMenuItems={editDataMenuItems}
            />
            <NavListMenu
                menuTitle={t('search_data')}
                navListMenuItems={searchDataMenuItems}
            />
            <NavListMenu
                menuTitle={t('service')}
                navListMenuItems={serviceMenuItems}
            />
        </List>
    )
}