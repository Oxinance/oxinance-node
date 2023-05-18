import UsersClient from "./users";
import ProductsClient from "./products";
import OrdersClient from "./orders";
import CartItemsClient from "./cart-items";
import CheckoutsClient from "./checkouts";
import AlgoliaClient from "./algolia";
declare class Oxinance {
    Users: UsersClient;
    Products: ProductsClient;
    Orders: OrdersClient;
    CartItems: CartItemsClient;
    Checkouts: CheckoutsClient;
    Algolia: AlgoliaClient;
    set publicKey(value: string);
    set authenticationToken(value: string);
    logout(): void;
}
declare const oxinance: Oxinance;
export default oxinance;
