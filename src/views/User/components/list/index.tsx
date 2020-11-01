import React from 'react';
import {Helmet} from 'react-helmet'

const UserList = () => {

    const TITLE = 'User List'

    return (
        <Helmet>
            <title>
                {TITLE}
            </title>
        </Helmet>
    )
}

export default UserList;
