import React from 'react';
import {render,waitFor} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import App from "./App";


describe("<App>", () => {

    test("redirect from '/' to the 'user/list'", async () => {

        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <App/>
            </Router>
        )

        await waitFor(() => expect(document.title)
            .toEqual("User List"));

    });

});
