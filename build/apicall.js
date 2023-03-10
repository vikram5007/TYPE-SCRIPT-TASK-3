"use strict";
function getProduct_info() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getProduct_info()
    .then(product => {
    //map- to loop through all the elements from the json
    console.log(product.map(p => p.productid + ' ' + p.product_name + ' ' + p.price + ' ' +p.quantity).toString());
});
