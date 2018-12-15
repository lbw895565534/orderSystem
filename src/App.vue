<template>
  <div id="app">
    <router-view/>
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
}
.van-field span {
  font-size: 20px;
}
.van-field input {
  font-size: 20px;
}
.van-button {
  font-size: 20px;
}
</style>