interface Prop {
    onSubmitFn: (val: any) => void;
    children: React.ReactNode;
}

export default function FormContainer({ children, onSubmitFn }: Prop) {
    return (
        <>
            <form className="w-full flex flex-col gap-8 my-2" onSubmit={onSubmitFn}>
                {children}
            </form>
        </>
    )
}