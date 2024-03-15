import MaterialTailwind from "@material-tailwind/react"
const {
    Collapse,
    Typography,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} = MaterialTailwind
import { Fragment, createElement, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

type NavListMenuProps = {
    menuTitle: string,
    navListMenuItems: {
        title: string,
        link: string,
        icon: any
    }[]
}

export default function NavListMenu({ menuTitle, navListMenuItems }: NavListMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, link }, key) => (
            <div key={key}>
                <MenuItem
                    placeholder=""
                    className="flex items-center gap-3 rounded-lg"
                >
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-primary w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            className="flex items-center text-sm font-bold text-primary"
                            variant="h6"
                            placeholder=""
                        >
                            <Link to={link}>{title}</Link>
                        </Typography>
                    </div>
                </MenuItem>
            </div>
        ),
    );

    return (
        <Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
            >
                <MenuHandler>
                    <Typography
                        className="font-medium"
                        as="div"
                        variant="small"
                        placeholder=""
                    >
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-bold text-primary h-6"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                            placeholder=""
                        >
                            {menuTitle}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList
                    className="hidden max-w-screen-xl rounded-xl lg:block"
                    placeholder=""
                >
                    <ul className="flex flex-col gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </Fragment>
    )
}