interface Prop {
    width: string;
    height: string;
}

export default function SkeletonBox({ width, height }: Prop) {
    return (
        <div id="loading-container" className={`${width} ${height} bg-gray-300 rounded animate-pulse`}>
        </div>
    )
}