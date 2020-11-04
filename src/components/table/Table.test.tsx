import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import {Table} from "./index";
import {Text} from "../text";
import {Cell} from "../cell";
import {render, screen} from "@testing-library/react";
import {User} from "../../models/User";
import {UserDetail} from "../../models/UserDetail";
import userEvent from '@testing-library/user-event'

describe("<Table> component", () => {

    let wrapper: ShallowWrapper;
    const users: User[] = [{
        id: 1,
        name: "Leanne Graham",
    }]

    beforeAll(() => {
        wrapper = shallow((
            <Table
                data={users}/>
        ));
    })

    test(`has <Text/> component`,
        () => {
            expect(wrapper
                .contains(
                    <Text
                        dataTestId={"nameTextDataTestId"}
                        value={"Leanne Graham"}
                        style={{
                            marginTop: 16,
                            marginBottom: 16,
                            marginLeft: 16,
                        }}/>))
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
                            value={"Leanne Graham"}
                            style={{
                                marginTop: 16,
                                marginBottom: 16,
                                marginLeft: 16,
                            }}/>
                    </Cell>
                ))
                .toEqual(true);
        });


    test(`has name type <Cell/> component and <Text/> component value is Leanne Graham`,
        () => {
            render(<Table data={users}/>)
            const nameCellComponent = screen.getByTestId("nameCellDataTestId");
            expect(nameCellComponent).toBeTruthy();

            const nameTextComponent = screen.getByTestId("nameTextDataTestId");
            expect(nameTextComponent).toBeTruthy();
            expect(nameTextComponent).toHaveTextContent("Leanne Graham")

        });

    test(`<Text/> component top 16`,
        () => {
            render(<Table data={users}/>)
            const nameTextComponent = screen.getByTestId("nameTextDataTestId");
            const expectedTop = 16;

            expect(nameTextComponent)
                .toHaveStyle(`margin-top:${expectedTop}px`);
        })

    test(`<Text/> component bottom 16`,
        () => {
            render(<Table data={users}/>)
            const nameTextComponent = screen.getByTestId("nameTextDataTestId");
            const expectedBottom = 16;

            expect(nameTextComponent)
                .toHaveStyle(`margin-bottom:${expectedBottom}px`);
        })

    test(`<Text/> component left 16`,
        () => {
            render(<Table data={users}/>)
            const nameTextComponent = screen.getByTestId("nameTextDataTestId");
            const expectedLeft = 16;

            expect(nameTextComponent)
                .toHaveStyle(`margin-left:${expectedLeft}px`);
        })


    test(`<Table/> add more data to the users`,
        () => {

            const users = [{
                id: 1,
                name: "Leanne Graham",
                email: "Sincere@april.biz",
                city: "Gwenborough",
                company: "Romaguera-Crona",
            },
                {
                    id: 2,
                    name: "Ervin Howell",
                    email: "Shanna@melissa.tv",
                    city: "Wisokyburgh",
                    company: "Deckow-Crist",
                },
                {
                    id: 3,
                    name: "Zebra Stripes",
                    email: "Nathan@yesenia.net",
                    city: "McKenziehaven",
                    company: "Romaguera-Jacobson",
                }] as User[];

            render(<Table data={users}/>)

            const cellComponent = screen.getAllByTestId("nameCellDataTestId");

            cellComponent.forEach((cell, index) => {
                expect(cell.textContent).toContain(users[index].name);
            })

        });

    test(`<Table/> for user details`,
        () => {

            const userDetails = [{
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto",
            }, {
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }] as UserDetail[];


            render(<Table data={userDetails}/>)

            const cellComponent = screen.getAllByTestId("titleCellDataTestId");

            cellComponent.forEach((cell, index) => {
                expect(cell.textContent).toContain(userDetails[index].title);
            })

        });

    test(`should open given link when the row is clicked`,
        () => {

            const users = [{
                id: 1,
                name: "Leanne Graham",
                email: "Sincere@april.biz",
                city: "Gwenborough",
                company: "Romaguera-Crona",
            }];

            const mockRowOnClick = jest.fn();

            render(<Table
                onRowClick={mockRowOnClick}
                data={users}/>);

            userEvent.click(screen.getByTestId("1"));
            expect(mockRowOnClick.mock.calls.length).toEqual(1);

        });


});
