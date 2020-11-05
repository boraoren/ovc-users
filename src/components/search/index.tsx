import React, {useState} from "react";

interface SearchProps {
    dataTestId?: string;
    onSearch: Function;
}

export const Search: React.FC<SearchProps> = (
    {
        dataTestId = "searchDataTestId",
        onSearch
    }
) => {

    const onChange = (event: any) => {
        onSearch(event.target.value);
    }
    return (
        <>
            <input
                data-testid={dataTestId}
                type={"search"}
                placeholder={"Search By Name"}
                onChange={onChange}/>
        </>
    )

}
