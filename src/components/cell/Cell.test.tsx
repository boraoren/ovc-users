import React from 'react';
import {render, screen} from '@testing-library/react'
import {Cell} from "./index";

describe("<Cell> component", () => {

    let cellComponent: HTMLElement;

    beforeAll(() => {
        render(<Cell
                dataTestId={"dataTestId"}>
                <div>CHILDREN</div>
            </Cell>
        );

        cellComponent = screen.getByTestId('dataTestId');
    })

    test("expected background color is white",
        () => {
            const expectedBackgroundColor = "white";
            expect(cellComponent)
                .toHaveStyle(`background-color: ${expectedBackgroundColor}`)
        });

    test("expected border bottom size is 1, type is solid and color is D7D7D7",
        () => {
            const expectedBorderBottom = "1px solid #D7D7D7";
            expect(cellComponent)
                .toHaveStyle(`border-bottom: ${expectedBorderBottom}`);
        });


});
