const products = {
    price: 15000,
    brand: 'Sports',
    color: 'black'
}

const Watchs = (order, {price, brand, color}) =>{
    console.log(order, price, brand, color);
}

Watchs("Watch", products);