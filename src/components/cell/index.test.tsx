import React from 'react';
import {render, screen} from '@testing-library/react'
import {Cell} from "./index";

describe("<Cell> component", () => {


    beforeAll(() => {
        render(<Cell/>);
    })

    test("should expected background color be white", () => {
        const cellComponent = screen.getByTestId('cellID');
        const expectedBackgroundColor = "white";
        expect(cellComponent).toHaveStyle(`background-color: ${expectedBackgroundColor}`)
    });

});
