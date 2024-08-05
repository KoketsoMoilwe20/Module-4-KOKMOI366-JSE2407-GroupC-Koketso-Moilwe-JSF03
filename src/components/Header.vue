<template>
    <header>
        <nav>

            <div>
                <a href="/" class="logo">
                    <img src="/online-shop.png">
                    <span>SwiftCart</span>
                </a>

                <button>
                    <span>Open main menu</span>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div>
                    <ul>
                        <li>
                            <a href="#" class="nav-link">Wishlist</a>
                        </li>
                        <li class="nav-item relative">
                            <div class="notification">
                                 <span class="badge">2</span>
                            </div>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                            </svg>
                     </li>
                    <li class="nav-link mobile-only">
                        Cart
                    </li>
                    <li>
                        <a href="login" class="nav-link">Login</a>
                    </li>
                    </ul>
                </div>


                    
                

            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                isNavbarOpen: false,
            };
        },
        methods: {
            toggleNavbar() {
                this.isNavbarOpen = !this.isNavbarOpen;
            },
        },
    };
</script>