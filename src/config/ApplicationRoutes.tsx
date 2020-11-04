import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserRoutes} from "../views/User";

const ApplicationRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={UserRoutes}/>
            </Switch>
        </Router>
    );
}
export default ApplicationRoutes;
