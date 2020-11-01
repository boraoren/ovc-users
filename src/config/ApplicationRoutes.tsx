import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import UserList from "../views/User/components/list";

const ApplicationRoutes = () => {
    return (
        <Router>
            <Switch>

                <Route
                    path="/user/list"
                    component={UserList}/>

                <Redirect
                    from="/"
                    to="/user/list"/>

            </Switch>
        </Router>
    );
}
export default ApplicationRoutes;
