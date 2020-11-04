import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Header} from "./index";

export default {
    title: 'Components/Header',
    component: Header,
} as Meta;

export const defaultView = () => {


    const columnTitles: string[] = [
        "name", "email", "city", "company"
    ]

    return (<Header
        dataTestId={"dataTestId"}
        columnTitles={columnTitles}
    />)
}

defaultView.parameters = {
    jest: ['Header.test.tsx']
}

