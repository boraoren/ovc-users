import React, {useEffect} from "react";
import UserDetails from "./index";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../config/rootReducer";
import {getUserDetails} from "./UserDetailsSlice";

const UserDetailsContainer = () => {

    const dispatch = useDispatch();

    const {selectedUserId} = useSelector(
        (state: RootState) => {
            return {
                selectedUserId: state.userList.selectedUserId,
            }
        }
    )

    const {userDetails} = useSelector(
        (state: RootState) => {
            return {
                userDetails: state.userDetails.userDetails,
            }
        }
    )

    useEffect(() => {
        dispatch(getUserDetails(selectedUserId));
    }, [dispatch,selectedUserId])



    return(
        <UserDetails
            userDetails={userDetails}
        />
    )
}

export default UserDetailsContainer;
