<template>
  <div class="box" @turn="changeStatus()">
    <img src="@/assets/img/bg_login.jpg" alt="" class="bg">
    <div class="box_login box_input1 ">
      <div id="input1" class="input">
        <span class="title">用户删除</span>
      </div>
      <div class="box-input">
        <div id="input2" class="input">
          <div class="border" v-bind:class="{focus:form[0].focus}">
            <div class="box_icon">
              <img src="@/assets/img/icon/name.svg" alt="" class="icon" v-if="!form[0].focus">
              <img src="@/assets/img/icon/name_after.svg" alt="" class="icon" v-if="form[0].focus">
            </div>
            <input type="text" class="input_username" placeholder="姓名" v-model="name" @focus="focus(0)" @blur="unFocus(0)">
          </div>
        </div>
      </div>
      <div id="input4" class="input">
        <button class="login" @click="submit()">删&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除</button>
      </div>
      <div id="input5" class="input">
        <span class="jump" @click="findPassword()">找回密码</span>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'Axios';
  import {
    Dialog
  } from 'vant';
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        status: "remove",
        name: '',
        show1: false,
        show2: false,
        form: [{
          focus: false
        }],
      };
    },
    methods: {
      changeStatus(val) {
        this.status = val;
      },
      focus(i) {
        this.form[i].focus = true;
      },
      unFocus(i) {
        this.form[i].focus = false;
      },
      findPassword() {
        axios.get('http://119.23.189.182:80/users/findPassword', {
          params: {
            username: this.name
          }
        }).then(res => {

          Dialog.alert({
            title: res.data[0].name + '的密码',
            message: res.data[0].password
          }).then(() => {
            // on close
          });
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },
      submit() {
        axios.get('http://119.23.189.182:80/users/removeUser', {
          params: {
            name: this.name,
          }
        }).then(res => {
          console.log(res.data)

          Toast('删除成功');

        }).catch(err => {
          console.log(params)
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      }
    }
  };

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }

  .bg {
    width: 100%;
    height: 100%;
  }

  input,
  textarea {
    -webkit-appearance: none;
  }

  .box_login {
    width: 80%;
    max-width: 320px;
    height: 320px;
    margin: auto;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 5px 0 #999;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
  }

  .box-input {
    height: auto;
  }

  .input {
    width: 100%;
    height: 64px;
    display: table-cell;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #input1 {
    flex: 4;
  }

  #input2,
  #input3 {
    flex: 3;
  }

  #input4 {
    flex: 3;
  }

  #input5 {
    flex: 2;
  }

  .title {
    font-size: 24px;
  }

  .jump {
    font-size: 12px;
    color: #05c1ff;
  }

  .border {
    width: 75%;
    height: 45px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 0 2px 0 #999;
  }

  .focus {
    border: 2px solid #f8a227;
    box-shadow: 0 0 5px 0 #f8a227;
  }

  .box_icon {
    width: 15%;
    height: 100%;
    display: inline-block;
    float: left;
    position: relative;
  }

  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    /* 高度的一半 */
    margin-left: -10px;
    /* 宽度的一半 */
  }

  .input_username,
  .input_password {
    height: 44px;
    width: 70%;
    margin: 0 auto;
    padding-top: 1px;
    display: block;
    border: none;
    outline: none;
    font-size: 16px;
    display: inline-block;
    float: left;
  }

  .login {
    width: 50%;
    height: 45px;
    background: #ffc107;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    outline: none;
    box-shadow: 1px 1px 5px 0 #999;
  }

  .login:active {
    box-shadow: -1px -1px 5px 0 #999 inset;
  }

</style>
