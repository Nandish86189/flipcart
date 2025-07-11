// localStorage stores only string so set itemas stringyfy
// parse to convert from the dtring back to original format


export let cart =JSON.parse(localStorage.getItem('cart'));


if(!cart){
    cart=[{
    productId: '29893-99283-hue7937-988',
    quantity: 1
}, {
    productId: '29893-98983-h65937-988',
    quantity: 1
}];
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
//if the productid from cart is not equal to the remove peroductid push to newcaart and to original cart becouse if the remove id and cartid matches we should igore it for deleting
    cart.forEach((cartitem) => {
        if (cartitem.productId !== productId) {
            newcart.push(cartitem); // Push the entire cart item object, not just the ID
        }
    });
    cart = newcart;
    savetostorage();
}