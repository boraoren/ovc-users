import React from 'react';

interface TextProps {
    dataTestId: string;
    value: string;
}

export const Text: React.FC<TextProps> = (props) => {

    const {dataTestId, value} = props;

    return (
        <div data-testid={dataTestId}>
            {value}
        </div>
    )
}
