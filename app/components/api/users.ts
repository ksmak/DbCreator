import { Role, User, AccessInputForm, AccessSearchForm, UserRole } from "@prisma/client"
import { PrismaClient } from "@prisma/client/extension"
import bcrypt from 'bcryptjs'

export default function UsersModule(prisma: PrismaClient) {
    return {
        getDepartments() {
            return prisma.department.findMany()
        },
        getUsers(q: string | null = null) {
            if (!q) {
                return prisma.user.findMany({
                    include: {
                        roles: true
                    },
                    orderBy: {
                        login: 'asc',
                    }
                })
            } else {
                return prisma.user.findMany({
                    include: {
                        roles: true
                    },
                    where: {
                        login: {
                            startsWith: q
                        }
                    },
                    orderBy: {
                        login: 'asc',
                    }
                })
            }
        },
        createUser(user: User) {
            return prisma.user.create({
                data: {
                    ...user,
                    id: undefined,
                    password: bcrypt.hashSync(user.password),
                    createdAt: undefined,
                    updatedAt: undefined
                }
            })
        },
        updateUser(userId: number, user: User) {
            if (!user.password) {
                return prisma.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        ...user,
                        id: undefined,
                        password: bcrypt.hashSync(user.password),
                        createdAt: undefined,
                        updatedAt: undefined
                    }
                })
            } else {
                return prisma.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        ...user,
                        id: undefined,
                        password: undefined,
                        createdAt: undefined,
                        updatedAt: undefined
                    }
                })
            }
        },
        getUser(userId: number) {
            return prisma.user.findFirst({
                where: {
                    id: userId
                }
            })
        },
        deleteUser(userId: number) {
            return prisma.user.delete({
                where: {
                    id: userId
                }
            })
        },
        getRoles() {
            return prisma.role.findMany()
        },
        createEmptyRole(cnt: number) {
            return prisma.role.create({
                data: {
                    title_kk: `Role ${cnt}`,
                    title_ru: `Role ${cnt}`
                }
            })
        },
        updateRole(roleId: number, role: Role) {
            return prisma.role.update({
                where: {
                    id: roleId
                },
                data: {
                    ...role,
                    id: undefined
                }
            })
        },
        getRole(roleId: number) {
            return prisma.role.findFirst({
                where: {
                    id: roleId
                }
            })
        },
        deleteRole(roleId: number) {
            return prisma.role.delete({
                where: {
                    id: roleId
                }
            })
        },
        getAccessInputForms(roleId: number) {
            return prisma.accessInputForm.findMany({
                include: {
                    form: true,
                },
                where: {
                    roleId: roleId
                },
            })
        },
        createEmptyAccessInputForm(roleId: number) {
            return prisma.accessInputForm.create({
                data: {
                    roleId: roleId
                }
            })
        },
        updateAccessInputForm(aformId: number, aform: AccessInputForm) {
            return prisma.accessInputForm.update({
                where: {
                    id: aformId
                },
                data: {
                    ...aform,
                    id: undefined
                }
            })
        },
        getAccessInputForm(aformId: number) {
            return prisma.accessInputForm.findFirst({
                where: {
                    id: aformId
                }
            })
        },
        deleteAccessInputForm(aformId: number) {
            return prisma.accessInputForm.delete({
                where: {
                    id: aformId
                }
            })
        },
        getAccessSearchForms(roleId: number) {
            return prisma.accessSearchForm.findMany({
                include: {
                    form: true,
                },
                where: {
                    roleId: roleId
                }
            })
        },
        createEmptyAccessSearchForm(roleId: number) {
            return prisma.accessSearchForm.create({
                data: {
                    roleId: roleId
                }
            })
        },
        updateAccessSearchForm(aformId: number, aform: AccessSearchForm) {
            return prisma.accessSearchForm.update({
                where: {
                    id: aformId
                },
                data: {
                    ...aform,
                    id: undefined
                }
            })
        },
        getAccessSearchForm(aformId: number) {
            return prisma.accessSearchForm.findFirst({
                where: {
                    id: aformId
                }
            })
        },
        deleteAccessSearchForm(aformId: number) {
            return prisma.accessSearchForm.delete({
                where: {
                    id: aformId
                }
            })
        },
        getUserRoles(userId: number) {
            return prisma.userRole.findMany({
                include: {
                    role: true
                },
                where: {
                    userId: userId
                }
            })
        },
        createEmptyUserRole(userId: number) {
            return prisma.userRole.create({
                data: {
                    userId: userId
                }
            })
        },
        updateUserRole(userRoleId: number, userRole: UserRole) {
            return prisma.userRole.update({
                where: {
                    id: userRoleId
                },
                data: {
                    ...userRole,
                    id: undefined
                }
            })
        },
        deleteUserRole(userRoleId: number) {
            return prisma.userRole.delete({
                where: {
                    id: userRoleId
                }
            })
        },
    }
}