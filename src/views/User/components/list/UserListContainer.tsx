import React, {useEffect} from "react";
import UserList from "./index";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "./UserListSlice";
import {RootState} from "../../../../config/rootReducer";

const UserListContainer = () => {

    const dispatch = useDispatch();

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
        console.log('i fire once');
    }, [dispatch])


    const showWarningMessage = () =>
        <div style={{fontSize: 30, margin: "auto", width: "50%", padding: 10 }}>
            SOMETHING HAPPENS, TRY AGAIN LATER!!!
        </div>

    return (
        <>
            <UserList users={users}/>
            {isGetUsersFailed ?
                showWarningMessage()
                : ""}
        </>
    )
}

export default UserListContainer;
