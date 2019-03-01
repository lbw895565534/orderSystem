<template>
    <!-- <div> -->
    <!-- <img src="@/assets/img/icon/music.png" alt="" @click="bf()" style="z-index:999;position: fixed;float:right;margin-right: 20px;margin-top: 20px;"> -->
    <transition enter-active-class="animated bounceInDown">
        <swiper :options="swiperOption" ref="mySwiper">
            <audio id="music1" :src="require('@/assets/music/bg.mp3')" style="display:none;" autoplay="autoplay" loop="loop"></audio>
            <img :class="{play:isplay}" src="@/assets/img/icon/music.png" alt="" @click="bf()" style="z-index:999;position: fixed;float:right;margin-left: 20px;margin-top: 20px;">
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 0" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 0" class="title">茂名站</span>
                            </transition>
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 0" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div class="content">
                        <div class="c1">
                            <img class="img1 center " src="@/assets/img/swiper/items/1.jpg" alt="">
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-show="flag == 0" class="span1 center">
                                    2018年茂名站以习近平新时代中国特色社会主义思想为指导，坚持以高铁、客车安全为红线和底线，聚焦在交通强国、铁路先行新征程中当尖兵当先锋。
                                </span>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 1" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 1" class="title">大变化</span>
                            </transition>
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 1" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div class="info">
                        <div class="container center">
                            <span class="span1">
                                <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                                    <div v-if="flag == 1"> 2018年7月1日，茂名站高铁正式开通，宣告了茂名开始迈入高铁时代</div>
                                </transition>
                            </span>
                        </div>
                    </div>
                    <div class="content center">
                        <div class="c1">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 1" src="@/assets/img/swiper/items/2.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 1" src="@/assets/img/swiper/items/3.jpg" alt="">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top"></div>
                    <div class="content center">
                        <div class="c1">
                            <img src="@/assets/img/swiper/items/4.jpg" alt="" class="img1" height="">
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span class="span2" v-if="flag == 2">
                                    客流量猛力增长，客运收入直线上涨，工作量负荷大增。2018年车站在人员不足的情况，克服困难，创造出全段最高劳动生产效率。在年度工资奖励中，职工收入呈两位数的百分点增长。
                                </span>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 3" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 3" class="title">坚持初心</span>
                            </transition>
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceInLeft">
                                <hr v-if="flag == 3" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div class="info">
                        <div class="container center">
                            <span class="span1">
                                <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                                    <div v-if="flag == 3">从量变到质变，我们初心不变</div>
                                </transition>
                            </span>

                        </div>
                    </div>
                    <div class="content">
                        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                            <img class="img2" v-if="flag == 3" src="@/assets/img/swiper/items/5.jpg" alt="">
                        </transition>
                        <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                            <img class="img3" v-if="flag == 3" src="@/assets/img/swiper/items/6.jpg" alt="">
                        </transition>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top"></div>
                    <div class="content">
                        <div class="c1">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <img class="img4" v-if="flag == 4" src="@/assets/img/swiper/items/7.jpg" alt="">
                            </transition>
                        </div>
                        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                            <hr v-if="flag == 4" style="height: 2px;width: 12rem;margin: 10px 0 0 20px;background: #426ed0;size: 2px;">
                        </transition>
                    </div>
                    <div class="c2 center">
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                            <img class="img5 " v-if="flag == 4" src="@/assets/img/swiper/items/8.jpg" alt="" style="margin-top:20px;">
                        </transition>
                    </div>

                </div>
            </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 5" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 5" class="title">与时俱进</span>
                            </transition>
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceInLeft">
                                <hr v-if="flag == 5" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div class="content">
                        <div class="c3">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <img class="img6" v-if="flag == 5" src="@/assets/img/swiper/items/9.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c4">
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                                <img class="img7" v-if="flag == 5" src="@/assets/img/swiper/items/10.jpg" alt="" width="16rem">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 6" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 6" class="title">加强学习</span>
                            </transition>
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceInLeft">
                                <hr v-if="flag == 6" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div class="intro">
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                            <span class="span2" v-if="flag == 6">
                                茂名站从普铁迈入了高铁，成为了高普共存的车站。原有的业务和职工服务水平已满足不了。车站通过外出学习、模拟演练等进行教育培训。
                            </span>
                        </transition>
                    </div>
                    <div class="content">
                        <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                            <div class="c1 center" style="margin-top: 20px;" v-if="flag == 6">
                                <img src="@/assets/img/swiper/items/11.jpg" alt="" class="img1">
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="blank"></div>
                    <div class="intro" margin-top="20px">
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated faOut">
                            <span v-if="flag == 7" class="span2">
                                车站从2017年12月上旬起组织行车人员分批到永州站、东莞东站、湖南高速铁路职业技术学院等地方进行跟班学习和专门培训。
                            </span>
                        </transition>
                    </div>
                    <div class="content">
                        <div class="c3">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <img class="img7" v-if="flag == 7" src="@/assets/img/swiper/items/12.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c4">
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                                <img class="img7" v-if="flag == 7" src="@/assets/img/swiper/items/13.jpg" alt="" width="16rem">
                            </transition>
                        </div>
                    </div>
                </div>

            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="blank"></div>
                    <div class="intro" margin-top="20px">
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated faOut">
                            <span v-if="flag == 8" class="span2">
                                车站组织职工利用休班职工进行操作演练，演练一次就点评一次，一个情形反复练习，直至熟练掌握。除此之外，还通过集中学习进行讲解，确保高铁开行的安全。
                            </span>
                        </transition>
                    </div>
                    <div class="content">
                        <div class="c3">
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
                                <img class="img6" v-if="flag == 8" src="@/assets/img/swiper/items/14.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c4">
                            <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                                <img class="img7" v-if="flag == 8" src="@/assets/img/swiper/items/15.jpg" alt="" width="16rem">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="blank"></div>
                    <div class="content center">
                        <div class="intro" margin-top="20px">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated faOut">
                                <span v-if="flag == 9" class="span2">
                                    2018年是车站客运人员变动较大，针对转岗职工多、新入路的职工多、校企实习生多的三多特点，车站每月开设了客运服务礼仪培训班，通过培训客运服务技巧、学习如何与旅客沟通、训练岗位服务姿势、制定文明宣传用语等办法，有效地提升了客运职工的服务水平。
                                </span>
                            </transition>
                        </div>
                        <div class="c5">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated faOut">
                                <img v-if="flag == 9" src="@/assets/img/swiper/items/16.jpg" alt="" class="img1" height="">
                            </transition>
                        </div>

                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 10" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 10" class="title">丰富业余</span>
                            </transition>
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 10" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div class="info">
                        <div class="container center">
                            <span class="span1">
                                <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                                    <div v-if="flag == 10">
                                        切实关心职工生活，确保职工队伍稳定
                                    </div>
                                </transition>
                            </span>
                        </div>
                    </div>
                    <div class="content center">
                        <div class="c1">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 10" src="@/assets/img/swiper/items/17.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 10" src="@/assets/img/swiper/items/18.jpg" alt="">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="little-title">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 11">活动聚餐</span>
                            </transition>
                        </div>
                    </div>
                    <div class="content center">
                        <div class="c1">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 11" src="@/assets/img/swiper/items/19.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 11" src="@/assets/img/swiper/items/20.jpg" alt="">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="little-title">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 12">礼仪表演</span>
                            </transition>
                        </div>
                    </div>
                    <div class="content center">
                        <div class="c1">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 12" src="@/assets/img/swiper/items/21.jpg" alt="">
                            </transition>
                        </div>
                        <div class="c2">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img class="img1" v-if="flag == 12" src="@/assets/img/swiper/items/22.jpg" alt="">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/s1.png" alt="">
                <div class="mask">
                    <div class="top">
                        <div class="container">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 13" width="100%" color="#204fb7" size="1px">
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <span v-if="flag == 13" class="title">新的出发点</span>
                            </transition>
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                                <hr v-if="flag == 13" width="100%" color="#204fb7" size="1px">
                            </transition>
                        </div>
                    </div>
                    <div style="margin-top:20px;width:100%;height:75%;">
                        <div class="container center">
                            <span class="span2">
                                <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="span2" v-if="flag == 13">
                                        2018年已经渐远，成绩已经成为过去。2019年车站将紧紧围绕着铁路总公司、集团公司和车务段的总体工作思路，站在新起点，砥砺前行再出发。
                                    </div>
                                </transition>
                            </span>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img v-if="flag == 13" class="img1" src="@/assets/img/swiper/items/logo.jpg" alt="" style="margin-top:20px">
                            </transition>

                        </div>
                    </div>
                    <div class="footer">
                        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                            <img v-if="flag == 13" class="img8" src="@/assets/img/swiper/items/footer.png" alt="">
                        </transition>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <img class="bg" src="@/assets/img/swiper/bg2.jpg" alt="">
                <div class="content" style="width:100%;height:100%;display:flex;flex-direction: column">
                    <div class="c1" style="height：50%;width:100%;flex:1;display:flex;justify-content: center;align-items: center;">
                        <div class="circle" style="width:11rem;height:11rem;border-radius: 10rem;display:flex;justify-content: center;align-items: center;background:#fff">
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <img v-if="flag == 14" class="headshot" src="@/assets/img/swiper/items/23.jpg" alt="">
                            </transition>
                        </div>
                    </div>
                    <div class="c2" style="height：50%;width:100%;flex:1;display:flex;">
                        <div class="list" style="width:100%;height: 50%;background:#ffffff94;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceInRight">
                                <div v-if="flag==14" style="display:flex;flex-direction: column;justify-content: center;align-items: center;">
                                    <span class="name">
                                        采集：邓荣运
                                    </span>
                                    <span class="name">
                                        编辑：李炳文
                                    </span>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </swiper>
    </transition>

</template>

<script>
    // swiper options example:
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
   
    export default {
        name: 'carrousel',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            const self = this
            return {
                flag: 0,
                isplay: "",
                swiperOption: {
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    loop: false,
                    direction: 'vertical',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    scrollbar: '.swiper-scrollbar',//滚动条
                    mousewheelControl: true,
                    observeParents: true,
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    debugger: true,
                    on: {
                        slideChangeTransitionEnd: function () {
                            self.flag = this.activeIndex;
                        },
                    },
                }
            }
        },
        methods: {
            bf() {
                var audio = document.getElementById('music1');
                if (audio !== null) {
                    if (audio.paused) {
                        audio.play();//audio.play();// 这个就是播放  
                        this.isplay = true;
                    } else {
                        audio.pause();// 这个就是暂停
                        this.isplay = false;
                    }
                }
            },
            play() {
                var audio = document.getElementById('music1');
                audio.play();//audio.play();// 这个就是播放  
                this.isplay = true;
            }
        },
        activated() {
            var audio = document.getElementById('music1');
            audio.play();//audio.play();// 这个就是播放  
            this.isplay = true;
        },
    }
</script>
<style scoped>
    * {
        animation-delay: 0.2s;
    }

    img {
        animation-delay: 1s;
    }

    .swiper-container {
        width: 100%!important;
        height: 100%!important;
    }

    .swiper-slide {
        width: 100%!important;
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
        overflow: hidden;
    }

    .top {
        width: 100%;
        height: 10%;
        padding-top: 20px;
        text-align: center;
    }

    .blank {
        height: 5%;
    }

    .info {
        width: 100%;
    }

    .intro {
        width: 90%;
        margin: auto;
    }

    .footer {
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

    .little-title {
        font-size: 1.5rem;
        text-align: center;
        color: #676767;
    }

    .c1 {
        margin-top: 10px;
    }

    .c2 {
        width: 18rem;
        margin: auto;
        margin-top: 10px;
    }

    .c3 {
        margin-top: 10px;
        padding-left: 10px;

    }

    .c4 {
        margin: auto;
        margin-top: 10px;
        text-align: right;
        padding-right: 10px;
    }

    .c5 {
        width: 90%;
        position: relative;
        bottom: 0;
        margin: 10px auto;
    }

    .img1 {
        width: 18rem;
    }

    .img2 {
        width: 10rem;
        margin-left: 10px;
        position: relative;
        top: 10px;
    }

    .img3 {
        width: 10rem;
        position: relative;
        top: 12rem;
    }

    .img4 {
        width: 10rem;
        margin-left: 30px;
    }

    .img5 {
        width: 20rem;
    }

    .img6 {
        width: 15rem;
    }

    .img7 {
        width: 16rem;
    }

    .img8 {
        width: 14rem;
        height: 24px;
    }

    .headshot {
        width: 10rem;
        border-radius: 10rem;
        justify-content: center;
        align-items: center;
    }

    .span1 {
        width: 18rem;
        height: auto;
        font-size: 1.2rem;
        font-weight: bold;
        color: #426ed0;
        line-height: 1.8rem;
    }

    .span2 {
        width: 18rem;
        width: 90%;
        font-size: 1.2rem;
        color: #666;
        line-height: 1.8rem;
        margin: auto;
    }

    .span3 {
        width: 18rem;
        height: auto;
        font-size: 1.5rem;
        color: #426ed0;
        line-height: 1.8rem;
    }

    .headshot {
        animation-delay: 0.2s;
    }

    .name {
        font-size: 1.2rem;
        margin: 5px;
        animation-delay: 1s;
    }

    .center {
        display: block;
        margin: auto;
        text-align: center;
    }

    .play {
        animation: changDeg 2s linear 0.2s infinite;
    }

    @keyframes changDeg {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>