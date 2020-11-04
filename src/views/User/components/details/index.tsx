import React from "react";
import {Table} from "../../../../components/table";
import {Header} from "../../../../components/header";
import {UserDetail} from "../../../../models/UserDetail";
import {Helmet} from 'react-helmet'

const UserDetails = () => {

    const PAGE_TITLE = 'User Details'

    const dummyColumnTitles = [
        "title", "body"
    ] as string[];

    const dummyDetails = [{
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto",
    }, {
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }] as UserDetail[];

    return (
        <>
            <Helmet>
                <title>
                    {PAGE_TITLE}
                </title>
            </Helmet>

            <Table
            data={dummyDetails}
            header={<Header
                dataTestId={"headerDataTestId"}
                columnTitles={dummyColumnTitles}/>}
        />
        </>
    )

}

export default UserDetails;
