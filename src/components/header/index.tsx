import React from 'react';
import {Text} from "../text";

interface HeaderProps {
    dataTestId?: string;
    columnTitles: string[];
}

export const Header: React.FC<HeaderProps> = (
    {
        dataTestId= "headerDataTestId",
        columnTitles
    }) => {
    return (
        <div
            data-testid={dataTestId}
            style={{
                display: "flex",
                justifyContent: "space-around"
            }}>

            {columnTitles.map((columnTitle)=>
                <Text
                    key={columnTitle}
                    dataTestId={`${columnTitle}ColumnTitleDataTestId`}
                    value={`${columnTitle.toUpperCase()}`}/>
            )}
        </div>
    )
}
