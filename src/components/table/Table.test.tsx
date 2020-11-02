import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import {Table} from "./index";
import {Text} from "../text";
import {Cell} from "../cell";
import {render, screen} from "@testing-library/react";
import {User} from "../../models/User";

describe("<Table> component", () => {

    let wrapper: ShallowWrapper;
    const users: User[] = [{
        name: "Leanne Graham",
    }]

    beforeAll(() => {
        wrapper = shallow((
            <Table
                users={users}/>
        ));
    })

    test(`has <Text/> component`,
        () => {
            expect(wrapper
                .contains(
                    <Text
                        dataTestId={"nameTextDataTestId"}
                        value={"Leanne Graham"}/>))
                .toEqual(true);
        });

    test(`has <Cell/> component`,
        () => {
            expect(wrapper
                .contains(
                    <Cell
                        dataTestId={"nameCellDataTestId"}>
                        <Text
                            dataTestId={"nameTextDataTestId"}
                            value={"Leanne Graham"}/>
                    </Cell>
                ))
                .toEqual(true);
        });


    test(`has name type <Cell/> component and <Text/> component value is Leanne Graham`,
        () => {

            render(<Table users={users}/>)

            const nameCellComponent = screen.getByTestId("nameCellDataTestId");
            expect(nameCellComponent).toBeTruthy();

            const nameTextComponent = screen.getByTestId("nameTextDataTestId");
            expect(nameTextComponent).toBeTruthy();
            expect(nameTextComponent).toHaveTextContent("Leanne Graham")

        });


});
