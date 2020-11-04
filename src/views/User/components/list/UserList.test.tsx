import React from "react";
import {render, screen, waitFor, within} from "@testing-library/react";
import UserList from "./index";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {UserRoutes} from "../..";
import userEvent from "@testing-library/user-event";

describe("<UserList> component", () => {

    test("has <Table/> component with <Header/>",
        () => {

            render(<UserList/>)

            const tableComponent = screen
                .getByTestId("tableDataTestId");
            expect(tableComponent).toBeTruthy();

            const headerComponent = within(tableComponent)
                .getByTestId("headerDataTestId")
            expect(headerComponent).toBeTruthy();

        });


    test(`should open given link when the row is clicked`,
        async () => {

            const history = createMemoryHistory()

            render(
                <Router history={history}>
                    <UserRoutes/>
                </Router>
            )

            const selectedUserId = "1";
            const tableRow = screen.getByTestId(selectedUserId);
            expect(tableRow).toBeTruthy();
            userEvent.click(tableRow);

            await waitFor(() => expect(document.title)
                .toEqual("User Details"));

        });

});
