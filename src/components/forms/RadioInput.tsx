import { useId } from "react";
import { IconName } from "../navigation/Types";
import { DynamicIcon } from "lucide-react/dynamic";
import { CircleCheck } from "lucide-react";

interface Prop {
    name: string;
    label: string;
    setValue: (val: any) => void;
    selectedValue?: any;
    value: any;
    icon?: IconName
}

export default function RadioInput({
    name,
    label,
    setValue,
    selectedValue,
    value,
    icon
}: Prop) {
    if (!value) {
        throw new Error("RadioInput requires a 'value' prop.");
    }

    const id = useId();
    const isChecked = value === selectedValue;

    return (
        <div
            className={`
        flex flex-row
        gap-4
        p-4
        rounded-md
        cursor-pointer
        justify-between
        items-center
        bg-white
        border border-gray-50
        shadow-md
        transition-all
        duration-100
        hover:-translate-y-0.5
        hover:shadow-lg
        ${isChecked ? "font-medium" : ""}
      `}
            onClick={() => setValue(value)}
        >
            <div>

                <input
                    id={id}
                    type="radio"
                    name={name}
                    value={value}
                    checked={isChecked}
                    onChange={() => setValue(value)}
                    className="hidden"
                />

                <div className="flex flex-row gap-2 items-center justify-center">
                    {
                        icon &&
                        <DynamicIcon name={icon} size={18} />
                    }
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>

            {
                isChecked &&
                <CircleCheck className="text-green-500" />
            }
        </div>
    );
}
