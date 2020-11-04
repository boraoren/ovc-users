import React from "react";

interface SearchProps {
    dataTestId?: string;
}

export const Search: React.FC<SearchProps> = (
    {dataTestId = "searchDataTestId"}
) => {

    return (
        <div data-testid={dataTestId}>
            SEARCH
        </div>
    )

}
