import { Link, useNavigate } from "@remix-run/react";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from "react";

type RecNavigatorProps = {
    docs: any,
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>
}

export default function RecNavigator({ docs, current, setCurrent }: RecNavigatorProps) {
    const [val, setVal] = useState(current)
    const navigate = useNavigate()
    const handleFirst = () => {
        setVal(0)
        setCurrent(0)
        navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`)
    }
    const handlePrev = () => {
        if (current > 0) {
            --current
            setVal(current)
            setCurrent(current)
            navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`)
        }
    }
    const handleNext = () => {
        const lastIndex = docs.ids.length - 1
        if (current < lastIndex) {
            ++current
            setVal(current)
            setCurrent(current)
            navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`)
        }
    }
    const handleLast = () => {
        const lastIndex = docs.ids.length - 1
        setVal(lastIndex)
        setCurrent(lastIndex)
        navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[lastIndex]}`)
    }
    const handleSeek = (val: number) => {
        if (val < 0) {
            val = 0
        }
        if (val > docs.ids.length - 1) {
            val = docs.ids.length - 1
        }
        setVal(val)
        setCurrent(val)
        navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[val]}`)
    }
    return (
        <div>
            {docs && docs.ids
                ? <div className="flex gap-1 justify-end items-center text-xs">
                    <p className="text-blue-gray-600 font-bold">
                        {current + 1} / {docs.ids.length}
                    </p>
                    <input
                        className="p-1 text-blue-gray-600 focus:outline-0 w-20"
                        type="number"
                        max={docs.ids.length}
                        min={1}
                        value={val + 1}
                        onChange={(e) => setVal(Number(e.target.value) - 1)}

                    />
                    <button
                        className="w-20 text-center border bg-blue-gray-500 p-1 font-bold text-white rounded"
                        onClick={() => handleSeek(val)}
                    >
                        Seek
                    </button>
                    <button
                        className="w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded"
                        onClick={() => handleFirst()}
                    >
                        &lt;&lt;
                    </button>
                    <button
                        className="w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded"
                        onClick={() => handlePrev()}
                    >
                        &lt;
                    </button>
                    <button
                        className="w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded"
                        onClick={() => handleNext()}
                    >
                        &gt;
                    </button>
                    <button
                        className="w-8 text-center border bg-orange-700 p-1 font-bold text-white rounded"
                        onClick={() => handleLast()}
                    >
                        &gt;&gt;
                    </button>
                </div>
                : null}
        </div>
    )
}