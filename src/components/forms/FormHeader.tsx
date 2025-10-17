interface Prop {
    title: string
}

export default function FormHeader({ title }: Prop) {
    return (
        <>
            <header className="flex flex-col gap-2 text-left w-full mx-4">
                <h1 className="text-xl font-bold">{title}</h1>
            </header>
        </>
    )
}
