import React from 'react';
import {shallow} from "enzyme";
import {Table} from "./index";
import {Text} from "../text";

describe("<Table> component", () => {

    test(`has <Text/> component`, () => {
        const wrapper = shallow((
            <Table/>
        ));

        expect(wrapper.contains(<Text/>)).toEqual(true);
    });

});
