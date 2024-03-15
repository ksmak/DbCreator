import { useNavigate } from "@remix-run/react";
import CustomButton from "../../elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonEditUserProps = {
    userId: number
}

export default function ButtonEditUser({ userId }: ButtonEditUserProps) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <CustomButton
            className="bg-primary hover:shadow-blue-gray-100"
            onClick={() => navigate(`/dashboard/users?state=users&userId=${userId}`)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
        </CustomButton>

    )
}