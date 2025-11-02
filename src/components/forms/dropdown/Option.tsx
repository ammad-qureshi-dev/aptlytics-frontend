import { DropDownOptionType } from "./Types";

interface Prop {
    option: DropDownOptionType;
}

export default function Option({ option }: Prop) {
    return (
        <>
            <option className="" value={option.value}>{option.label}</option>
        </>
    )
}