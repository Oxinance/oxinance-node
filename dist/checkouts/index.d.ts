import { AxiosResponse } from "axios";
type ShippingAddress = {
    first_name: string;
    last_name: string;
    address_line_1: string;
    address_line_2?: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    phone_number?: string;
};
type RequestData = {
    shipping_address?: ShippingAddress;
};
declare class CheckoutsClient {
    constructor();
    generatePayPalCheckout(data?: RequestData): Promise<AxiosResponse>;
    generateBinanceCheckout(data?: RequestData): Promise<AxiosResponse>;
    generateStripeCheckoutSession(data?: RequestData): Promise<AxiosResponse>;
    generateStripePaymentIntent(data?: RequestData): Promise<AxiosResponse>;
}
export default CheckoutsClient;
