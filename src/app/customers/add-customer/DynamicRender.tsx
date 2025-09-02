import FillOutDetailsStep from "@/app/customers/add-customer/steps/FillOutDetailsStep"
import ReviewStep from "@/app/customers/add-customer/steps/ReviewStep"
import SuccessStep from "@/app/customers/add-customer/steps/SuccessStep"
import ValidateCustomerStep from "@/app/customers/add-customer/steps/ValidateCustomerStep"

interface DynamicRenderProps {
    name: string;
    props?: Record<string, any>;
}

export default function DynamicRender({ name, props = {} }: DynamicRenderProps) {

    const componentsMap: Record<string, React.ComponentType<any>> = {
        FillOutDetailsStep,
        ValidateCustomerStep,
        ReviewStep,
        SuccessStep
    }

    const Component = componentsMap[name];

    return Component ? <Component {...props} /> : null;
}