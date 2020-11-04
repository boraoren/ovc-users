import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../../../models/User";
import {AppThunk} from "../../../../config/store";
import {getUsersApi} from "../../../../api/users";

interface UserListState {
    users: User[];
    isGetUsersFailed: boolean;
    selectedUserId: string;
}

const initialState: UserListState = {
    users: [],
    isGetUsersFailed: false,
    selectedUserId: "",
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
        },
        userSelectReducer(state, {payload}: PayloadAction<string>) {
            state.selectedUserId = payload;
        }
    }
})

export const {
    getUsersSuccessReducer,
    getUsersFailureReducer,
    userSelectReducer,
} = userList.actions;
export default userList.reducer;


export const getUsers = (url = "https://jsonplaceholder.typicode.com/users"): AppThunk =>
    async dispatch => {
        try {
            const getUsersResponse = await getUsersApi(url);
            dispatch(getUsersSuccessReducer(getUsersResponse.users));
        } catch (err) {
            console.error(err);
            dispatch(getUsersFailureReducer());
        }
    };

export const userSelect = (userId: string) =>
    async (dispatch: Dispatch) => {
        dispatch(userSelectReducer(userId));
    }
