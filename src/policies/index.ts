import {AxiosResponse} from "axios";
import instance from "../axios";
import Policy from "./enum";


class PoliciesClient {

    public constructor() { }
    public retrieve(policy : Policy) : Promise<AxiosResponse> {
        return instance.get(`/v1/policies/${policy}`);
    }
}

export default PoliciesClient;