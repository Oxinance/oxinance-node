import t from"axios";const e=t.create({baseURL:"https://api.oxinance.com"});class r{constructor(){}getLoggedInUser(){return e.get("/v1/users/current")}login(t){return e.post("/v1/users/login",t)}register(t){return e.post("/v1/users/register",t)}authenticateWithGoogle(t){return e.post("/v1/users/oauth/google",{access_token:t})}}class s{constructor(){}list(){return e.get("/v1/products")}retrieve(t){return e.get(`/v1/products/${t}`)}}class o{constructor(){}list(){return e.get("/v1/orders")}retrieve(t){return e.get(`/v1/orders/${t}`)}}class n{constructor(){}list(){return e.get("/v1/cart/items")}create(t,r=1){return e.post("/v1/cart/items",{price_id:t,quantity:r})}delete(t){return e.delete(`/v1/cart/items/${t}`)}changeQuantity(t,r){return e.put(`/v1/cart/items/${t}/quantity`,{quantity:r})}}class c{constructor(){}generateBinanceCheckout(t={}){return e.post("/v1/checkouts/binance",t)}generateStripeCheckoutSession(t={}){return e.post("/v1/checkouts/stripe/checkout-session",t)}generateStripePaymentIntent(t={}){return e.post("/v1/checkouts/stripe/payment-intent",t)}}const u=new class{constructor(){this.Users=new r,this.Products=new s,this.Orders=new o,this.CartItems=new n,this.Checkouts=new c}set publicKey(t){e.defaults.headers.common["project-public-key"]=t}set authenticationToken(t){t&&(e.defaults.headers.common["project-authorization"]=t.startsWith("Token ")?t:`Token ${t}`)}logout(){delete e.defaults.headers.common["project-authorization"]}};export{u as default};
