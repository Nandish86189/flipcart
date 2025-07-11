import { cart ,removefromcart } from "./cart.js";
import{products} from "./productsdata.js";

let cartsummary = '';

cart.forEach((item) => {
    const productId = item.productId;
    let mactchproduct;

    products.forEach((product) => {
        if (product.id === productId) {
            mactchproduct = product;
        }
    });

    // console.log(mactchproduct);
    cartsummary += `
        <div class="bg-white p-4 shadow-sm rounded-sm cart-item-${mactchproduct.id}">
            <div class="flex flex-col sm:flex-row items-start mb-6 border-b pb-4 last:border-b-0">
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
                    <p class="text-gray-700 text-sm mt-1 small-text">Delivery by ${mactchproduct.date}</p>
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center space-x-2">
                            <button class="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg font-medium text-gray-600">-</button>
                            <span class="border border-gray-300 px-3 py-1 rounded text-sm">1</span>
                            <button class="border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center text-lg font-medium text-gray-600">+</button>
                        </div>
                        <div class="flex space-x-4 text-sm font-semibold">
                            <button class="text-gray-700 hover:text-blue-600 small-text remove-cart-item " data-product-id=${mactchproduct.id}>REMOVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.order-summary').innerHTML = cartsummary;
// console.log(cartsummary);

document.querySelectorAll('.remove-cart-item').forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
        removefromcart(productId);
        // console.log(cart);
        const container=document.querySelector(`.cart-item-${productId}`);
        container.remove();
    });
});


