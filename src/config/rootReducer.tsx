import {combineReducers} from '@reduxjs/toolkit'
import userListReducer from '../views/User/components/list/UserListSlice';

const rootReducer = combineReducers({
    userList: userListReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
