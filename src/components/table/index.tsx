import React, {ReactElement} from 'react';
import {Text} from "../text";
import {Cell} from "../cell";

interface TableProps {
    data: any;
    search?: ReactElement;
    header?: ReactElement;
    dataTestId?: string;
    onRowClick?: Function;
}


const getTableContentBy = (item: any) => {
    return Object.keys(item).map(key => {
            return (
                <Cell
                    key={key}
                    dataTestId={`${key}CellDataTestId`}>

                    <Text
                        dataTestId={`${key}TextDataTestId`}
                        value={item[key]}
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
        data,
        search,
        header,
        dataTestId = "tableDataTestId",
        onRowClick = (itemId: number) => {
        }
    }
) => {

    return (
        <div
            data-testid={dataTestId}>
            {search}
            {header}
            {data.map((item: { id: string | number | null | undefined; }) =>
                (<div
                    key={item.id}
                    data-testid={item.id}
                    style={{display: "flex", justifyContent: "space-around"}}
                    onClick={() => onRowClick(item.id)}>
                    {getTableContentBy(item)}
                </div>)
            )}

        </div>
    )
}
