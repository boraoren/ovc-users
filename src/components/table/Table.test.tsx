import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import {Table} from "./index";
import {Text} from "../text";
import {Cell} from "../cell";

describe("<Table> component", () => {

    let wrapper:ShallowWrapper;

    beforeAll(()=>{
       wrapper = shallow((
           <Table/>
       ));
    })

    test(`has <Text/> component`, () => {
        expect(wrapper.contains(<Text/>)).toEqual(true);
    });

    test(`has <Cell/> component`, () => {
        const wrapper = shallow((
            <Table/>
        ));

        expect(wrapper.contains(<Cell/>)).toEqual(true);
    });


});
