export let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage




export function addtocart(productId) {
    let matchingItem;

    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1; // Increment quantity if item already exists
    } else {
        cart.push({
            productId: productId,
            quantity: 1 ,// Default quantity when first added
            deliveryoptionId: '1'
        });
    }
    saveCart(); // Save cart after adding
}

export function removefromcart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);                           //if the product in cart is not equal to the removing roduct id then had to cart 
        }
    });
    cart = newCart;

    saveCart(); // Save cart after removing
}

// New function to update quantity and save
export function updateQuantity(productId, newQuantity) {
    let foundItem = false;
    cart.forEach((item) => {
        if (item.productId === productId) {
            item.quantity = newQuantity;                   //takes the increased quantity and adds new quantity
            foundItem = true;
        }
    });
    if (foundItem) {
        saveCart(); // Save cart after updating quantity
    }
}

  export function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
}

