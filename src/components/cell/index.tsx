import React, {ReactElement} from "react";

interface CellProps {
    dataTestId: string;
    children: ReactElement;
}

export const Cell: React.FC<CellProps> = (
    {
        dataTestId,
        children
    }) => {

    return (
        <div
            data-testid={dataTestId}
            style={{
                flex: 1,
                backgroundColor: "white",
                borderBottom: "1px solid #D7D7D7",
            }}>
            {children}
        </div>
    )
}
