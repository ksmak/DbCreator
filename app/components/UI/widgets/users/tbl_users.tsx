import moment from "moment";
import { Department, User } from "@prisma/client";
import { useNavigate } from "@remix-run/react";
import ButtonDeleteUser from "./btn_delete_user";
import { useTranslation } from "react-i18next";
import ButtonEditUser from "./btn_edit_user";

type UsersTableProps = {
    currentUserId: number,
    users: User[],
    departments: Department[]
}

export default function UsersTable({ currentUserId, users, departments }: UsersTableProps) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <table
            className="w-full"
        >
            <thead
                className="bg-primary text-white text-center"
            >
                <tr>
                    <th className="p-1 text-sm border border-blue-gray-500">#</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('is_active')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('login')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('first_name')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('last_name')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('middle_name')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('department')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('expired_password')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('created')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500">{t('updated')}</th>
                    <th className="p-1 text-sm border border-blue-gray-500"></th>
                    <th className="p-1 text-sm border border-blue-gray-500"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User, index: number) => (
                    <tr
                        key={user.id}
                        className={user?.id === currentUserId ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer"}
                    >
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >{index + 1}</td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {user.isActive ? t('active') : t('not_active')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {user.login}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {user.firstName}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {user.lastName}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {user.middleName}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {departments.find(item => item.id === user.departmentId)?.title}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {moment(user.expiredPwd).format('DD.MM.YYYY')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {moment(user.createdAt).format('DD.MM.YYYY H:m:s')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500"
                            onClick={() => navigate(`/dashboard/users?state=users&current_user=${user.id}`)}
                        >
                            {moment(user.updatedAt).format('DD.MM.YYYY H:m:s')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500 w-10">
                            <ButtonEditUser userId={user.id} />
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-500 w-10">
                            <ButtonDeleteUser userId={user.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}