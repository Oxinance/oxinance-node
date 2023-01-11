import { AxiosResponse } from "axios";
declare class CartItemsClient {
    constructor();
    list(): Promise<AxiosResponse>;
    create(priceId: string, quantity?: number): Promise<AxiosResponse>;
    delete(id: string): Promise<AxiosResponse>;
    changeQuantity(id: string, quantity: number): Promise<AxiosResponse>;
}
export default CartItemsClient;
