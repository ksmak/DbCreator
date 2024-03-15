import { Role, UserRole } from "@prisma/client";
import { useTranslation } from "react-i18next";
import ButtonDeleteUserRole from "./btn_delete_userrole";
import { Form } from "@remix-run/react";

type RolesOnlyTitleTableProps = {
    userRoles: any,
    roles: Role[]
}

export default function RolesOnlyTitleTable({ userRoles, roles }: RolesOnlyTitleTableProps) {
    const { i18n, t } = useTranslation()

    return (
        <>
            {userRoles && userRoles.map((ur: UserRole) => (
                <Form
                    className="hidden"
                    id={`updateUserRole_${ur.id}`}
                    key={`updateUserRole_${ur.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={ur.id} />
                    <input type="hidden" name="userId" defaultValue={ur.userId ? ur.userId : ''} />
                    <input
                        type="submit"
                        id={`updateUserRoleButton_${ur.id}`}
                        form={`updateUserRole_${ur.id}`}
                        name="_action"
                        value="updateUserRole"
                    />
                </Form>
            ))}
            <table
                className="w-full"
            >
                <thead
                    className="bg-primary text-white text-center"
                >
                    <tr>
                        <th className="p-1 text-sm border border-blue-gray-500">#</th>
                        <th className="p-1 text-sm border border-blue-gray-500">{t('title')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500"></th>
                    </tr>
                </thead>
                <tbody>
                    {userRoles.map((ur: UserRole, index: number) => (
                        <tr
                            key={ur.id}
                        >
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">{index + 1}</td>
                            <td
                                className="p-1 text-sm border border-blue-gray-500"
                            >
                                <select
                                    className="text-sm w-full"
                                    form={`updateUserRole_${ur.id}`}
                                    name="roleId"
                                    defaultValue={ur.roleId ? ur.roleId : ''}
                                    onChange={() => {
                                        const button = document.getElementById(`updateUserRoleButton_${ur.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                >
                                    {roles.map((role: Role) => (
                                        <option key={role.id} value={role.id}>
                                            {role[`title_${i18n.language}` as keyof typeof role]}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">
                                <ButtonDeleteUserRole userRoleId={ur.id} userId={ur.userId} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}