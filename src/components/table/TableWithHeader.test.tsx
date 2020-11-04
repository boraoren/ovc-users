import {render, screen} from "@testing-library/react";
import {Table} from "./index";
import {Header} from "../header";
import React from "react";
import {User} from "../../models/User";

describe("<Table> component", () => {

    test(`with <Header/> for name`,
        () => {

            const columnTitles: string[] = [
                "name",
            ]

            const users: User[] = [{
                id: 1,
                name: "Leanne Graham",
            }]

            render(<Table
                users={users}
                header={
                    <Header
                        dataTestId={"headerDataTestId"}
                        columnTitles={columnTitles}/>
                }/>)

            const headerComponent = screen
                .getByTestId("headerDataTestId");
            expect(headerComponent).toBeTruthy();
            expect(headerComponent).toHaveTextContent("NAME");
        })

    test(`with <Header/> for name and email`,
        () => {

            const columnTitles: string[] = [
                "name", "email",
            ]

            const users: User[] = [{
                id: 1,
                name: "Leanne Graham",
                email: "Sincere@april.biz",
            }]

            render(<Table
                users={users}
                header={
                    <Header
                        dataTestId={"headerDataTestId"}
                        columnTitles={columnTitles}/>
                }/>)

            const headerComponent = screen
                .getByTestId("headerDataTestId");
            expect(headerComponent).toBeTruthy();
            expect(headerComponent).toHaveTextContent("NAME");
            expect(headerComponent).toHaveTextContent("EMAIL");

        });

});
