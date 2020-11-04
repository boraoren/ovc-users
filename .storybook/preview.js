import {addDecorator} from "@storybook/react";
import {withTests} from "@storybook/addon-jest";
import results from '../.jest-test-results.json';
import {withKnobs} from "@storybook/addon-knobs";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}

addDecorator(
    withTests({
        results,
    })
);

addDecorator(withKnobs)
