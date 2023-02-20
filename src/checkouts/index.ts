import instance from "../axios";
import {AxiosResponse} from "axios";

type ShippingAddress = {
    first_name : string;
    last_name : string;
    address_line_1 : string;
    address_line_2? : string;
    city : string;
    state : string;
    zip_code : string;
    country : string;
    phone_number? : string;
}

type RequestData = {
    shipping_address? : ShippingAddress;
}

class CheckoutsClient {

    public constructor() { }

    public generatePayPalCheckout(data : RequestData = {}) : Promise<AxiosResponse> {
        return instance.post("/v1/checkouts/paypal", data);
    }

    public generateBinanceCheckout(data : RequestData = {}) : Promise<AxiosResponse> {
        return instance.post("/v1/checkouts/binance", data);
    }

    public generateStripeCheckoutSession(data : RequestData = {}) : Promise<AxiosResponse> {
        return instance.post("/v1/checkouts/stripe/checkout-session", data)
    }

    public generateStripePaymentIntent(data : RequestData = {}) : Promise<AxiosResponse> {
        return instance.post("/v1/checkouts/stripe/payment-intent", data)
    }
}

export default CheckoutsClient;
