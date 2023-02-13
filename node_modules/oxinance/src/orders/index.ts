import instance from "../axios";
import {AxiosResponse} from "axios";


class OrdersClient {

    public constructor() { }

    public list() : Promise<AxiosResponse> {
        return instance.get("/v1/orders");
    }

    public retrieve(id : string) : Promise<AxiosResponse> {
        return instance.get(`/v1/orders/${id}`);
    }
}

export default OrdersClient;
