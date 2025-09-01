import React from "react";
import { GridComponentType } from "./Types";

export default function GridComponent(prop: GridComponentType) {

    const childrenArray = React.Children.toArray(prop.children);

    return (
        <div
            id="grid-component"
            style={{
                display: "grid",
                width: "100%",
                gap: prop.gap,
            }}
        >
            {childrenArray.map((child, key) => (
                <div key={key} style={{ gridColumn: "1 / -1" }}>
                    {child}
                </div>
            ))}
        </div>

    )
}