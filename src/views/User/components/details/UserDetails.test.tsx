import React from "react";
import {render, screen, within} from "@testing-library/react";
import {UserDetails} from "./index";

describe("<UserDetails/> component", () => {

    test("has <Table/> component with <Header/> component",
        () => {

            render(<UserDetails/>)

            const tableComponent = screen
                .getByTestId("tableDataTestId");
            expect(tableComponent).toBeTruthy();

            const headerComponent = within(tableComponent)
                .getByTestId("headerDataTestId")
            expect(headerComponent).toBeTruthy();

        });
});
