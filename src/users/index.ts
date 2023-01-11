import instance from "../axios";
import {AxiosResponse} from "axios";

interface ILogin {
    username?: string;
    email? : string;
    password : string;
}

interface IRegister {
    username: string;
    email: string;
    password1: string,
    password2: string,
    first_name?: string;
    last_name?: string;
    metadata?: {};
}

class UsersClient {

    public constructor() { }

    public getLoggedInUser() : Promise<AxiosResponse> {
        return instance.get("/v1/users/current");
    }

    public login(data : ILogin) : Promise<AxiosResponse> {
        return instance.post("/v1/users/login", data);
    }

    public register(data : IRegister) : Promise<AxiosResponse> {
        return instance.post("/v1/users/register", data);
    }
}

export default UsersClient;
