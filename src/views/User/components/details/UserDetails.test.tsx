import React from "react";
import {render, screen, within} from "@testing-library/react";
import UserDetails from "./index";
import store from "../../../../config/store";
import {getUserDetails} from "./UserDetailsSlice";
import {UserDetail} from "../../../../models/UserDetail";
import {getUsers} from "../list/UserListSlice";

describe("<UserDetails/> component", () => {

    const dummyUserDetails = [{
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto",
    },
        {
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla",
        }] as UserDetail[];

    test("has <Table/> component with <Header/> component",
        () => {

            render(<UserDetails
                userDetails={dummyUserDetails}/>)

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

    it("getUserDetailsReducer should failed and state isGetUserDetailsFailed will be true",
        async () => {
            const selectedUserId = "1";
            const wrongUrl = "https://jsonplaceholder.typicode.com/posts1234";
            await store.dispatch(getUserDetails(selectedUserId, wrongUrl));
            let state = store.getState().userDetails;
            expect(state.isGetUserDetailsFailed).toBeTruthy();
        });
})

