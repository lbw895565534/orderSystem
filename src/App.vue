<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .van-dialog__content {
    height: 64px;
    font-size: 20px;
  }

  .van-field {
    line-height: 64px;
    padding: 0 15px;
    background: #f8f8f8;
    padding-top: 20px;
  }

  .van-field span {
    font-size: 20px;
  }

  .van-field input {
    font-size: 18px;
  }

  .van-button {
    font-size: 18px;
  }

  /* .van-cell {
    line-height: 48px!important;
} */
  .van-dialog__header {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    font-size: 20px !important;
  }

  .van-dialog__content {
    height: auto !important;
    font-size: 20px;
  }

  .van-dialog__footer--buttons {
    flex-direction: row-reverse;
  }

  .van-nav-bar {
    line-height: 56px!important;
    height: 56px!important;
    background-color: #f8f8f8;
    box-shadow: 0 0 5px 2px #ddd;
  }

  .van-cell {
    background-color: #f8f8f8;
  }

  .van-field input {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }

  .van-nav-bar__text,.van-nav-bar__text,.van-nav-bar__title, .van-icon-arrow-left  {
    font-size: 20px!important;
  }



</style>
