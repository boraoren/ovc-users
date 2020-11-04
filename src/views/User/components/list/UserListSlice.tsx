import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../../../models/User";
import {AppThunk} from "../../../../config/store";
import {getUsersApi} from "../../../../api/users";

interface UserListState {
    users: User[];
}

const initialState: UserListState = {
    users: [],
}

const userList = createSlice({
    name: "userList",
    initialState,
    reducers: {
        getUsersSuccessReducer(state, {payload}: PayloadAction<User[]>) {
            state.users = payload;
        }
    }
})

export const {
    getUsersSuccessReducer,
} = userList.actions;
export default userList.reducer;


export const getUsers = (): AppThunk =>
    async dispatch => {
        const getUsersResponse = await getUsersApi();
        dispatch(getUsersSuccessReducer(getUsersResponse.users));
    };
