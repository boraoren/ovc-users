import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Table} from "./index";
import {Header} from "../header";
import {User} from "../../models/User";

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

export const withHeader = () =>
    <Table
        users={users}
        header={
            <Header
                dataTestId={"tableHeaderDataTestId"}
                object={users[0]}/>
        }
    >
    </Table>


defaultView.parameters = {
    jest: ['Table.test.tsx']
}

withHeader.parameters = {
    jest: ['TableWithHeader.test.tsx']
}

