import MaterialTailwind from "@material-tailwind/react"
import Logo from "~/components/UI/elements/logo"
import { MenuItem } from "~/types/types"
import NavList from "./nav_list"
import LanguagePanel from "~/components/UI/elements/language"
import { Dispatch, SetStateAction } from "react"
const {
    IconButton,
    Collapse,
} = MaterialTailwind
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline"

type MainMenuProps = {
    openNav: boolean,
    setOpenNav: Dispatch<SetStateAction<boolean>>,
    editDataMenuItems: MenuItem[],
    searchDataMenuItems: MenuItem[],
    serviceMenuItems: MenuItem[],
}

export default function MainMenu({
    openNav,
    setOpenNav,
    editDataMenuItems,
    searchDataMenuItems,
    serviceMenuItems }: MainMenuProps) {
    return (
        <div className="w-full">
            <div
                className="w-full px-4 bg-white shadow shadow-blue-gray-500 mb-2"

            >
                <div className="w-full flex items-center justify-between text-blue-gray-900">
                    <div className="shrink-0 h-16">
                        <Logo />
                    </div>
                    <div className="hidden lg:block">
                        <NavList
                            editDataMenuItems={editDataMenuItems}
                            searchDataMenuItems={searchDataMenuItems}
                            serviceMenuItems={serviceMenuItems}
                        />
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                        placeholder=""
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                    <LanguagePanel />
                </div>
                <Collapse open={openNav}>
                    <NavList
                        editDataMenuItems={editDataMenuItems}
                        searchDataMenuItems={searchDataMenuItems}
                        serviceMenuItems={serviceMenuItems}
                    />
                </Collapse>
            </div>
        </div>
    )
}