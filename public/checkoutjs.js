import { cart, removefromcart, updateQuantity } from "./cart.js"; // Assuming you'll add updateQuantity to cart.js
import { products } from "./productsdata.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; /* default export used when we export only one thing */

const today=dayjs();
const deliverydate= today.add(7,'days');

console.log(deliverydate.format('dddd MMMM D'));



const orderSummaryContainer = document.querySelector('.order-not-found'); // Assuming this is your main cart display container

function rerender(){
    if (cart.length === 0) {
    // If the cart is empty, render the 'empty cart' message
    const emptyCartHtml = `
        <div class="text-center py-8">
            <h2 class="text-xl font-semibold text-gray-700 mb-2">Your Cart is Empty!</h2>
            <p class="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
            <a href="index.html" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Start Shopping</a>
        </div>
    `;
    orderSummaryContainer.innerHTML = emptyCartHtml;
}
}

rerender();  //CHCECKING if iitialyy empty or not 


let cartsummary = '';

cart.forEach((item) => {
    const productId = item.productId;
    let mactchproduct;

    products.forEach((product) => {
        if (product.id === productId) {
            mactchproduct = product;
        }
    });

    // Use the quantity from the cart item
    const itemQuantity = item.quantity;

    cartsummary += `
<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
    <div class="bg-white p-4 shadow-sm rounded-sm cart-item-${mactchproduct.id}">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 items-start">

            <div class="flex flex-col">
                <div class="flex flex-col sm:flex-row items-start border-b pb-4 sm:border-b-0 sm:pb-0">
                    <img src="${mactchproduct.image}" alt="${mactchproduct.name}" class="w-24 h-24 object-contain mr-4 mb-2 sm:mb-0">
                    <div class="flex-1">
                        <h3 class="font-medium text-gray-800">${mactchproduct.name}</h3>
                        <p class="text-gray-500 small-text">${mactchproduct.ram} GB RAM</p>
                        <p class="text-gray-500 small-text mt-1">Seller: ${mactchproduct.seller} <span class="inline-flex items-center text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 ml-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>Assured</span></p>
                        <div class="flex items-center mt-2">
                            <span class="text-gray-900 font-semibold text-base">${mactchproduct.price.dprice}</span>
                            <span class="text-gray-500 line-through text-sm ml-2 small-text">${mactchproduct.price.oprice}</span>
                            <span class="text-green-600 text-sm font-medium ml-2 small-text">${mactchproduct.offer.poffer}% Off</span>
                            <button class="text-blue-600 text-sm ml-2 hover:underline small-text">${mactchproduct.offer.moffer} offers available <span class="inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></span></button>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center space-x-2">
                        <button class="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg font-medium text-gray-600 item-decrease" data-product-id="${mactchproduct.id}">-</button>
                        <span class="border border-gray-300 px-3 py-1 rounded text-sm actual-increase">${itemQuantity}</span>
                        <button class="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg font-medium text-gray-600 item-increase" data-product-id="${mactchproduct.id}">+</button>
                    </div>
                    <div class="flex space-x-4 text-sm font-semibold">
                        <button class="text-gray-700 hover:text-blue-600 small-text remove-cart-item" data-product-id=${mactchproduct.id}>REMOVE</button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col">
                <div class="bg-white p-4 rounded shadow mt-3 sm:mt-0 w-full">
                    <h2 class="text-center text-gray-800 mb-3 text-lg font-medium">Choose Delivery</h2>

                    <label class="flex items-center border border-gray-200 rounded p-2 mb-2 cursor-pointer hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50">
                        <input type="radio" name="deliveryOption-${mactchproduct.id}" value="tuesday" class="hidden peer" checked>
                        <span class="w-4 h-4 border-2 border-gray-300 rounded-full mr-2 relative peer-checked:border-blue-400 peer-checked:after:content-[''] peer-checked:after:bg-blue-400 peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:transform peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2"></span>
                        <span class="text-sm font-medium text-gray-800">Tuesday</span>
                        <span class="ml-3"> date</span>
                        <span class="text-sm font-medium text-green-500 ml-auto">FREE</span>
                    </label>

                    <label class="flex items-center border border-gray-200 rounded p-2 mb-2 cursor-pointer hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50">
                        <input type="radio" name="deliveryOption-${mactchproduct.id}" value="wednesday" class="hidden peer">
                        <span class="w-4 h-4 border-2 border-gray-300 rounded-full mr-2 relative peer-checked:border-blue-400 peer-checked:after:content-[''] peer-checked:after:bg-blue-400 peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:transform peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2"></span>
                        <span class="text-sm font-medium text-gray-800">Wednesday</span>
                        <span class="ml-3"> date</span>
                        <span class="text-sm font-medium text-blue-500 ml-auto">₹45</span>
                    </label>

                    <label class="flex items-center border border-gray-200 rounded p-2 mb-2 cursor-pointer hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50">
                        <input type="radio" name="deliveryOption-${mactchproduct.id}" value="thursday" class="hidden peer">
                        <span class="w-4 h-4 border-2 border-gray-300 rounded-full mr-2 relative peer-checked:border-blue-400 peer-checked:after:content-[''] peer-checked:after:bg-blue-400 peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:transform peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2"></span>
                        <span class="text-sm font-medium text-gray-800">Thursday</span>
                        <span class="ml-3"> date</span>
                        <span class="text-sm font-medium text-blue-500 ml-auto">₹65</span>
                    </label>
                </div>
            </div>

        </div>
    </div>
</div>
    `;
});

document.querySelector('.order-summary').innerHTML = cartsummary;




document.querySelectorAll('.remove-cart-item').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removefromcart(productId);

        rerender();  // after removing each product cecking empty or not 

        const container = document.querySelector(`.cart-item-${productId}`);
        container.remove();





        let removedName = 'Unknown Product';
        products.forEach((product) => {
            if (product.id === productId) {
                removedName = product.name;
            }
        });

        const notification = document.getElementById('notification');
        notification.textContent = `Item "${removedName}" has been removed from the cart.`;
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 5000);
    });
});

document.querySelectorAll('.item-increase').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; // Get the product ID
        const quantityElement = button.closest('div').querySelector('.actual-increase');
        let currentQuantity = parseInt(quantityElement.innerHTML); 

        currentQuantity += 1;
        quantityElement.innerHTML = currentQuantity;

        updateQuantity(productId, currentQuantity); // Call a function in cart.js to update and save
    });
});

document.querySelectorAll('.item-decrease').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; // Get the product ID
        const quantityElement = button.closest('div').querySelector('.actual-increase');
        let currentQuantity = parseInt(quantityElement.innerHTML);

        if (currentQuantity > 1) {
            currentQuantity -= 1;
            quantityElement.innerHTML = currentQuantity;

            updateQuantity(productId, currentQuantity); // Call a function in cart.js to update and save
        }
    });
});

console.log(cart);





