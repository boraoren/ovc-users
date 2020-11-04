import {User} from "../../models/User";
import axios from "axios";
import {GetUsersApiError} from "../errors/GetUsersApiError";
import {UserDetail} from "../../models/UserDetail";
import {GetUserDetailsApiError} from "../errors/GetUserDetailsApiError";

interface CompanyApiModel {
    name: string,
    catchPhrase: string,
    bs: string,
}

interface GeoApiModel {
    lat: string,
    lng: string,
}

interface AddressApiModel {
    street: string,
    suite: string,
    city: string,
    zipcode: string
    geo: GeoApiModel,
}

interface UserApiModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressApiModel,
    phone: string,
    website: string,
    company: CompanyApiModel,
}

interface UserDetailApiModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}


interface GetUsersResponse {
    users: User[];
}

interface GetUserDetailsResponse {
    userDetails: UserDetail[];
}

export const getUsersApi = async (url: string): Promise<GetUsersResponse> => {

    try {
        const usersResponse = await axios.get<UserApiModel[]>(url);

        const usersApiModel = usersResponse.data;
        const users = usersApiModel.map((userApiModel) => {
            return {
                id: userApiModel.id,
                name: userApiModel.name,
                email: userApiModel.email,
                city: userApiModel.address.city,
                company: userApiModel.company.name,
            } as User;
        })

        return {users};
    } catch (error) {
        throw new GetUsersApiError();
    }

}

export const getUserDetailsApi = async (url: string,
                                        userId: string): Promise<GetUserDetailsResponse> => {

    try {
        const userDetailsResponse = await axios.get<UserDetailApiModel[]>(`${url}?userId=${userId}`);
        const userDetailApiModel = userDetailsResponse.data;

        const userDetails = userDetailApiModel.map((userDetailApiModel) => {
            return {
                id: userDetailApiModel.id,
                title: userDetailApiModel.title,
                body: userDetailApiModel.body,
            } as UserDetail;
        });

        return {userDetails}

    } catch (error) {
        throw new GetUserDetailsApiError();
    }

}
