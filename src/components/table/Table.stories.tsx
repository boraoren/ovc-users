import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Table} from "./index";

export default {
    title: 'Components/Table',
    component: Table,
} as Meta;

export const defaultView = () =>
    <Table
        users={[{
            name: "Leanne Graham"
        }]}
    />;

defaultView.parameters = {
    jest: ['Table.test.tsx']
}

