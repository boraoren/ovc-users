import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Table} from "./index";
import {Header} from "../header";
import {User} from "../../models/User";
import {object} from "@storybook/addon-knobs";

export default {
    title: 'Components/Table',
    component: Table,
} as Meta;

const users = [{
    id: 1,
    name: "Leanne Graham",
}] as User[];

export const defaultView = () =>
    <Table
        dataTestId={"tableDataTestId"}
        data={users}
    />;

export const withHeader = () => {

    const userColumnTitles = [
        "name", "email", "city", "company"
    ];

    const users = [
        {
            id: 1,
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            city: "Gwenborough",
            company: "Romaguera-Crona",
        },
        {
            id: 2,
            name: "Ervin Howell",
            email: "Shanna@melissa.tv",
            city: "Wisokyburgh",
            company: "Deckow-Crist",
        },
        {
            id: 3,
            name: "Zebra Stripes",
            email: "Nathan@yesenia.net",
            city: "McKenziehaven",
            company: "Romaguera-Jacobson",
        }
    ] as User[];

    return (<Table
        dataTestId={"tableDataTestId"}
        data={object("Users Data",users)}
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

