<template>
  <div class="container">
    <van-uploader :after-read="afterRead" accept="image/jpeg,image/png" multiple>
      <img class="showImg" ref="pre" src="./cry.jpg" alt="">
    </van-uploader>

  </div>
</template>

<script>
  import {
    Uploader
  } from 'vant';

  export default {
    data() {
      return {
        fileList: ""
      }
    },
    methods: {
      afterRead(file) {
        console.log(file.content)
        this.$refs.pre.src = file.content;
        this.fileList = file.content.replace(/^data:image\/\w+;base64,/, ''); //replace消除前缀，获取完整的base64码
      }
    }
  }

</script>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .van-uploader {
    width: 200px;
    height: 200px;
  }

  .showImg {
    width: 200px;
    height: 200px;
    ;
  }

</style>
