import React from 'react';
import {render, screen} from '@testing-library/react'
import {Header} from "./index";

describe("<Header> component", () => {

    const columnTitles: string[] = [
        "name", "email", "city", "company"
    ]

    test("column titles by list of object keys",
        () => {

            render(<Header
                dataTestId={"dataTestId"}
                columnTitles={columnTitles}
            />)

            const headerComponent = screen
                .getByTestId("dataTestId");
            expect(headerComponent).toBeTruthy();

            const nameColumnTitleComponent = screen
                .getByTestId("nameColumnTitleDataTestId")
            expect(nameColumnTitleComponent).toHaveTextContent("NAME");

            const emailColumnTitleComponent = screen
                .getByTestId("emailColumnTitleDataTestId")
            expect(emailColumnTitleComponent).toHaveTextContent("EMAIL");

            const cityColumnTitleComponent = screen
                .getByTestId("cityColumnTitleDataTestId")
            expect(cityColumnTitleComponent).toHaveTextContent("CITY");

            const companyColumnTitleComponent = screen
                .getByTestId("companyColumnTitleDataTestId")
            expect(companyColumnTitleComponent).toHaveTextContent("COMPANY");


        })


    test("expected style / display is flex for header column title elements",
        () => {

            render(<Header
                dataTestId={"dataTestId"}
                columnTitles={columnTitles}
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
                columnTitles={columnTitles}
            />)

            const headerComponent = screen
                .getByTestId("dataTestId");

            const expectedJustification = "space-around";

            expect(headerComponent).toHaveStyle(`justify-content: ${expectedJustification}`);
        });

})
