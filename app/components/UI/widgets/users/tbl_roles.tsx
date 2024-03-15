import { Role } from "@prisma/client";
import { Form, useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import ButtonDeleteRole from "./btn_delete_role";

type RolesTableProps = {
    role: Role,
    roles: Role[]
}

export default function RolesTable({ role, roles }: RolesTableProps) {
    const navigate = useNavigate()
    const { i18n, t } = useTranslation()

    return (
        <>
            {roles.map((role: Role) => (
                <Form
                    key={role.id}
                    method="post"
                    className="hidden"
                    id={`updateRoleForm_${role.id}`}
                >
                    <input type="hidden" name="id" defaultValue={role.id} />
                    <input
                        id={`updateRoleButton_${role.id}`}
                        type="submit"
                        name="_action"
                        value="updateRole"
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
                        <th className="p-1 text-sm border border-blue-gray-500">{t('title_kk')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500">{t('title_ru')}</th>
                        <th className="p-1 text-sm border border-blue-gray-500"></th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((rl: Role, index: number) => (
                        <tr
                            key={rl.id}
                            className={role?.id === rl.id ? "bg-selected hover:cursor-pointer" : "hover:cursor-pointer"}
                            onClick={() => navigate(`/dashboard/users?state=roles&roleId=${rl.id}`)}
                        >
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">{index + 1}</td>
                            <td
                                className="p-1 text-sm border border-blue-gray-500 hover:cursor-pointer hover:underline"
                            >
                                <input
                                    className="text-sm w-full focus:outline-none p-1 text-black"
                                    form={`updateRoleForm_${rl.id}`}
                                    type="text"
                                    name="title_kk"
                                    defaultValue={rl.title_kk}
                                    maxLength={45}
                                    onChange={() => {
                                        const button = document.getElementById(`updateRoleButton_${rl.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                />
                            </td>
                            <td
                                className="p-1 text-sm border border-blue-gray-500 hover:cursor-pointer hover:underline"
                            >
                                <input
                                    className="text-sm w-full focus:outline-none p-1 text-black"
                                    form={`updateRoleForm_${rl.id}`}
                                    type="text"
                                    name="title_ru"
                                    defaultValue={rl.title_ru}
                                    maxLength={45}
                                    onChange={() => {
                                        const button = document.getElementById(`updateRoleButton_${rl.id}`) as HTMLButtonElement
                                        button.click()
                                    }}
                                />
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-500 w-10">
                                <ButtonDeleteRole roleId={rl.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}