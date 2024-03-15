import { Outlet } from "@remix-run/react"
import MainMenu from "./menu/main_menu"
import { Dispatch, SetStateAction } from "react"
import { ContexType, MenuItem } from "~/types/types"

type DashboardViewProps = {
    openNav: boolean,
    setOpenNav: Dispatch<SetStateAction<boolean>>,
    editDataMenuItems: MenuItem[],
    searchDataMenuItems: MenuItem[],
    serviceMenuItems: MenuItem[],
    context: ContexType
}

export default function DashboardView({
    openNav,
    setOpenNav,
    editDataMenuItems,
    searchDataMenuItems,
    serviceMenuItems,
    context }: DashboardViewProps) {
    return (
        <div className="w-full h-screen">
            <MainMenu
                openNav={openNav}
                setOpenNav={setOpenNav}
                editDataMenuItems={editDataMenuItems}
                searchDataMenuItems={searchDataMenuItems}
                serviceMenuItems={serviceMenuItems}
            />
            <div className="overflow-y-auto h-[calc(100vh-5rem)]">
                <Outlet context={context} />
            </div>
        </div>
    )
}