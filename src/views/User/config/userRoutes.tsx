import {Redirect, Route, Switch} from "react-router-dom";
import {UserDetailsContainer, UserListContainer} from "../components";
import React from "react";

export const UserRoutes = () => {
    return (
        <Switch>

            <Route
                exact path="/user/list"
                component={UserListContainer}/>

            <Redirect
                exact from="/"
                to="/user/list"/>

            <Route
                exact path="/user/details"
                component={UserDetailsContainer}/>

        </Switch>
    )
};
