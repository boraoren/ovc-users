import React from "react";
import {render, screen, within} from "@testing-library/react";
import UserDetails from "./index";
import store from "../../../../config/store";
import {getUserDetails} from "./UserDetailsSlice";

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

describe("<UserDetails/> reducer", () => {

    it("getUserDetailsReducer should return user details",
        async () => {
            const selectedUserId = "1";
            await store.dispatch(getUserDetails(selectedUserId));
            let state = store.getState().userDetails;
            expect(state.userDetails.length).toEqual(10);
            expect(state.isGetUserDetailsFailed).toBeFalsy();
            expect(state.userDetails[3].title).toContain("eum et est occaecati");
        });
})

