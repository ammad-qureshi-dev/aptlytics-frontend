"use client";

import Button from "@/components/common/Button";
import FormInput from "@/components/forms/FormInput";
import GridComponent from "@/components/forms/GridForm";
import { AddCustomerRequest } from "@/components/forms/Types";
import PageContainer from "@/components/page/PageContainer";
import PageHeader from "@/components/page/PageHeader";
import { CustomerController } from "@/server/controllers/CustomerController";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function AddCustomerV2() {

    const [customerForm, setCustomerForm] = useState<AddCustomerRequest>({ email: undefined, phoneNumber: undefined, fullName: undefined });

    const submitCustomerForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const request = { ...customerForm };

        if (!request.fullName) {
            toast.warning("Please enter the customer's full name");
            return;
        }

        if (!request.email && !request.phoneNumber) {
            toast.error("Please enter atleast a phone-number or an email");
            return;
        }

        const response = await CustomerController.addCustomer(customerForm);
        if (response.success) {
            toast.success("Customer Added Successfully!")
            return;
        }
    }

    return (
        <PageContainer>
            <PageHeader title="Add Customer" />
            <div id="add-customer-container">
                <form className="w-full flex flex-col gap-8 my-8">
                    <GridComponent cols={2} gap={24}>
                        <FormInput input={{
                            label: "Full Name",
                            inputType: "text",
                            placeHolder: "Peter Parker",
                            value: customerForm.fullName,
                            isRequired: true,
                            onValueChange: (value) => setCustomerForm(prev => ({ ...prev, fullName: value })),
                        }} />
                        <FormInput input={{
                            label: "Email",
                            inputType: "email",
                            placeHolder: "peter_parker@dailybugle.com",
                            value: customerForm.email,
                            isRequired: false,
                            onValueChange: (value) => setCustomerForm(prev => ({ ...prev, email: value })),
                        }} />
                        <FormInput input={{
                            label: "Phone",
                            inputType: "phone",
                            placeHolder: "xxx-xxx-xxxx",
                            value: customerForm.phoneNumber,
                            isRequired: false,
                            onValueChange: (value) => setCustomerForm(prev => ({ ...prev, phoneNumber: value })),
                        }} />
                    </GridComponent>
                    <div id="action-center" className="flex flex-row gap-4 justify-start">
                        <Button label="Cancel" type="button" action="secondary" icon="ban" />
                        <Button label="Add" type="button" action="primary" icon="user-plus" onClick={submitCustomerForm} />
                    </div>
                </form>
            </div>
        </PageContainer>
    )
}