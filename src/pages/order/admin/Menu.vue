<template>
  <div class="container">
    <div class="menu">
      <div class="item">
        <router-link to="OAdd">
          <img src="@/assets/img/icon/tianjia.png" alt="">
          <span>添加</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="ORemove">
          <img src="@/assets/img/icon/shanchu.png" alt="">
          <span>删除</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="ORemove">
          <img src="@/assets/img/icon/zhaohui.png" alt="">
          <span>找回</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="ONotice">
          <img src="@/assets/img/icon/tongzhi.png" alt="">
          <span>通知</span>
        </router-link>
      </div>
    </div>    
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
        show: false,
      }
    },
    methods: {
      to() {
        this.show = true;
      }
    }
  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .van-popup {
    width: 100%;
    height: 100%;

  }

  .box {
    width: 100%;
    height: 100%;
  }

  .menu {
    width: 100%;
    height: 100%;
    position: fixed;
    display: inline-table;
    text-align: center;
  }

  .item {
    position: relative;
    width: 49%;
    height: 150px;
    display: inline-block;
  }

  .item>a {
    margin: 35px 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    display: block;

  }

  .item>a>img {
    display: block;
    margin: auto;
  }

  .item>a>span {
    display: block;
    text-align: center;
  }

</style>
