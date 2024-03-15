import { AccessInputForm, AccessSearchForm, Department, InputForm, Role, SearchForm, User } from "@prisma/client";
import UserDialog from "./dlg_user";
import ButtonNewUser from "./btn_new_user";
import Panel from "../../elements/panel";
import UsersTable from "./tbl_users";
import ErrorMessage from "../../elements/error_message";
import MaterialTailwind from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import RolesTable from "./tbl_roles";
import AccessInputFormsTable from "./tbl_ainputforms";
import ButtonAddAccessInputForm from "./btn_add_ainputform";
import ButtonAddRole from "./btn_add_role";
import ButtonAddAccessSearchForm from "./btn_add_asearchform";
import AccessSearchFormsTable from "./tbl_asearchforms";
import UsersOnlyLoginTable from "./tbl_users_only_login";
import RolesOnlyTitleTable from "./tbl_roles_only_title";
import ButtonAddUserRole from "./btn_add_userrole";
const { Tab, TabPanel, Tabs, TabsBody, TabsHeader } = MaterialTailwind;


type UserViewProps = {
    state: string | null,
    role: Role,
    roles: Role[],
    isNewUser: boolean,
    user: User | null,
    users: User[],
    departments: Department[],
    inputForms: InputForm[],
    searchForms: SearchForm[],
    accessInputForms: AccessInputForm[],
    accessSearchForms: AccessSearchForm[],
    currentUserId: number,
    userRoles: any,
    errors: string | undefined,
}

export default function UsersView({
    state,
    role,
    roles,
    isNewUser,
    user,
    users,
    departments,
    inputForms,
    searchForms,
    accessInputForms,
    accessSearchForms,
    currentUserId,
    userRoles,
    errors,
}: UserViewProps) {
    const { t } = useTranslation()

    return (
        <div className="mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]">
            <ErrorMessage errors={errors} />
            <UserDialog
                isNew={isNewUser}
                user={user}
                departments={departments}
                errors={errors}
            />
            <Panel className="h-full overflow-auto">
                <Tabs value={state ? state : "users"}>
                    <TabsHeader
                        placeholder=""
                    >
                        <Tab
                            className="capitalize text-primary font-bold"
                            value='users'
                            placeholder=""
                        >
                            {t('users')}
                        </Tab>
                        <Tab
                            className="capitalize text-primary font-bold"
                            value='roles'
                            placeholder=""
                        >
                            {t('roles')}
                        </Tab>
                        <Tab
                            className="capitalize text-primary font-bold"
                            value='users-roles'
                            placeholder=""
                        >
                            {t('users-roles')}
                        </Tab>
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { x: 250 },
                            mount: { x: 0 },
                            unmount: { x: 250 },
                        }}
                        placeholder=""
                    >
                        <TabPanel className="p-1" value='users'>
                            <div className="mb-2 flex justify-between py-2 px-2 border border-blue-gray-100">
                                <div
                                    className="flex items-center gap-3"
                                >
                                    <ButtonNewUser />
                                </div>
                            </div>
                            <UsersTable
                                currentUserId={currentUserId}
                                users={users}
                                departments={departments}
                            />
                        </TabPanel>
                        <TabPanel className="p-1" value="users-roles">
                            <div className="mt-5 p-1 border flex gap-20">
                                <div className="w-1/2 flex flex-col gap-3">
                                    <h1 className="text-bold text-primary">{t('users')}</h1>
                                    <div className="w-full">
                                        <UsersOnlyLoginTable
                                            users={users}
                                            currentUserId={currentUserId}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-3">
                                    <h1 className="text-bold text-primary">{t('roles')}</h1>
                                    {currentUserId ? <ButtonAddUserRole userId={currentUserId} /> : null}
                                    <RolesOnlyTitleTable
                                        roles={roles}
                                        userRoles={userRoles}
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="p-1" value="roles">
                            <div className="mt-5 p-1 border flex flex-col gap-3">
                                <h1 className="text-bold text-primary">{t('roles')}</h1>
                                <div>
                                    <ButtonAddRole count={roles.length} />
                                </div>
                                <RolesTable role={role} roles={roles} />
                            </div>
                            <div className="mt-5 p-1 border flex flex-col gap-3">
                                <h1 className="text-bold text-primary">{t('access_inputforms')}</h1>
                                <div>
                                    {role && <ButtonAddAccessInputForm roleId={role.id} />}
                                </div>
                                <AccessInputFormsTable
                                    aforms={accessInputForms}
                                    inputForms={inputForms}
                                />
                            </div>
                            <div className="mt-5 p-1 border flex flex-col gap-3">
                                <h1 className="text-bold text-primary">{t('access_searchforms')}</h1>
                                <div>
                                    {role && <ButtonAddAccessSearchForm roleId={role.id} />}
                                </div>
                                <AccessSearchFormsTable
                                    aforms={accessSearchForms}
                                    searchForms={searchForms}
                                />
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>

            </Panel>
        </div>
    )
}