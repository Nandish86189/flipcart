import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { cart, removefromcart, saveCart, updateQuantity } from "./cart.js";
import { products } from "./productsdata.js"; 
import { deliveryOptions } from './deliveryoption.js'; 

const ordersummarycontainer = document.querySelector('.order-summary');


// just like refreshing the page when ever we keep interacting with page 

export function rerender() {
    if (cart.length === 0) {
        const emptycarthtml = `
            <div class="text-center py-8 ">
                <h2 class="text-xl font-semibold text-gray-700 mb-2">Your Cart is Empty!</h2>
                <p class="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                <a href="index.html" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Start Shopping</a>
            </div>
        `;
        ordersummarycontainer.innerHTML = emptycarthtml;
        renderpaymentsummary(); 
        return;
    }

    let cartsummary = '';


    cart.forEach((item) => {                                             //checks the each item in cart saves produt id 
        const productid = item.productId;
        let matchedproduct; 

        matchedproduct = products.find(product => product.id === productid);        //compare with actual products id 

        if (!matchedproduct) {
            console.warn(`Product with ID ${productid} not found in products data. Skipping.`);
            return;
        }

        const itemquantity = item.quantity;                               

        const selecteddeliveryoption = deliveryOptions.find(option => option.id === item.deliveryOptionId); 
        const datestring = selecteddeliveryoption
            ? dayjs().add(selecteddeliveryoption.deliverydays, 'days').format('dddd, MMMM D')
            : 'Select a delivery option';

        let deliveryhtml = '';
        deliveryOptions.forEach((option) => {
            const today = dayjs();
            const deliverydate = today.add(option.deliverydays, 'days');
            const optiondatestring = deliverydate.format('dddd, MMMM D');
            const pricestring = option.pricecents === 0 ? 'FREE' : `₹${option.pricecents.toFixed(2)}`;

            const ischecked = item.deliveryOptionId === option.id ? 'checked' : ''; 

            deliveryhtml += `
                <label class="flex items-center border border-gray-200 rounded p-2 mb-2 cursor-pointer hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50 delivery-option" data-product-id="${matchedproduct.id}" data-delivery-option-id="${option.id}">
                    <input type="radio" name="deliveryOption-${matchedproduct.id}" value="${option.id}" class="hidden peer" ${ischecked}>
                    <span class="w-4 h-4 border-2 border-gray-300 rounded-full mr-2 relative peer-checked:border-blue-400 peer-checked:after:content-[''] peer-checked:after:bg-blue-400 peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:transform peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2"></span>
                    <span class="ml-3">${optiondatestring}</span>
                    <span class="text-sm font-medium text-green-600 ml-auto">${pricestring}</span>
                </label>
            `;
        });

        cartsummary += `
            <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
                <div class="bg-white p-4 shadow-sm rounded-sm cart-item-${matchedproduct.id}">
                    <div class="text-green-600 font-medium mb-2">Delivery date: ${datestring}</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 items-start">
                        <div class="flex flex-col">
                            <div class="flex flex-col sm:flex-row items-start border-b pb-4 sm:border-b-0 sm:pb-0">
                                <img src="${matchedproduct.image || 'path/to/default-image.jpg'}" alt="${matchedproduct.name}" class="w-24 h-24 object-contain mr-4 mb-2 sm:mb-0">
                                <div class="flex-1">
                                    <h3 class="font-medium text-gray-800">${matchedproduct.name}</h3>
                                    <p class="text-gray-500 small-text">${matchedproduct.ram ? matchedproduct.ram + ' GB RAM' : ''}</p>
                                    <p class="text-gray-500 small-text mt-1">Seller: ${matchedproduct.seller || 'Unknown Seller'} <span class="inline-flex items-center text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 ml-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>Assured</span></p>
                                    <div class="flex items-center mt-2">
                                        <span class="text-gray-900 font-semibold text-base">₹${matchedproduct.price.dprice.toFixed(2)}</span>
                                        <span class="text-gray-500 line-through text-sm ml-6 small-text">₹${matchedproduct.price.oprice.toFixed(2)}</span>
                                        <span class="text-green-600 text-sm font-medium ml-6 small-text">${matchedproduct.offer.poffer}% Off</span>
                                        <button class="text-blue-600 text-sm ml-2 hover:underline small-text">${matchedproduct.offer.moffer} offers available <span class="inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></span></button>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between mt-4">
                                <div class="flex items-center space-x-2">
                                    <button class="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg font-medium text-gray-600 item-decrease" data-product-id="${matchedproduct.id}">-</button>
                                    <span class="border border-gray-300 px-3 py-1 rounded text-sm actual-increase">${itemquantity}</span>
                                    <button class="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg font-medium text-gray-600 item-increase" data-product-id="${matchedproduct.id}">+</button>
                                </div>
                                <div class="flex space-x-4 text-sm font-semibold">
                                    <button class="text-gray-700 hover:text-blue-600 small-text remove-cart-item" data-product-id=${matchedproduct.id}>REMOVE</button>
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

    ordersummarycontainer.innerHTML = cartsummary;

    attacheventlisteners();
    renderpaymentsummary();
}

function attacheventlisteners() {
    document.querySelectorAll('.remove-cart-item').forEach((link) => {             
        link.addEventListener('click', () => {
            const productid = link.dataset.productId;
            removefromcart(productid);
            rerender(); 
        });
    });

    document.querySelectorAll('.item-increase').forEach((button) => {
        button.addEventListener('click', () => {
            const productid = button.dataset.productId;
            const cartitem = cart.find(item => item.productId === productid);      //item in the cart == to the increamnting quantity then quantity is increased 
            if (cartitem) {
                const newquantity = cartitem.quantity + 1;
                updateQuantity(productid, newquantity);
                rerender(); 
            }
        });
    });

    document.querySelectorAll('.item-decrease').forEach((button) => {
        button.addEventListener('click', () => {
            const productid = button.dataset.productId;
            const cartitem = cart.find(item => item.productId === productid);
            if (cartitem && cartitem.quantity > 1) {
                const newquantity = cartitem.quantity - 1;
                updateQuantity(productid, newquantity);
                rerender();
            } else if (cartitem && cartitem.quantity === 1) {
                removefromcart(productid);
                rerender();
            }
        });
    });

    document.querySelectorAll('.delivery-option').forEach((element) => {
        element.querySelector('input[type="radio"]').addEventListener('change', (event) => {    //takes the prooductid that has been changed and send to function
            const productid = element.dataset.productId;      //takes present product id 
            const deliveryoptionid = event.target.value;      
            updatedeliveryoption(productid, deliveryoptionid);
            rerender(); 
        });
    });
}

function updatedeliveryoption(productid, deliveryoptionid) {
    let matchingitem;

    matchingitem = cart.find(item => item.productId === productid);          

    if (matchingitem) {
        matchingitem.deliveryOptionId = deliveryoptionid;           //compare with cart and updates its delivery option id
        saveCart(); 
    } else {
        console.warn(`Attempted to update delivery option for product ID "${productid}", but it was not found in cart.`);
    }
}

function renderpaymentsummary() {
    let totalproductsprice = 0;
    let totalshippingprice = 0;
    let totalitems = 0;
    let savings = 0; 

    cart.forEach((item) => {
        const productid = item.productId;
        let matchedproduct;

        matchedproduct = products.find(product => product.id === productid);

        if (!matchedproduct) {
            console.warn(`Product with ID "${productid}" not found. Skipping calculation for this cart item.`);
            return;
        }

        totalproductsprice += matchedproduct.price.dprice * item.quantity;
        savings += (matchedproduct.price.oprice - matchedproduct.price.dprice) * item.quantity; 
        totalitems += item.quantity;

        const chosendeliveryoptionid = item.deliveryOptionId;
        let matcheddeliveryoption;

        if (chosendeliveryoptionid) {
            matcheddeliveryoption = deliveryOptions.find(option => option.id === chosendeliveryoptionid);  //cjheks with original deliveryoption id and if matches updates the shippng price
        }

        if (matcheddeliveryoption) {
            totalshippingprice += matcheddeliveryoption.pricecents;
        } else {
            console.warn(`No delivery option found for ID "${chosendeliveryoptionid}" for product "${productid}". Shipping cost not added.`);
        }
    });

    const grandtotalbeforetax = totalproductsprice + totalshippingprice;
    const estimatedtax = grandtotalbeforetax * 0.1; 
    let ordertotal = grandtotalbeforetax + estimatedtax;
    let discount = 0;

    discount = ordertotal * 0.05;

    ordertotal -= discount;
    savings += discount; 

    const paymentsummarydisplay = document.querySelector('.payment-summary-section');
    paymentsummarydisplay.innerHTML = `
        <div class="bg-white p-4 shadow-sm rounded-sm">
            <h2 class="text-lg font-semibold text-gray-700 border-b pb-3 mb-3">PRICE DETAILS</h2>
            <div class="space-y-2 text-gray-700">
                <div class="flex justify-between items-center">
                    <span>Price (${totalitems} items) <span class="text-gray-400 text-xs ml-1">(?)</span></span>
                    <span>₹ ${totalproductsprice.toFixed(2)}</span>
                </div>

                <div class="flex justify-between items-center">
                    <span>Shipping and handling fees<span class="text-gray-400 text-xs ml-1">(?)</span></span>
                    <span>₹ ${totalshippingprice.toFixed(2)}</span>
                </div>

                <div class="flex justify-between items-center">
                    <span>Total before tax<span class="text-gray-400 text-xs ml-1">(?)</span></span>
                    <span>₹ ${grandtotalbeforetax.toFixed(2)}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span>Estimated tax (10%)<span class="text-gray-400 text-xs ml-1">(?)</span></span>
                    <span>₹ ${estimatedtax.toFixed(2)}</span>
                </div>

                <div class="flex justify-between items-center text-green-600">
                    <span>Discount (5%)</span>
                    <span>- ₹ ${discount.toFixed(2)}</span>
                </div>
            
                <div class="flex justify-between items-center font-bold text-lg pt-2 border-t mt-2">
                    <span>Total Amount</span>
                    <span>₹${ordertotal.toFixed(2)}</span>
                </div>
            </div>
            <p class="text-green-600 font-semibold text-lg mt-4">You will save ₹${savings.toFixed(2)} on this order</p>
            <P> (Payment will be done in cash or UPI mode only) </P>
        </div> `;
}

rerender();
renderpaymentsummary();