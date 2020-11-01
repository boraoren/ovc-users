import React from "react";
import { Meta } from '@storybook/react/types-6-0';
import {Text} from "./index";
import {withTests} from "@storybook/addon-jest";
import results from '../../.jest-test-results.json';

export default {
    title: 'Components/Text',
    component: Text,
    decorators: [withTests({ results })],
} as Meta;

export const defaultView = () =>  <Text/>;

defaultView.parameters = {
    jest: ['index.test.tsx']
}

