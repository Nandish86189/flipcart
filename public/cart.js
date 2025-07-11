export let cart =JSON.parse(localStorage.getItem('cart'));


if(!cart){
    cart=
    [{
    productId: '29893-99283-hue7937-988',
    quantity: 1
}, {
    productId: '29893-98983-h65937-988',
    quantity: 1
}
];
}



function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}


export function addtocart(productId) {
    let matchingitem;

    // Chaecking if product is in the cart and updating the cart quantity value
    cart.forEach((item) => {
        if (item.productId === productId) {
            matchingitem = item;
        }
    });

    if (matchingitem) {
        matchingitem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    savetostorage();
}


export function removefromcart(productId) {
    const newcart = [];

    cart.forEach((cartitem) => {
        if (cartitem.productId !== productId) {
            newcart.push(cartitem); // Push the entire cart item object, not just the ID
        }
    });
    cart = newcart;
    savetostorage();
}