import instance from "./axios";
import UsersClient from "./users";
import ProductsClient from "./products";
import OrdersClient from "./orders";
import CartItemsClient from "./cart-items";
import CheckoutsClient from "./checkouts";
import AlgoliaClient from "./algolia";
import PoliciesClient from "./policies";

class Oxinance {

    public Users : UsersClient = new UsersClient();
    public Products : ProductsClient = new ProductsClient();
    public Orders : OrdersClient = new OrdersClient();
    public CartItems : CartItemsClient = new CartItemsClient();
    public Checkouts : CheckoutsClient = new CheckoutsClient();
    public Algolia : AlgoliaClient = new AlgoliaClient();
    public Policies : PoliciesClient = new PoliciesClient();

    public set publicKey(value : string) {
        instance.defaults.headers.common["project-public-key"] = value;
    }

    public set authenticationToken(value : string) {
        if (value) {
            if (value.startsWith("Token ")) {
                instance.defaults.headers.common["project-authorization"] = value;
            } else {
                instance.defaults.headers.common["project-authorization"] = `Token ${value}`;
            }
        }
    }

    public logout() {
        delete instance.defaults.headers.common["project-authorization"];
    }
}

const oxinance : Oxinance = new Oxinance();

export default oxinance;
