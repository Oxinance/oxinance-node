import { AxiosResponse } from "axios";
declare class OrdersClient {
    constructor();
    list(): Promise<AxiosResponse>;
    retrieve(id: string): Promise<AxiosResponse>;
}
export default OrdersClient;
