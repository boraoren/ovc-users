import React from "react";
import {render, screen} from '@testing-library/react'
import {Search} from "./index";

describe("<Search> component", () => {

    test("renders correctly", () => {
        render(<Search/>)
        const component = screen.getByTestId('searchDataTestId');
        expect(component).toBeTruthy();
    })



})
