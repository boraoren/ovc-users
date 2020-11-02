import React from 'react';
import {render, screen} from '@testing-library/react'
import {Header} from "./index";

describe("<Header> component", () => {

    test("column titles by list of object keys",
        () => {

            const object: object = {
                name: 'Leanne',
                surname: 'Graham',
            }

            render(<Header
                dataTestId={"dataTestId"}
                object={object}
            />)

            const headerComponent = screen
                .getByTestId("dataTestId");
            expect(headerComponent).toBeTruthy();

            const nameColumnTitleComponent = screen
                .getByTestId("nameColumnTitleDataTestId")
            expect(nameColumnTitleComponent).toHaveTextContent("NAME");

            const surnameColumnTitleComponent = screen
                .getByTestId("surnameColumnTitleDataTestId")
            expect(surnameColumnTitleComponent).toHaveTextContent("SURNAME");

        })


    test("expected style / display is flex for header column title elements",
        () => {

            const object: object = {
                name: 'Leanne',
                surname: 'Graham',
            }

            render(<Header
                dataTestId={"dataTestId"}
                object={object}
            />)

            const headerComponent = screen
                .getByTestId("dataTestId");

            const expectedStyleDisplay = "flex";

            expect(headerComponent).toHaveStyle(`display: ${expectedStyleDisplay}`);
        });

    test("expected content justification is space around",
        () => {

            const object: object = {
                name: 'Leanne',
                surname: 'Graham',
            }

            render(<Header
                dataTestId={"dataTestId"}
                object={object}
            />)

            const headerComponent = screen
                .getByTestId("dataTestId");

            const expectedJustification = "space-around";

            expect(headerComponent).toHaveStyle(`justify-content: ${expectedJustification}`);
        });

})
