interface Product {
    product_id: string;
    product_name: string;
    product_price: number;
    product_quantity: number;

}

function getProduct_info(): Promise<Product[]> {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => {
            return res as Product[]
        })
}

getProduct_info()
    .then(product => {
        //map- to loop through all the elements from the json
        console.log(product.map(p => p.product_id + ' ' + p.product_name + ' ' + p.product_price + ' ' + p.product_quantity).toString())
    })