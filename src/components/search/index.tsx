import React from "react";

interface SearchProps {
    dataTestId?: string;
}

export const Search: React.FC<SearchProps> = (
    {dataTestId = "searchDataTestId"}
) => {

    return (
        <input
            data-testid={dataTestId}
            type={"search"}
            placeholder={"Search By Name"}/>
    )

}
