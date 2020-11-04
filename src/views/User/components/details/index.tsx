import React from "react";
import {Table} from "../../../../components/table";
import {Header} from "../../../../components/header";
import {Helmet} from 'react-helmet'
import {UserDetail} from "../../../../models/UserDetail";


interface UserDetailsProps {
    userDetails: UserDetail[];
}


const UserDetails:React.FC<UserDetailsProps> = ({userDetails}) => {

    const PAGE_TITLE = 'User Details'

    const dummyColumnTitles = [
        "title", "body"
    ] as string[];

    return (
        <>
            <Helmet>
                <title>
                    {PAGE_TITLE}
                </title>
            </Helmet>

            <Table
            data={userDetails}
            header={<Header
                dataTestId={"headerDataTestId"}
                columnTitles={dummyColumnTitles}/>}
        />
        </>
    )

}

export default UserDetails;
