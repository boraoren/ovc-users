import {User} from "../../models/User";
import axios from "axios";

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

interface GetUsersResponse {
    users: User[];
}

export const getUsersApi = async (): Promise<GetUsersResponse> => {

    const url = "https://jsonplaceholder.typicode.com/users";
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

}
