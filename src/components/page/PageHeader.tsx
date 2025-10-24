interface PageHeaderProp {
    title: string;
    subTitle?: string;
    children?: React.ReactNode;
}

export default function PageHeader({ title, subTitle, children }: PageHeaderProp) {
    return (
        <div id="page-header" className="flex flex-col gap-1">

            <div className="flex flex-col gap-1 justify-center">
                <div id="header-info" className="flex flex-col gap-1 w-4/5">
                    <h1 className="font-bold">{title}</h1>
                    <span className="flex flex-row gap-1 pb-2">
                        <h3>{subTitle}</h3>
                    </span>
                </div>
                <div id="header-extra-detail">
                    {children}
                </div>
            </div>
            <hr className="border-t-2 border-gray-200" />
        </div>
    )
}