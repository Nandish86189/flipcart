
// function for initial display and making it has toogle function  first internal storage

export function show(){
     let show=document.getElementById('closing');

    let man=document.getElementById('closing all');

    let make=document.getElementById('roter');


    show.addEventListener('click',()=>{

      if( man.style.display=='block'){
          man.style.display='none';

          make.classList.remove('rotate-180');
      }

      else{
          man.style.display='block';
          make.classList.add('rotate-180');

      }
    });
}



let productshtml='';

products.forEach((product) => {

    const colorCircles = product.colors.map(color =>
    `<div class="rounded-full w-8 h-8 cursor-pointer border border-transparent hover:border-blue-500"
          style="background-color: ${color}"
          title="${color}"></div>`
  ).join('');

  productshtml+=`
    <div class="group flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-700 transition-transform duration-300 hover:scale-105 ">
      <div class="w-full md:w-1/2 h-56 md:h-auto flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="hover:cursor-pointer object-contain w-full h-full">
      </div>

      <div class="p-3 leading-8 md:leading-6 flex flex-col justify-between md:w-1/2">
        <div>
          <p class="group-hover:text-blue-600 text-lg font-semibold hover:cursor-pointer">
            ${product.name}
          </p>

          <div class="flex items-center mt-2">
            <div class="bg-green-700 flex items-center rounded-md w-fit pr-2">
              <p class="px-2 text-white">${product.rating}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 stroke-green-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <p class="ml-2 text-gray-700">(${product.review})</p>
          </div>

          <p class="text-2xl font-bold mt-2">₹ ${product.price.dprice.toLocaleString('en-US')}</p>
          <p class="text-xl line-through text-gray-500">₹ ${product.price.oprice.toLocaleString('en-US')}</p>

          <p class="text-green-800 mt-2">Offer on deal:</p>
          <p class="text-green-700">${product.offer.poffer} % off <span class="md:block hidden">and upto ${product.offer.moffer} off on old mobiles</span></p>

          <p class="mt-3 hidden md:block text-gray-600">Available in variant colors</p>
          <div class="hidden md:block mt-2">
            <div class="flex space-x-3">
              ${colorCircles}
            </div>
          </div>
        </div>
        <p class="lg:block hidden text-sm bg-green-700 w-fit py-1 text-white mt-1 px-1 hover:cursor-pointer">About product >></p>

        <div class="hidden md:block">
          <button class="bg-orange-400/90 text-black rounded px-5 py-2 text-sm font-bold cursor-pointer flex items-center gap-2 w-fit mt-2 add-to-cart" data-product-id="${product.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="stroke-white">
              <path d="M4 4l-1 6v12h18V10l-1-6H4zm1 0h14" stroke-width="2" />
              <path d="M8 10a4 4 0 1 0 8 0" stroke-width="2" />
            </svg>
            <span class="text-white">ADD TO CART</span>
          </button>
          <button class="bg-orange-500/90 text-white rounded px-5 py-2.5 text-sm font-bold cursor-pointer mt-1.5">
            <span class="text-white"> BUY NOW</span>
          </button>
        </div>
      </div>
    </div>`;
});

  // console.log(productshtml);

document.querySelector('.js-products-display').innerHTML=productshtml;

document.querySelectorAll('.add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{ 

    const productId=button.dataset.productId;

    let matchingitem;


    //chaecking if product is the cart and updating the cart quantity value

    cart.forEach((item)=>{

      if(item.productId===productId){
        matchingitem=item;
      }
    });


      if(matchingitem){
            matchingitem.quantity+=1;
          }  

          else{
          cart.push({
          productId:productId,
          quantity:1
        });

          }

          let cartquantity=0;

          cart.forEach((item)=>{
            cartquantity+=item.quantity;

          })


// updating cart value at cart svg

document.querySelector('.cart-quantity').innerHTML=cartquantity;  

console.log(cartquantity);
console.log(cart);


    
  });

});