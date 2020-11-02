import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Text} from "./index";

export default {
    title: 'Components/Text',
    component: Text,
} as Meta;

export const defaultView = () => <Text
    dataTestId={"dataTestId"}
    value={"TEXT"}
/>;

defaultView.parameters = {
    jest: ['Text.test.tsx']
}

