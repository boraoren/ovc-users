import {render, screen} from "@testing-library/react";
import {Table} from "./index";
import {Header} from "../header";
import React from "react";
import {User} from "../../models/User";

const users: User[] = [{
    name: "Leanne Graham",
}]


test(`with <Header/> for name`,
    () => {
        render(<Table
            users={users}
            header={
                <Header
                    dataTestId={"headerDataTestId"}
                    object={users[0]}/>
            }/>)

        const headerComponent = screen
            .getByTestId("headerDataTestId");
        expect(headerComponent).toBeTruthy();
        expect(headerComponent).toHaveTextContent("NAME")
    })
