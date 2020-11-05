import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Search} from "./index";

export default {
    title: 'Components/Search',
    component: Search,
} as Meta;

export const defaultView = () => <Search onSearch={()=>{}}/>;

defaultView.parameters = {
    jest: ['Search.test.tsx']
}

