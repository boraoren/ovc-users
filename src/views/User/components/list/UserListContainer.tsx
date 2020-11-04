import React, {useEffect} from "react";
import UserList from "./index";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "./UserListSlice";
import {RootState} from "../../../../config/rootReducer";

const UserListContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const {users} = useSelector(
        (state: RootState) => {
            return {
                users: state.userList.users
            }
        }
    )

    return (
        <UserList users={users}/>
    )
}

export default UserListContainer;
