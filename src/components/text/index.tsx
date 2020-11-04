import React from 'react';

interface TextProps {
    dataTestId?: string;
    value: string;
    style?: any;
}

export const Text: React.FC<TextProps> = (
    {
        dataTestId= "textDataTestId",
        value,
        style,
    }
) => {

    return (
        <div
            data-testid={dataTestId}
            style={style}>
            {value}
        </div>
    )
}
