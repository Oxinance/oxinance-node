import { AxiosResponse } from "axios";
declare class ProductsClient {
    constructor();
    list(): Promise<AxiosResponse>;
    retrieve(id: string): Promise<AxiosResponse>;
}
export default ProductsClient;
