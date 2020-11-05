import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../../../../config/store";
import {getUserDetailsApi} from "../../../../api/users";
import {UserDetail} from "../../../../models/UserDetail";

interface UserDetailsState {
    userDetails: UserDetail[];
    isGetUserDetailsFailed: boolean;
}

const initialState: UserDetailsState = {
    userDetails: [] as UserDetail[],
    isGetUserDetailsFailed: false,
}

const userDetails = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        getUserDetailsSuccessReducer(state, {payload}: PayloadAction<UserDetail[]>) {
            state.isGetUserDetailsFailed = false;
            state.userDetails = payload;
        },
        getUserDetailsFailureReducer(state) {
            state.isGetUserDetailsFailed = true;
            state.userDetails = {} as UserDetail[];
        }
    }
})

export const {
    getUserDetailsSuccessReducer,
    getUserDetailsFailureReducer,
} = userDetails.actions;
export default userDetails.reducer;


export const getUserDetails = (userId: string,url = "https://jsonplaceholder.typicode.com/posts"): AppThunk =>
    async dispatch => {
        try {
            const getUserDetailsResponse = await getUserDetailsApi(url, userId);
            dispatch(getUserDetailsSuccessReducer(getUserDetailsResponse.userDetails));
        } catch (err) {
            dispatch(getUserDetailsFailureReducer());
        }
    };
