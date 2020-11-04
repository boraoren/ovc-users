import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {UserDetails} from "./index";

export default {
    title: 'Views/User Details',
    component: UserDetails,
} as Meta;

export const defaultView = () => <UserDetails/>

defaultView.parameters = {
    jest: ['UserDetails.test.tsx']
}

