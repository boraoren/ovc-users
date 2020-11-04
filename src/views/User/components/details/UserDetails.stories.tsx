import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import UserDetails from "./index";
import store from "../../../../config/store";
import {Provider} from "react-redux";
import {UserDetailsContainer} from "../index";

export default {
    title: 'Views/User Details',
    component: UserDetails,
} as Meta;

export const defaultView = () =>
    <Provider store={store}>
        <UserDetailsContainer/>
    </Provider>

defaultView.parameters = {
    jest: ['UserDetails.test.tsx']
}

