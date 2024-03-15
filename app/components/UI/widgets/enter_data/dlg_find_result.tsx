import MaterialTailwind from "@material-tailwind/react"
import { useNavigate } from "@remix-run/react"
import { Dispatch, SetStateAction } from "react"
import CustomButton from "../../elements/custom_button"
import { useTranslation } from "react-i18next"
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind

type DialogFindResultProps = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    docs: { formId?: number, ids?: number[] },
}

export default function DialogFindResult({ open, setOpen, docs }: DialogFindResultProps) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const handleOpenInputForm = () => {
        setOpen(false)
        if (docs && docs.ids?.length) {
            navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`)
        } else {
            navigate(`/dashboard/enter_data/${docs.formId}?state=search`)
        }
    }

    return (
        <Dialog
            placeholder=""
            size="sm"
            open={open}
            handler={() => handleOpenInputForm()}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full" placeholder="">
                <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                    {docs && docs.ids?.length
                        ? <div className="text-bold p-1">{t('find_result')}: {docs.ids?.length}</div>
                        : <div className="text-bold p-1">{t('nothing')}</div>}

                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3 justify-center" placeholder="">
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        onClick={() => handleOpenInputForm()}
                    >
                        OK
                    </CustomButton>
                </CardFooter>
            </Card>
        </Dialog>
    )
}