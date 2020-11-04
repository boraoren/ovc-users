import React, {ReactElement} from 'react';
import {Text} from "../text";
import {Cell} from "../cell";
import {User} from "../../models/User";

interface TableProps {
    users: User[];
    header?: ReactElement;
}


const getTableContentBy = (user: any) => {
    return Object.keys(user).map(key => {
            return (
                <Cell
                    key={key}
                    dataTestId={`${key}CellDataTestId`}>

                    <Text
                        dataTestId={`${key}TextDataTestId`}
                        value={user[key]}
                        style={{
                            marginTop: 16,
                            marginBottom: 16,
                            marginLeft: 16,
                        }}/>

                </Cell>
            )
        }
    )
}

export const Table: React.FC<TableProps> = (
    {
        users,
        header
    }
) => {


    return (
        <>
            {header}

            {users.map(user =>
                (<div style={{display: "flex", justifyContent: "space-around"}}>
                    {getTableContentBy(user)}
                </div>)
            )}

        </>
    )
}
