import instance from "../axios";
import {AxiosResponse} from "axios";


class ProductsClient {

    public constructor() { }

    public list() : Promise<AxiosResponse> {
        return instance.get("/v1/products");
    }

    public retrieve(id : string) : Promise<AxiosResponse> {
        return instance.get(`/v1/products/${id}`);
    }
}

export default ProductsClient;
