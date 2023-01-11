import instance from "../axios";
import {AxiosResponse} from "axios";


class CartItemsClient {

    public constructor() { }

    public list() : Promise<AxiosResponse> {
        return instance.get("/v1/cart/items");
    }

    public create(priceId : string, quantity : number = 1) : Promise<AxiosResponse> {
        return instance.post("/v1/cart/items", {price_id: priceId, quantity: quantity});
    }

    public delete(id : string) : Promise<AxiosResponse> {
        return instance.delete(`/v1/cart/items/${id}`)
    }

    public changeQuantity(id : string, quantity:  number) : Promise<AxiosResponse> {
        return instance.put(`/v1/cart/items/${id}/quantity`, {quantity: quantity})
    }
}

export default CartItemsClient;
