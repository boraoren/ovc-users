import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Cell} from "./index";

export default {
    title: 'Components/Cell',
    component: Cell,
} as Meta;

export const defaultView = () =>
    <Cell
        dataTestId={"dataTestId"}>
        <div>CELL ELEMENT</div>
    </Cell>

defaultView.parameters = {
    jest: ['Cell.test.tsx']
}

