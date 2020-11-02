import React from 'react';
import {Text} from "../text";
import {Cell} from "../cell";
import {User} from "../../models/User";

interface TableProps {
    users: User[];
}


const getTableContentBy = (user: any) => {
    return Object.keys(user).map(key => {
            return (
                <Cell
                    dataTestId={`${key}CellDataTestId`}>
                    <Text
                        dataTestId={`${key}TextDataTestId`}
                        value={user[key]}/>
                </Cell>
            )
        }
    )
}

export const Table: React.FC<TableProps> = (
    {
        users,
    }
) => {


    return (
        <>
            {users.map(user =>
                getTableContentBy(user)
            )}
        </>
    )
}
