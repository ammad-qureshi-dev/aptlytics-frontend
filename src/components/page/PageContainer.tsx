interface Prop {
    children: React.ReactNode;
    width?: string;
    height?: string;
    css?: string;
}

export default function PageContainer({ children, width = "w-5/6", height = "h-full", css }: Prop) {
    return (
        <div
            id="page-container"
            className={`
        ${width}
        ${height}
        flex flex-col
        rounded-md
        shadow-sm
        bg-[#FBFBFB]
        my-8
        p-8
        border border-gray-100
        ${css}
      `}
        >
            {children}
        </div>
    );
}
