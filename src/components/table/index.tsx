import React, {ReactElement} from 'react';
import {Text} from "../text";
import {Cell} from "../cell";
import {User} from "../../models/User";

interface TableProps {
    users: User[];
    header?: ReactElement;
    dataTestId?: string;
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
        header,
        dataTestId = "tableDataTestId"
    }
) => {


    return (
        <div data-testid={dataTestId}>
            {header}

            {users.map(user =>
                (<div
                    key={user.id}
                    style={{display: "flex", justifyContent: "space-around"}}>
                    {getTableContentBy(user)}
                </div>)
            )}

        </div>
    )
}
