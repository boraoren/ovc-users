import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Table} from "./index";
import {Header} from "../header";
import {User} from "../../models/User";
import {object, select} from "@storybook/addon-knobs";

export default {
    title: 'Components/Table',
    component: Table,
} as Meta;

const users = [{
    name: "Leanne Graham",
}] as User[];

export const defaultView = () =>
    <Table
        users={users}
    />;

export const withHeader = () => {

    const userColumnTitles = [
        "name", "email"
    ];

    const users = [
        {
            name: "Leanne Graham",
            email: "test@gmail.com",
        },
        {
            name: "Leanne Graham",
        },
    ] as User[];

    return (<Table
        users={object("Users Data",users)}
        header={
            <Header
                dataTestId={"tableHeaderDataTestId"}
                columnTitles={object("Column Titles Data", userColumnTitles)}/>
        }
    >
    </Table>)
}


defaultView.parameters = {
    jest: ['Table.test.tsx']
}

withHeader.parameters = {
    jest: ['TableWithHeader.test.tsx']
}

