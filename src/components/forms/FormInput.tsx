import { FormInputType } from "./Types";

interface FormInputProp {
    input: FormInputType;
}

export default function FormInput({ input }: FormInputProp) {
    return (
        <div id="form-input" className={`flex flex-col w-full ${input.css}`}>
            <p className="flex flex-row gap-1">{input.label}
                {
                    input.isRequired &&
                    <span className="text-red-500">*</span>
                }
            </p>
            <input
                className="border border-gray-200 bg-white py-2 px-4 rounded-sm w-full h-12"
                type={input.inputType}
                placeholder={input?.placeHolder}
                onChange={(e) => input.onValueChange(e.target.value)}
                value={input.value ?? ""}
                required={input.isRequired}
            />
        </div>
    )
}