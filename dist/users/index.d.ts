import { AxiosResponse } from "axios";
interface ILogin {
    username?: string;
    email?: string;
    password: string;
}
interface IRegister {
    username: string;
    email: string;
    password1: string;
    password2: string;
    first_name?: string;
    last_name?: string;
    metadata?: {};
}
declare class UsersClient {
    constructor();
    getLoggedInUser(): Promise<AxiosResponse>;
    login(data: ILogin): Promise<AxiosResponse>;
    register(data: IRegister): Promise<AxiosResponse>;
    authenticateWithGoogle(data: any): Promise<AxiosResponse<any, any>>;
}
export default UsersClient;
