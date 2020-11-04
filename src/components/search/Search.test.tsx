import React from "react";
import {render, screen} from '@testing-library/react'
import {Search} from "./index";

describe("<Search> component", () => {

    test("renders correctly", () => {
        render(<Search/>)
        const searchComponentByDataTestId = screen
            .getByTestId('searchDataTestId');
        expect(searchComponentByDataTestId).toBeTruthy();
    })

    test("has placeholder that is 'Search By Name'", () => {
        render(<Search/>)
        const searchComponentByPlaceholder = screen
            .getByPlaceholderText("Search By Name");
        expect(searchComponentByPlaceholder).toBeTruthy();
    });


})
