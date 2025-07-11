// fetching the mobile page location
export function loadthemobile() {
    const f = document.getElementById('mobile');
    if (f) { // Always good to check if the element exists
        f.addEventListener('click', () => {
            window.location.href = './mobile.html';
        });
    }
}

// header section of all pages
// We'll define a base header code that applies to all pages
const baseHeaderCode = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 sm:hidden hover:cursor-pointer header-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <a href="">
        <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" alt="Flipkart" class="h-8 w-auto hover:cursor-pointer" />
    </a>
    
    <div class="hidden sm:flex items-center flex-1 max-w-xl mx-4 search-bar-main">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500 absolute ml-3 hover:cursor-pointer header-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type="search" class="bg-gray-100 w-full h-10 pl-10 rounded-md placeholder:text-gray-500" placeholder="Search for products, brands and more">
    </div>

    <div class="group relative ml-52 remove-at-checkout">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 absolute -ml-6 mb-1 sm:hidden hover:cursor-pointer header-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
        </svg>
        
        <div class="flex items-center px-3 py-1 sm:hover:bg-blue-500 rounded-sm sm:group-hover:py-2 login-back"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:cursor-pointer header-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span class="ml-2 hover:cursor-pointer header-text">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hover:cursor-pointer size-4 hover:scale-110 hidden sm:block ml-2 mt-2 transition-transform duration-300 group-hover:rotate-180 sm:hover:stroke-white sm:size-3 header-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            
            <div class="w-72 h-fit pb-2.5 top-10 hover:shadow-xl hover:shadow-gray-500 bg-white absolute mt-0.5 right-1/4 z-[100] hidden shadow-lg border border-gray-200 md:left-0 md:translate-x0 group-hover:hidden sm:group-hover:block md:group-hover:block lg:group-hover:block">
                <p class="whitespace-pre-wrap text-xl m-[5px] text-black mt-2 ml-4">New customer? <a class="text-blue-500 hover:scale-95 font-bold ml-8 hover:cursor-pointer">Sign Up</a></p>
                <hr class="border-gray-300 mt-3" />
                <div class="flex flex-col justify-between items-start">
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">My Profile</p>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Flipkart Plus Zone</p>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Orders</p>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Wishlist</p>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Rewards</p>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Gift Cards</p>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="./checkout.html" class="remove-at-checkout">
        <div class="flex items-center ml-4 relative hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 -ml-3 sm:-ml-0 header-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span class="hidden md:inline ml-2 header-text">Cart</span>
            <span class="absolute -top-2 sm:ml-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center cart-quantity">0</span>
        </div>
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 relative ml-3 hidden sm:block sm:size-6 header-icon remove-at-checkout">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
    </svg>
    <a href="" class="relative text-xl ml-1 hidden md:block header-text remove-at-checkout">Become a seller</a>

    <div class="relative group hover:cursor-pointer remove-at-checkout">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden sm:block ml-3 hover:ring hover:ring-gray-200 hover:rounded-sm hover:ring-offset-4 hover:bg-gray-100 hover:ring-offset-gray-100 sm:size-5 header-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>

        <div class="w-72 h-fit pb-2.5 hover:shadow-xl hover:shadow-gray-500 bg-white absolute mt-1 right-0 z-[100] hidden shadow-lg border border-gray-200 group-hover:block">
            <div class="flex flex-col justify-between items-start pt-1">
                <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                    <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Notifications Preferences</p>
                </div>
                <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                    <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">24x7 Customer Care</p>
                </div>
                <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                    <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Advertise</p>
                </div>
                <div class="flex items-center hover:bg-gray-100 w-full h-full justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute mr-28 hover:cursor-pointer ml-4 sm:size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <p class="hover:text-blue-500 hover:scale-95 cursor-pointer p-2 ml-12 hover:border-l-[1px] hover:border-gray-500">Download App</p>
                </div>
            </div>
        </div>
    </div>
`;

// Fetching all elements with the class 'top-navigator'
const topNavigators = document.querySelectorAll('.top-navigator');

// Loop through each top-navigator and insert the base header code
topNavigators.forEach(navigator => {
    navigator.insertAdjacentHTML('afterbegin', baseHeaderCode);
});

// Logic for the mobile.html page
if (window.location.pathname.endsWith('/mobile.html')) {
    topNavigators.forEach(navigator => {
        navigator.style.backgroundColor = '#2874f0';

        const svgsToColor = navigator.querySelectorAll('.header-icon');
        svgsToColor.forEach(svg => {
            svg.style.stroke = 'white';
        });

        const textToColor = navigator.querySelectorAll('.header-text');
        textToColor.forEach(text => {
            text.style.color = 'white';
        });

        const loginBack = navigator.querySelector('.login-back');
        if (loginBack) {
            const loginText = loginBack.querySelector('.header-text');
            const loginSvgs = loginBack.querySelectorAll('.header-icon');

            loginBack.addEventListener('mouseenter', () => {
                loginBack.style.backgroundColor = 'white';
                if (loginText) {
                    loginText.style.color = 'black';
                }
                loginSvgs.forEach(svg => {
                    svg.style.stroke = 'black';
                });
            });

            loginBack.addEventListener('mouseleave', () => {
                loginBack.style.backgroundColor = '';
                if (loginText) {
                    loginText.style.color = 'white';
                }
                loginSvgs.forEach(svg => {
                    svg.style.stroke = 'white';
                });
            });
        }
    });
}

// for the checkout page
if (window.location.pathname.endsWith('/checkout.html')) {
    topNavigators.forEach(navigator => {
        // Set background color for the header on checkout page
        navigator.style.backgroundColor = '#2874f0';

        // Hide elements with 'remove-at-checkout'
        const elementsToHide = navigator.querySelectorAll('.remove-at-checkout');
        elementsToHide.forEach(element => {
            element.style.display = 'none';
        });

        // Show and center the search bar
        const searchBar = navigator.querySelector('.search-bar-main');
        if (searchBar) {
            searchBar.style.margin = '0 auto'; // Center it horizontally
            searchBar.style.flexGrow = '1'; // Allow it to take available space
            searchBar.style.maxWidth = '600px'; // Give it a reasonable max-width

        }

       
    });
}