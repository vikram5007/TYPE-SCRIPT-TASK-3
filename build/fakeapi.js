"use strict";
function getfakeAPI() {
    //Access data from fakeAPI
    //https://jsonplaceholder.typicode.com/posts
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => console.log(json));
}
getfakeAPI();
