import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import UserList from "./index";

export default {
    title: 'Views/User List',
    component: UserList,
} as Meta;

export const defaultView = () => <UserList/>

defaultView.parameters = {
    jest: ['UserList.test.tsx']
}

