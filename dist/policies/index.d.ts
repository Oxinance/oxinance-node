import { AxiosResponse } from "axios";
import Policy from "./enum";
declare class PoliciesClient {
    constructor();
    retrieve(policy: Policy): Promise<AxiosResponse>;
}
export default PoliciesClient;
