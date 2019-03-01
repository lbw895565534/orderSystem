<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" @click="flag=!flag">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <!-- <transition enter-active-class="animated swing" leave-active-class="animated bounceOutDown">
                        <img v-if="flag" class="logo" src="@/assets/img/swiper/items/logo.jpg" alt="">
                </transition> -->
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag" width="100%" color="#000" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag" class="title">茂名站</span>
                            </transition>
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag" width="100%" color="#000" size="1px">
                            </transition>
                        </div>

                    </div>
                    <div class="content">
                        <div class="c1">
                            <img  class="img1 center " src="@/assets/img/swiper/items/1.jpg" alt="">
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag" class="span1 center">
                                    2018年茂名站以习近平新时代中国特色社会主义思想为指导，坚持以高铁、客车安全为红线和底线，聚焦在交通强国、铁路先行新征程中当尖兵当先锋。
                                </span>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.jpg" alt="">
                <div class="mask">

                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.jpg" alt="">
                <div class="mask">

                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.jpg" alt="">
                <div class="mask">

                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.jpg" alt="">
                <div class="mask">

                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.jpg" alt="">
                <div class="mask">

                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data() {
            return {
                flag: true
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: false,
                loop: true
            })
        }
    }
</script>
<style scoped>
    .swiper-container {
        width: 100%!important;
        height: 100%!important;
    }

    .swiper-slide {
        width: 100%!important;
        height: 100%!important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }

    .mask {
        width: 90%;
        height: 90%;
        background: #ffffffe0;
    }

    .top {
        width: 100%;
        height: 10%;
        padding-top: 20px;
        text-align: center;
    }

    .container {
        display: inline-block
    }

    .title {
        font-size: 1.8rem;
        text-align: center;
        font-weight: bold;
        color: #204fb7;
    }

    .c2 {
        margin-top: 50px;
    }


    .img1 {
        width: 18rem;
    }

    .span1 {
        width: 18rem;
        height: auto;
        font-size: 1.2rem;
        font-weight: bold;
        color: #426ed0;
        line-height: 1.8rem;
    }

    .center {
        display: block;
        margin: auto;
    }
</style>