import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Header} from "./index";

export default {
    title: 'Components/Header',
    component: Header,
} as Meta;

export const defaultView = () => {

    const object: object = {
        name: 'Leanne',
        surname: 'Graham',
    }

    return (<Header
        dataTestId={"dataTestId"}
        object={object}
    />)
}

defaultView.parameters = {
    jest: ['Header.test.tsx']
}

