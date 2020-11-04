import React from "react";
import {render, screen, waitFor, within} from "@testing-library/react";
import UserList from "./index";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {UserRoutes} from "../..";
import userEvent from "@testing-library/user-event";
import {User} from "../../../../models/User";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {RootState} from "../../../../config/rootReducer";
import store from "../../../../config/store";
import {getUsers} from "./UserListSlice";

describe("<UserList> component", () => {

    const dummyUsers = [{
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

    test("has <Table/> component with <Header/>",
        () => {

            render(<UserList
                users={dummyUsers}/>)

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

            const middlewares = [thunk] as any;
            const mockStore = configureMockStore(middlewares);

            render(
                <Provider store={mockStore({
                    userList: {
                        users: dummyUsers,
                        selectedUserId: "1",
                        isGetUsersFailed: false,
                    },
                    userDetails: {
                        userDetails: [],
                        isGetUserDetailsFailed: false,
                    }
                } as RootState)}>
                    <Router history={history}>
                        <UserRoutes/>
                    </Router>
                </Provider>
            )

            const selectedUserId = "1";
            const tableRow = screen.getByTestId(selectedUserId);
            expect(tableRow).toBeTruthy();
            userEvent.click(tableRow);

            await waitFor(() => expect(document.title)
                .toEqual("User Details"));

        });

});

describe("<UserList/> reducer", () => {

    it("getUsersReducer should return user list",
        async () => {
            await store.dispatch(getUsers());
            let state = store.getState().userList;
            expect(state.users.length).toEqual(10);
            expect(state.isGetUsersFailed).toBeFalsy();
            expect(state.users[0].name).toContain("Leanne Graham")
        });

    it("getUsersReducer should failed and state isGetUsersFailed will be true",
        async () => {
            const wrongUrl = "https://jsonplaceholder.typicode.com/users1234";
            await store.dispatch(getUsers(wrongUrl));
            let state = store.getState().userList;
            expect(state.isGetUsersFailed).toBeTruthy();
        });


});

