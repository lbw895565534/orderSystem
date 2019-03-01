<template>
  <div class="container">
    <img src="@/assets/img/bg_login.jpg" alt="" class="bg">
    <div class="title">
      <span>名单</span>
    </div>
    <div class="list">
      <van-row style="width: 100%;
        position: fixed;font-weight:bold">
        <van-col span="6" style="background: #FF9800;">姓名</van-col>
        <van-col span="6" style="background: #FFC107;">部门</van-col>
        <van-col span="6" style="background: #FFC107;">班组</van-col>
        <van-col span="6" style="background: #FFC107;">密码</van-col>
      </van-row>
      <div v-for="(user,index) in users">
        <van-row>
          <van-col span="6" style="background: #FF9800;">{{user.name}}</van-col>
          <van-col span="6" style="background: #FFC107;">{{user.section}}
            <!-- <img src="@/assets/img/icon/uparrow.svg" class="selectImg" v-if="!user.selected">
            <img src="@/assets/img/icon/downnarrow.svg" class="selectImg" v-if="user.selected">
            <van-actionsheet v-model="show" :actions="actions" @select="onSelect" /> -->
          </van-col>
          <van-col span="6" style="background: #FFC107;">{{user.term}}</van-col>
          <van-col span="6" style="background: #FFC107;">{{user.password}}</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'Axios';
  import {
    Row, Col, Actionsheet
  } from 'vant';
  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      axios.get('http://119.23.189.182:80/users/queryAll', {
      }).then(res => {
        this.users = res.data;
        this.users.forEach(n => {
          n.selected = false;
          switch (n.section) {
            case "gl":
              n.section = "管理";
              break;
            case "ht":
              n.section = "其他";
              break;
            case "pf":
              n.section = "票房";
              break;
            case "yz":
              n.section = "运转";
              break;
            case "ky":
              n.section = "客运";
              break;
            case "sxs":
              n.section = "实习生";
              break;
            case "zq":
              n.section = "助勤";
              break;
            default:
              break;
          }
        });
        console.log(res.data)
      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      })
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    z-index: -1;
  }

  .title {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title span {
    line-height: 100px;
    font-size: 48px;
    font-family: cursive;
  }

  .list {
    width: 100%;
    overflow: scroll;
    position: absolute;
    top: 100px;
    bottom: 0;
    text-align: center;
    background: #FFC107;
  }

  .selectImg {
    vertical-align: middle;
    width: 20px;
  }
</style>