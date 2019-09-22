<template>
  <div class="cantainer">
    <img class="bg" src="@/assets/etc/lovebg.jpg" alt="">

    <div class="box">
      <div></div>
    </div>
    <van-popup class="center" v-model="show1" position="top" :style="{ height: '10%' }">家务全包</van-popup>
    <van-popup class="center" v-model="show2" position="bottom" :style="{ height: '10%' }">工资上交</van-popup>
    <van-popup class="center writetb" v-model="show3" position="left" :style="{ width: '20%', height: '100%' }">保大
    </van-popup>
    <van-popup class="center writetb" v-model="show4" position="right" :style="{ width: '20%', height: '100%' }">我妈会游泳
    </van-popup>
    <van-popup v-model="show" class="" style="background: #f0f8ff03;height: 250px;width: 250px;overflow: hidden;">
      <img class="bg animated flip" src="@/assets/etc/jugaogao.jpg" alt="" style="height: 250px;width: 250px;">

    </van-popup>
  </div>

</template>

<script>
  import {
    Dialog,
    Popup,
    Toast
  } from 'vant';
  export default {

    data() {
      return {
        refuse: 0,
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      }
    },
    mounted() {
      this.tanchu();
    },
    methods: {
      tanchu() {
        Dialog.confirm({
          title: '这是一个表白',
          message: '做我的女朋友',
          confirmButtonText: '答应',
          cancelButtonText: '拒绝',
        }).then(() => {
          this.show = true;
        }).catch(() => {
          this.refuse == 4 ? this.refuse = 1 : this.refuse++;
          this.tanchu()
        });
      }
    },
    watch: {
      refuse(val) {
        switch (val) {
          case 1:
            this.show4 = false;
            this.show1 = true;
            break;
          case 2:
            this.show1 = false;
            this.show2 = true;
            break;
          case 3:
            this.show2 = false;
            this.show3 = true;
            break;
          case 4:
            this.show3 = false;
            this.show4 = true;
            break;

        }
      }
    },
  }

</script>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .cantainer .bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .animated {
    animation-duration: 2s;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #f1f1f1;
    background: #ff9191;
  }
  .writetb {
    writing-mode: tb
  }

</style>
