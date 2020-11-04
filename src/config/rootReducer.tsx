import {combineReducers} from '@reduxjs/toolkit'
import userListReducer from '../views/User/components/list/UserListSlice';
import userDetailsReducer from '../views/User/components/details/UserDetailsSlice';

const rootReducer = combineReducers({
    userList: userListReducer,
    userDetails: userDetailsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
