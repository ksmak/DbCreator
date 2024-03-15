import { AccessInputForm, AccessSearchForm, AccessType, Department, Prisma, Role, UserRole } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import api from "~/components/api";
import UsersView from "~/components/UI/widgets/users/view";

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const roles: Role[] = await api.users.getRoles()
    const users = await api.users.getUsers()
    const departments: Department[] = await api.users.getDepartments()
    const inputForms = await api.db.getInputForms()
    const searchForms = await api.db.getSearchForms()
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    const roleId = url.searchParams.get("roleId")
    const userId = url.searchParams.get("userId")
    const isNewUser = url.searchParams.get("new_user")
    const currenUserId = url.searchParams.get("current_user")
    let user
    if (isNewUser) {
        user = {}
    } else if (userId) {
        user = await api.users.getUser(Number(userId))
        user = { ...user, password: undefined }
    }
    let role
    let accessInputForms = []
    let accessSearchForms = []
    if (roleId) {
        role = await api.users.getRole(Number(roleId))
        accessInputForms = await api.users.getAccessInputForms(Number(roleId))
        accessSearchForms = await api.users.getAccessSearchForms(Number(roleId))
    }
    let userRoles = []
    if (currenUserId) {
        userRoles = await api.users.getUserRoles(Number(currenUserId))
    }
    return json({
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
        currenUserId,
        userRoles,
    })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'createUser') {
        const createUser = {
            id: Number(values.id),
            isActive: Boolean(values.isActive),
            login: String(values.login),
            password: String(values.password),
            firstName: String(values.firstName),
            lastName: String(values.lastName),
            middleName: String(values.middleName),
            departmentId: Number(values.departmentId),
            expiredPwd: new Date(String(values.expiredPwd)),
            createdAt: null,
            updatedAt: null,
        }
        try {
            await api.users.createUser(createUser)
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateUser') {
        const userId = Number(values.id)
        const updateUser = {
            id: Number(values.id),
            isActive: Boolean(values.isActive),
            login: String(values.login),
            password: String(values.password),
            firstName: String(values.firstName),
            lastName: String(values.lastName),
            middleName: String(values.middleName),
            departmentId: Number(values.departmentId),
            expiredPwd: new Date(String(values.expiredPwd)),
            createdAt: null,
            updatedAt: null,
        }
        try {
            await api.users.updateUser(userId, updateUser)
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteUser') {
        const userId = Number(values.id)
        try {
            await api.users.deleteUser(userId)
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyRole') {
        try {
            await api.users.createEmptyRole(Number(values.cnt))
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateRole') {
        const roleId = Number(values.id)
        const updateRole = {
            id: Number(values.id),
            title_kk: String(values.title_kk),
            title_ru: String(values.title_ru),
        }
        try {
            await api.users.updateRole(roleId, updateRole)
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteRole') {
        const roleId = Number(values.id)
        try {
            await api.users.deleteRole(roleId)
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyAccessInput') {
        try {
            await api.users.createEmptyAccessInputForm(Number(values.roleId))
            return redirect(`/dashboard/users?state=roles&roleId=${values.roleId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateAccessInput') {
        const aformId = Number(values.id)
        const updateAccessInput = {
            id: Number(values.id),
            roleId: Number(values.roleId),
            formId: Number(values.formId),
            accessType: String(values.accessType),
        }
        try {
            await api.users.updateAccessInputForm(aformId, updateAccessInput as AccessInputForm)
            return redirect(`/dashboard/users?state=roles&roleId=${values.roleId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteAccessInput') {
        const aformId = Number(values.id)
        try {
            await api.users.deleteAccessInputForm(aformId)
            return redirect(`/dashboard/users?state=roles&roleId=${values.roleId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyAccessSearch') {
        try {
            await api.users.createEmptyAccessSearchForm(Number(values.roleId))
            return redirect(`/dashboard/users?state=roles&roleId=${values.roleId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateAccessSearch') {
        const aformId = Number(values.id)
        const updateAccessSearch = {
            id: Number(values.id),
            roleId: Number(values.roleId),
            formId: Number(values.formId),
            accessType: String(values.accessType),
        }
        try {
            await api.users.updateAccessSearchForm(aformId, updateAccessSearch as AccessSearchForm)
            return redirect(`/dashboard/users?state=roles&roleId=${values.roleId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteAccessSearch') {
        const aformId = Number(values.id)
        try {
            await api.users.deleteAccessSearchForm(aformId)
            return redirect(`/dashboard/users?state=roles&roleId=${values.roleId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyUserRole') {
        try {
            await api.users.createEmptyUserRole(Number(values.userId))
            return redirect(`/dashboard/users?state=users_roles&current_user=${values.userId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateUserRole') {
        const userRoleId = Number(values.id)
        const updateUserRole = {
            id: Number(values.id),
            userId: Number(values.userId),
            roleId: Number(values.roleId),
        }
        try {
            await api.users.updateUserRole(userRoleId, updateUserRole as UserRole)
            return redirect(`/dashboard/users?state=roles&current_user=${values.userId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteUserRole') {
        const userRoleId = Number(values.id)
        try {
            await api.users.deleteUserRole(userRoleId)
            return redirect(`/dashboard/users?state=users_roles&current_user=${values.userId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    return json({ errors })
}

export default function Users() {
    const {
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
        currenUserId,
        userRoles,
    } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()

    return (
        <UsersView
            state={state}
            roles={roles}
            role={role}
            isNewUser={isNewUser ? true : false}
            user={user}
            users={users}
            departments={departments}
            inputForms={inputForms}
            searchForms={searchForms}
            accessInputForms={accessInputForms}
            accessSearchForms={accessSearchForms}
            currentUserId={Number(currenUserId)}
            userRoles={userRoles}
            errors={data?.errors ? data.errors : undefined}
        />
    )
}