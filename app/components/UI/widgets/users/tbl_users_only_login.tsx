import { Department, User } from "@prisma/client";
import { useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";

type UsersOnlyLoginTableProps = {
    users: User[],
    currentUserId: number,
}

export default function UsersOnlyLoginTable({ users, currentUserId }: UsersOnlyLoginTableProps) {
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
                    <th className="p-1 text-sm border border-blue-gray-500">{t('login')}</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User, index: number) => (
                    <tr
                        key={user.id}
                        className={user?.id === currentUserId ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer"}
                        onClick={() => navigate(`/dashboard/users?state=users_roles&current_user=${user.id}`)}
                    >
                        <td className="p-1 text-sm border border-blue-gray-500 w-10">{index + 1}</td>
                        <td
                            className="p-1 text-sm border border-blue-gray-500"

                        >
                            {user.login}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}