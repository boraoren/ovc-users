import React from 'react';
import {Helmet} from 'react-helmet'
import {Table} from "../../../../components/table";
import {User} from "../../../../models/User";
import {Header} from "../../../../components/header";
import {useHistory} from "react-router-dom";

const UserList = () => {

    const PAGE_TITLE = 'User List'
    const history = useHistory();

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


    const onRowClick = () => {
        history.push("/user/details");
    }

    return (
        <div>
            <Helmet>
                <title>
                    {PAGE_TITLE}
                </title>
            </Helmet>
            <Table
                data={dummyUsers}
                onRowClick={onRowClick}
                header={<Header
                    dataTestId={"headerDataTestId"}
                    columnTitles={dummyColumnTitles}/>}
            />
        </div>
    )
}

export default UserList;
