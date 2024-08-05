<template>
    <header>
        <nav>
            <div>
                <button>
                    <img src="/online-shop.png">
                    <span>SwiftCart</span>
                </button>

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