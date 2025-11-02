interface Prop {
    onSubmitFn: (val: any) => void;
    children: React.ReactNode;
}

export default function RadioGroupContainer({ onSubmitFn, children }: Prop) {
    return (
        <>
            <form className="w-full flex flex-col gap-4" onSubmit={onSubmitFn}>
                {children}
            </form>
        </>
    )
}