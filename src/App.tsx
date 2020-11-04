import React from 'react';
import './App.css';
import ApplicationRoutes from "./config/ApplicationRoutes";
import {Provider} from "react-redux";
import store from "./config/store";

function App() {
    return (
        <Provider store={store}>
            <ApplicationRoutes/>
        </Provider>
    );
}

export default App;
