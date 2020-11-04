import React from "react";
import {render, screen, within} from "@testing-library/react";
import UserList from "./index";

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
});
