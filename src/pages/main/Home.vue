<template>
    <div id="container">
        <div class="box">
            <router-link :to="{name: 'OLogin'}">
                <div class="item">
                    <img src="@/assets/order.png" alt="">
                    <span>订餝</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style scoped>
    #container {
        width: 100%;
        height: 100%;
    }
    .box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    img {
        display: block;
    }
    span {
        display: block;
        text-align: center;
    }
    a {
        text-decoration: none;
        font-size: 20px;
    }
</style>