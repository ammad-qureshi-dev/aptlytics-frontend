import Option from "./Option";
import { DropDownOptionType } from "./Types";

interface Prop {
    options: DropDownOptionType[];
    onSelect?: (val: any) => void
}

export default function DropDown({ options, onSelect }: Prop) {
    return (
        <>
            <div className="w-full h-full">
                <select name="" id="" className="mt-6 h-full flex flex-row items-center justify-center">
                    {
                        options.map((option, key) => {
                            return (
                                <Option option={option} key={key} />
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
}