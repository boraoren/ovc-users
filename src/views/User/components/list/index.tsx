import React from 'react';
import {Helmet} from 'react-helmet'
import {Table} from "../../../../components/table";
import {Header} from "../../../../components/header";
import {User} from "../../../../models/User";

interface UserListProps {
    users: User[];
    onRowClick?: Function;
}

const UserList: React.FC<UserListProps> = (
    {
        users,
        onRowClick
    }) => {

    const PAGE_TITLE = 'User List'

    const dummyColumnTitles = [
        "id", "name", "email", "city", "company"
    ] as string[];

    return (
        <div>
            <Helmet>
                <title>
                    {PAGE_TITLE}
                </title>
            </Helmet>
            <Table
                data={users}
                onRowClick={onRowClick}
                header={<Header
                    dataTestId={"headerDataTestId"}
                    columnTitles={dummyColumnTitles}/>}
            />
        </div>
    )
}

export default UserList;
