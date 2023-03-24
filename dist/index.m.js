import t from"axios";var e=t.create({baseURL:"https://api.oxinance.com"}),n=/*#__PURE__*/function(){function t(){}var n=t.prototype;return n.getLoggedInUser=function(){return e.get("/v1/users/current")},n.login=function(t){return e.post("/v1/users/login",t)},n.register=function(t){return e.post("/v1/users/register",t)},n.authenticateWithGoogle=function(t){return e.post("/v1/users/oauth/google",{access_token:t})},n.authenticateWithFacebook=function(t){return e.post("/v1/users/oauth/facebook",{code:t})},n.authenticateWithMicrosoft=function(t){return e.post("/v1/users/oauth/microsoft",{code:t})},n.authenticateWithApple=function(t){return e.post("/v1/users/oauth/apple",{code:t})},t}(),r=/*#__PURE__*/function(){function t(){}var n=t.prototype;return n.list=function(){return e.get("/v1/products")},n.retrieve=function(t){return e.get("/v1/products/"+t)},t}(),o=/*#__PURE__*/function(){function t(){}var n=t.prototype;return n.list=function(){return e.get("/v1/orders")},n.retrieve=function(t){return e.get("/v1/orders/"+t)},t}(),i=/*#__PURE__*/function(){function t(){}var n=t.prototype;return n.list=function(){return e.get("/v1/cart/items")},n.create=function(t,n){return void 0===n&&(n=1),e.post("/v1/cart/items",{price_id:t,quantity:n})},n.delete=function(t){return e.delete("/v1/cart/items/"+t)},n.changeQuantity=function(t,n){return e.put("/v1/cart/items/"+t+"/quantity",{quantity:n})},t}(),u=/*#__PURE__*/function(){function t(){}var n=t.prototype;return n.generatePayPalCheckout=function(t){return void 0===t&&(t={}),e.post("/v1/checkouts/paypal",t)},n.generateBinanceCheckout=function(t){return void 0===t&&(t={}),e.post("/v1/checkouts/binance",t)},n.generateStripeCheckoutSession=function(t){return void 0===t&&(t={}),e.post("/v1/checkouts/stripe/checkout-session",t)},n.generateStripePaymentIntent=function(t){return void 0===t&&(t={}),e.post("/v1/checkouts/stripe/payment-intent",t)},t}(),c=new(/*#__PURE__*/function(){function t(){this.Users=new n,this.Products=new r,this.Orders=new o,this.CartItems=new i,this.Checkouts=new u}var c,s;return t.prototype.logout=function(){delete e.defaults.headers.common["project-authorization"]},c=t,(s=[{key:"publicKey",set:function(t){e.defaults.headers.common["project-public-key"]=t}},{key:"authenticationToken",set:function(t){t&&(e.defaults.headers.common["project-authorization"]=t.startsWith("Token ")?t:"Token "+t)}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key))?o:String(o),r)}var o}(c.prototype,s),Object.defineProperty(c,"prototype",{writable:!1}),t}());export{c as default};
