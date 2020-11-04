import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../../../models/User";
import {AppThunk} from "../../../../config/store";
import {getUsersApi} from "../../../../api/users";

interface UserListState {
    users: User[];
    isGetUsersFailed: boolean;
}

const initialState: UserListState = {
    users: [],
    isGetUsersFailed: false,
}

const userList = createSlice({
    name: "userList",
    initialState,
    reducers: {
        getUsersSuccessReducer(state, {payload}: PayloadAction<User[]>) {
            state.users = payload;
            state.isGetUsersFailed = false;
        },
        getUsersFailureReducer(state) {
            state.users = [];
            state.isGetUsersFailed = true;
        }
    }
})

export const {
    getUsersSuccessReducer,
    getUsersFailureReducer,
} = userList.actions;
export default userList.reducer;


export const getUsers = (url =  "https://jsonplaceholder.typicode.com/users"): AppThunk =>
    async dispatch => {
        try {
            const getUsersResponse = await getUsersApi(url);
            dispatch(getUsersSuccessReducer(getUsersResponse.users));
        } catch (err) {
            console.error(err);
            dispatch(getUsersFailureReducer());
        }
    };
