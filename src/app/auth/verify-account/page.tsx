"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import RadioGroupContainer from "@/components/forms/RadioGroupContainer";
import RadioInput from "@/components/forms/RadioInput";
import PageContainer from "@/components/page/PageContainer";
import PageContentContainer from "@/components/page/PageContentContainer";
import PageHeader from "@/components/page/PageHeader";
import { CommunicationsController } from "@/server/controllers/CommunicationsController";
import { CommsRequest } from "@/server/controllers/Types";
import { UserController } from "@/server/controllers/UserController";
import { capitalizeString } from "@/utils/StringUtils";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function VerifyAccount() {
    const [currValue, setCurrValue] = useState<"EMAIL" | "PHONE">("EMAIL");

    const sendVerificationEmail = async (commsType: "EMAIL" | "PHONE", userId: string, recipient: string) => {
        const commsRequest: CommsRequest = {
            commsType: commsType,
            recipient: recipient,
            subject: "Account Verification",
            messageContent: "Verify your account here: http://localhost:3000/auth/verify-account/" + userId
        }

        const response = await CommunicationsController.send(commsType, commsRequest);
        return response.success && response.data;
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const commsType = currValue;
        const me = await UserController.getMe();
        const verificationSent = await sendVerificationEmail(commsType, me.userId, commsType === "EMAIL" ? me.email : me.phoneNumber);
        if (verificationSent) {
            toast.success("Verification via " + capitalizeString(commsType) + " sent")
        } else {
            toast.error("Could not verify via " + capitalizeString(commsType) + ". Please choose another method");
        }
    }

    return (
        <PageContainer width="lg:w-1/3 md:w-2/3 sm:w-3/4" css="mt-8">
            <PageHeader title="Verify Your Account" />
            <PageContentContainer>
                <RadioGroupContainer onSubmitFn={onSubmit}>
                    <RadioInput name="method" label="Phone" value="PHONE" setValue={setCurrValue} selectedValue={currValue} icon="tablet-smartphone" />
                    <RadioInput name="method" label="Email" value="EMAIL" setValue={setCurrValue} selectedValue={currValue} icon="mail" />
                    <div className="flex flex-col items-end">
                        <PrimaryButton label="Send" type="submit" />
                    </div>
                </RadioGroupContainer>
            </PageContentContainer>

        </PageContainer>
    )
}