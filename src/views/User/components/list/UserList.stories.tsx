import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import UserList from "./index";
import {UserListContainer} from "../index";
import {Provider} from "react-redux";
import store from "../../../../config/store";

export default {
    title: 'Views/User List',
    component: UserList,
} as Meta;

export const defaultView = () =>
    <Provider store={store}>
        <UserListContainer/>
    </Provider>

defaultView.parameters = {
    jest: ['UserList.test.tsx']
}

