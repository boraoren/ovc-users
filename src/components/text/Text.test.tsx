import React from 'react';
import { render, screen } from '@testing-library/react'
import {Text} from "./index";

describe("<Text> component", ()=>{

    test("expected display label is TEXT", ()=>{
        render(<Text />)
        const component = screen.getByTestId('textID');
        expect(component).toHaveTextContent('TEXT');
    })

})
