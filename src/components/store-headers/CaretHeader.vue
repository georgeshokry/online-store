<template functional>
    <div class="pt-3 pr-3 pl-3">
        <p class="h3 text-center store-header__title">
            Shopping Cart
        </p>
        <hr>
    </div>
</template>
<style scoped>
.store-header__title{
    font-family: 'Blinker', sans-serif;
}
.store-header__sub-title{
    color: #F2AB5A;
}
.store-header__sub-title-container p::before {
    content: '==';
    color: black;
}
.store-header__sub-title-container p::after {
    content: '==';
    color: black;
}
</style>
