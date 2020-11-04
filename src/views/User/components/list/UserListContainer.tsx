import React, {useEffect} from "react";
import UserList from "./index";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, userSelect} from "./UserListSlice";
import {RootState} from "../../../../config/rootReducer";
import {useHistory} from "react-router-dom";

const UserListContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {users, isGetUsersFailed} = useSelector(
        (state: RootState) => {
            return {
                users: state.userList.users,
                isGetUsersFailed: state.userList.isGetUsersFailed,
            }
        }
    )

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    const onRowClick = (userId: string) => {
        dispatch(userSelect(userId));
        history.push("/user/details");
    }

    const showWarningMessage = () =>
        <div style={{fontSize: 30, margin: "auto", width: "50%", padding: 10 }}>
            SOMETHING HAPPENS, TRY AGAIN LATER!!!
        </div>

    return (
        <>
            <UserList
                users={users}
                onRowClick={onRowClick}
            />
            {isGetUsersFailed ?
                showWarningMessage()
                : ""}
        </>
    )
}

export default UserListContainer;
