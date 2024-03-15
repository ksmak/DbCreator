import MaterialTailwind from "@material-tailwind/react";
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind;
import { Department, User } from "@prisma/client";
import { Form } from "@remix-run/react";
import moment from "moment";
import CustomInput from "../../elements/custom_input";
import CustomSelect from "../../elements/custom_select";
import CustomButton from "../../elements/custom_button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type UserDialogProps = {
    isNew: boolean
    user: User | null,
    departments: Department[],
    errors: string | null | undefined
}

export default function UserDialog({ isNew, user, departments, errors }: UserDialogProps) {
    const { i18n, t } = useTranslation()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(user ? true : false)
    }, [user])

    return (
        <Dialog
            placeholder=""
            size="sm"
            open={open}
            handler={() => setOpen(false)}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full" placeholder="">
                <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                    <Form
                        id="userForm"
                        key={user?.id}
                        className="flex flex-col gap-3"
                        method="post"
                    >
                        <input type="hidden" name="id" defaultValue={user?.id ? user.id : ''} />
                        <CustomInput
                            id="user_is_active"
                            type="checkbox"
                            name="isActive"
                            title={t('is_active')}
                            defaultChecked={user?.isActive}
                        />
                        <CustomInput
                            id="user_login"
                            type="text"
                            name="login"
                            title={t('login')}
                            defaultValue={user?.login}
                            required={true}
                            readOnly={!isNew}
                            size={45}
                        />
                        <CustomInput
                            id="user_password"
                            type="password"
                            name="password"
                            title={t('password')}
                            defaultValue={user?.password}
                            required={false}
                            size={45}
                        />
                        <CustomInput
                            id="user_firsName"
                            type="text"
                            name="firstName"
                            title={t('first_name')}
                            defaultValue={user?.firstName ? user.firstName : ""}
                            required={false}
                            size={45}
                        />
                        <CustomInput
                            id="user_lastName"
                            type="text"
                            name="lastName"
                            title={t('last_name')}
                            defaultValue={user?.lastName ? user.lastName : ""}
                            required={false}
                            size={45}
                        />
                        <CustomInput
                            id="user_middleName"
                            type="text"
                            name="middleName"
                            title={t('middle_name')}
                            defaultValue={user?.middleName ? user.middleName : ""}
                            required={false}
                            size={45}
                        />
                        <CustomSelect
                            id="user_department"
                            name="departmentId"
                            title={t('department')}
                            defaultValue={user?.departmentId ? user.departmentId : ""}
                            required={false}
                        >
                            <option>-</option>
                            {departments.map(item => (
                                <option value={item.id}>{item[`title_${i18n.language}` as keyof typeof item]}</option>
                            ))}
                        </CustomSelect>
                        <CustomInput
                            id="user_expiredPwd"
                            type="date"
                            name="expiredPwd"
                            title={t('expired_password')}
                            defaultValue={moment(user?.expiredPwd).format("YYYY-MM-DD")}
                            required={true}
                            size={45}
                        />
                    </Form>
                    <span className="text-red-500 text-sm">{errors}</span>
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3 justify-center" placeholder="">
                    <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        form="userForm"
                        type="submit"
                        name="_action"
                        value={isNew ? "createUser" : "updateUser"}
                    >
                        {t('save')}
                    </CustomButton>
                    <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        onClick={() => setOpen(false)}
                    >
                        {t('close')}
                    </CustomButton>
                </CardFooter>
            </Card>
        </Dialog>
    )
}