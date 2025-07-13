// checkout.js
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

import { cart, removefromcart, updateQuantity } from "./cart.js";
import { products } from "./productsdata.js";

// Define the delivery options data directly in checkout.js
const deliveryOptions = [{
    id: '1',
    deliverydays: 7, // 7 days from today
    pricecents: 0
}, {
    id: '2',
    deliverydays: 3, // 3 days from today
    pricecents: 45
}, {
    id: '3',
    deliverydays: 1, // 1 day from today
    pricecents: 65
}];


const orderSummaryContainer = document.querySelector('.order-summary'); // Make sure your HTML has a div with class "order-summary"

function renderCheckoutPage() { // Renamed from rerender for clarity and consistency
    if (cart.length === 0) {
        const emptyCartHtml = `
            <div class="text-center py-8">
                <h2 class="text-xl font-semibold text-gray-700 mb-2">Your Cart is Empty!</h2>
                <p class="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                <a href="index.html" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Start Shopping</a>
            </div>
        `;
        orderSummaryContainer.innerHTML = emptyCartHtml;
        return; // Exit the function if cart is empty
    }

    let cartsummaryHTML = ''; // Renamed for clarity

    cart.forEach((item) => {
        const productId = item.productId;
        // Use find for cleaner product matching
        const mactchproduct = products.find(product => product.id === productId);

        if (!mactchproduct) {
            console.warn(`Product with ID ${productId} not found in productsdata. Skipping item.`);
            return; // Skip this item if no product data is found
        }

        const itemQuantity = item.quantity;

        // --- START: Dynamic Delivery Options for this product ---
        let deliveryhtml = '';
        deliveryOptions.forEach((option) => {
            
            const today = dayjs();
            const deliveryDate = today.add(option.deliverydays, 'days');
            const datestring = deliveryDate.format('dddd, MMMM D'); // e.g., "Tuesday, July 20"
            const dayName = deliveryDate.format('dddd'); // e.g., "Tuesday"

            const pricestring = option.pricecents === 0 ? 'FREE' : option.pricecents;

            // Set the first option as checked by default for each product
            const isChecked = option.id === '1' ? 'checked' : '';

            deliveryhtml += `
                <label class="flex items-center border border-gray-200 rounded p-2 mb-2 cursor-pointer hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50">
                    <input type="radio" name="deliveryOption-${mactchproduct.id}" value="${option.id}" class="hidden peer" ${isChecked}>
                    <span class="w-4 h-4 border-2 border-gray-300 rounded-full mr-2 relative peer-checked:border-blue-400 peer-checked:after:content-[''] peer-checked:after:bg-blue-400 peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:transform peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2"></span>
                    <span class="ml-3">${datestring}</span>
                    <span class="text-sm font-medium text-green-500 ml-auto">${pricestring}</span>
                </label>
            `;
        });
        // --- END: Dynamic Delivery Options for this product ---


        cartsummaryHTML += `
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
                            <div class="bg-white p-4 mt-3 sm:mt-0 w-full">
                                <h2 class="text-center text-gray-800 mb-3 text-lg font-medium">Choose Delivery</h2>
                                ${deliveryhtml}
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        `;
    });

    orderSummaryContainer.innerHTML = cartsummaryHTML;

    // Attach event listeners after HTML is rendered
    attachEventListeners();
}

function attachEventListeners() {
    document.querySelectorAll('.remove-cart-item').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removefromcart(productId);
            renderCheckoutPage(); // Re-render the entire page to reflect changes

            let removedName = 'Unknown Product';
            const removedProduct = products.find(product => product.id === productId);
            if (removedProduct) {
                removedName = removedProduct.name;
            }

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
            const productId = button.dataset.productId;
            const quantityElement = button.closest('div').querySelector('.actual-increase');
            let currentQuantity = parseInt(quantityElement.innerHTML);

            currentQuantity += 1;
            quantityElement.innerHTML = currentQuantity;

            updateQuantity(productId, currentQuantity);
        });
    });

    document.querySelectorAll('.item-decrease').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const quantityElement = button.closest('div').querySelector('.actual-increase');
            let currentQuantity = parseInt(quantityElement.innerHTML);

            if (currentQuantity > 1) {
                currentQuantity -= 1;
                quantityElement.innerHTML = currentQuantity;
                updateQuantity(productId, currentQuantity);
            }
        });
    });

    // You might also want to add event listeners for the delivery options radio buttons
    // if you plan to save the selected delivery option to the cart.
    // Example (simplified):
    document.querySelectorAll(`input[type="radio"][name^="deliveryOption-"]`).forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const productId = event.target.dataset.productId;
            const selectedOptionId = event.target.value;
            console.log(`Product ${productId}: Selected delivery option ${selectedOptionId}`);
            // Here you would typically save this selection to your cart data in localStorage
            // e.g., updateCartDeliveryOption(productId, selectedOptionId);
        });
    });
}

// Initial render when the page loads
renderCheckoutPage();

console.log(cart);