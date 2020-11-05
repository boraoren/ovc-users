import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../../../models/User";
import {AppThunk} from "../../../../config/store";
import {getUsersApi} from "../../../../api/users";

interface UserListState {
    users: User[];
    usersFound: User[];
    isGetUsersFailed: boolean;
    selectedUserId: string;
    isUsersNotFound: boolean;
}

const initialState: UserListState = {
    users: [],
    usersFound: [],
    isGetUsersFailed: false,
    selectedUserId: "",
    isUsersNotFound: false,
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
        },
        searchUserByNameReducer(state, {payload}: PayloadAction<string>) {
            const usersFound = state.users.filter(user => user.name.includes(payload))

            if (usersFound.length > 0) {
                state.usersFound = usersFound;
                state.isUsersNotFound = false;
            } else {
                state.usersFound = [];
                state.isUsersNotFound = true
            }
        }
    }
})

export const {
    getUsersSuccessReducer,
    getUsersFailureReducer,
    userSelectReducer,
    searchUserByNameReducer,
} = userList.actions;
export default userList.reducer;


export const getUsers = (url = "https://jsonplaceholder.typicode.com/users"): AppThunk =>
    async dispatch => {
        try {
            const getUsersResponse = await getUsersApi(url);
            dispatch(getUsersSuccessReducer(getUsersResponse.users));
        } catch (err) {
            dispatch(getUsersFailureReducer());
        }
    };

export const userSelect = (userId: string) =>
    async (dispatch: Dispatch) => {
        dispatch(userSelectReducer(userId));
    }

export const searchUserByName = (keyword: string) =>
    async (dispatch: Dispatch) => {
        dispatch(searchUserByNameReducer(keyword));
    }
