import React from 'react';
import {Text} from "../text";

interface HeaderProps {
    dataTestId: string;
    object: object;
}

const getHeaderColumnTitlesBy = (object: object) => {
    return Object.keys(object).map(key => {
        return (<Text
            key={key}
            dataTestId={`${key}ColumnTitleDataTestId`}
            value={`${key.toUpperCase()}`}/>)
    });
}

export const Header: React.FC<HeaderProps> = (
    {
        dataTestId,
        object
    }) => {
    return (
        <div
            data-testid={dataTestId}
            style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
            {getHeaderColumnTitlesBy(object)}
        </div>
    )
}
