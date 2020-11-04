import {Redirect, Route, Switch} from "react-router-dom";
import UserList from "../components/list";
import React from "react";


export const UserRoutes = () => {
    return (
        <Switch>

            <Route
                path="/user/list"
                component={UserList}/>

            <Redirect
                from="/"
                to="/user/list"/>

        </Switch>
    )
}
