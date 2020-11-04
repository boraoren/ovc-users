import React from 'react';
import {Helmet} from 'react-helmet'
import {Table} from "../../../../components/table";
import {User} from "../../../../models/User";
import {Header} from "../../../../components/header";

const UserList = () => {

    const TITLE = 'User List'

    const dummyColumnTitles = [
        "id", "name", "email", "city", "company"
    ] as string[];

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

    return (
        <div>
            <Helmet>
                <title>
                    {TITLE}
                </title>
            </Helmet>
            <Table
                data={dummyUsers}
                header={<Header
                    dataTestId={"headerDataTestId"}
                    columnTitles={dummyColumnTitles}/>}
            />
        </div>
    )
}

export default UserList;
