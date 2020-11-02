import React from 'react';
import {render, screen} from '@testing-library/react'
import {Text} from "./index";

describe("<Text> component", () => {

    test("expected display label is TEXT", () => {
        render(<Text
            dataTestId={"dataTestId"}
            value={"TEXT"}/>)
        const component = screen.getByTestId('dataTestId');
        expect(component).toHaveTextContent('TEXT');
    })

})
