interface PageHeaderProp {
    title: string;
    subTitle?: string;
}

export default function PageHeader({ title, subTitle }: PageHeaderProp) {
    return (
        <div id="page-header" className="flex flex-col gap-1">
            <h1 className="font-bold">{title}</h1>
            <h3>{subTitle}</h3>
        </div>
    )
}