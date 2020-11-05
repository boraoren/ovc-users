import React, {useEffect} from "react";
import UserList from "./index";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, searchUserByName, userSelect} from "./UserListSlice";
import {RootState} from "../../../../config/rootReducer";
import {useHistory} from "react-router-dom";
import {Search} from "../../../../components/search";

const UserListContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {
        users,
        usersFound,
        isUsersNotFound,
        isGetUsersFailed
    } = useSelector(
        (state: RootState) => {
            return {
                users: state.userList.users,
                isUsersNotFound: state.userList.isUsersNotFound,
                usersFound: state.userList.usersFound,
                isGetUsersFailed: state.userList.isGetUsersFailed,
            }
        }
    )

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const onRowClick = (userId: string) => {
        dispatch(userSelect(userId));
        history.push("/user/details");
    }

    const onSearch = (keyword: string) => {
        dispatch(searchUserByName(keyword))
    }

    const showWarningMessage = () =>
        <div style={{fontSize: 30, margin: "auto", width: "50%", padding: 10}}>
            SOMETHING HAPPENS, TRY AGAIN LATER!!!
        </div>

    return (
        <>
            {isUsersNotFound ?
                <UserList
                    users={users}
                    search={<Search onSearch={onSearch}/>}
                    onRowClick={onRowClick}
                />
                :
                <UserList
                    users={usersFound}
                    search={<Search onSearch={onSearch}/>}
                    onRowClick={onRowClick}
                />
            }

            {isGetUsersFailed ?
                showWarningMessage()
                : ""}
        </>
    )
}

export default UserListContainer;
