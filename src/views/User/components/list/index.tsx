import React from 'react';
import {Helmet} from 'react-helmet'
import {Table} from "../../../../components/table";
import {Header} from "../../../../components/header";
import {useHistory} from "react-router-dom";
import {User} from "../../../../models/User";

interface UserListProps{
    users: User[];
}

const UserList:React.FC<UserListProps> = ({users}) => {

    const PAGE_TITLE = 'User List'
    const history = useHistory();

    const dummyColumnTitles = [
        "id", "name", "email", "city", "company"
    ] as string[];

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
