<template>
  <div class="container">
    <div class="box">
      <div>
        <span>订餐页面上第一行通知：<button @click="set1()">提交</button></span>
        <textarea placeholder="只能输入48个字符" type="text" ref="notice1" @change="limitText1()" v-model="notice1"></textarea>
      </div>
      <div>
        <span>订餐页面上第二行通知：<button @click="set2()">提交</button></span>
        <textarea placeholder="只能输入48个字符" type="text" ref="notice2" @change="limitText2()" v-model="notice2"></textarea>
      </div>
      <div>
        <span>登录弹出通知：<button @click="set3()">提交</button></span>
        <textarea placeholder="只能输入48个字符" type="text" ref="notice3" @change="limitText3()" v-model="notice3"></textarea>
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
  import axios from 'Axios';
  export default {
    data() {
      return {
        notice1: "",
        notice2: "",
        notice3: "",
      }
    },
    methods: {
      limitText1() {
        this.$refs.notice1.value = this.$refs.notice1.value.substring(0, 48);
      },
      limitText2() {
        this.$refs.notice2.value = this.$refs.notice2.value.substring(0, 100);
      },
      limitText3() {
        this.$refs.notice3.value = this.$refs.notice3.value.substring(0, 48);
      },
      set1() {
        Dialog.confirm({
          title: '登录弹出通知',
          message: this.notice1
        }).then(() => {
          axios.get('http://119.23.189.182:80/messages/setNotice1', {
              params: {
                text: this.notice1
              }
            }).then(res => {
              Dialog.alert({
                title: '订餐页面上第一行通知修改成功！',
                message: this.notice1
              }).then(() => {
                // on close
              });
            })
            .catch(err => {
              console.log('请求失败:' + err.status + ',' + err.statusText);
            })
        }).catch(() => {
          // on cancel
        });

      },
      set2() {
        axios.get('http://119.23.189.182:80/messages/setNotice2', {
            params: {
              text: this.notice2
            }
          }).then(res => {

            Dialog.alert({
              title: '订餐页面上第二行通知修改成功！',
              message: this.notice2
            }).then(() => {
              // on close
            });
          })
          .catch(err => {
            console.log('请求失败:' + err.status + ',' + err.statusText);
          })
      },
      set3() {
        axios.get('http://119.23.189.182:80/messages/setNotice3', {
            params: {
              text: this.notice3
            }
          }).then(res => {
            Dialog.alert({
              title: '登录弹出通知修改成功！',
              message: this.notice3
            }).then(() => {
              // on close
            });

          })
          .catch(err => {
            console.log('请求失败:' + err.status + ',' + err.statusText);
          })
      }
    },
    mounted() {
      axios.get('http://119.23.189.182:80/messages/getNotice', {
        params: {
          id: 1
        }
      }).then(res => {
        this.notice1 = res.data[0].news;
        console.log(res.data[0].news)
      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      })
      axios.get('http://119.23.189.182:80/messages/getNotice', {
        params: {
          id: 2
        }
      }).then(res => {
        this.notice2 = res.data[0].news;
        console.log(res.data[0].news)
      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      })
      axios.get('http://119.23.189.182:80/messages/getNotice', {
        params: {
          id: 3
        }
      }).then(res => {
        this.notice3 = res.data[0].news;
        console.log(res.data[0].news)
      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      })
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #eee;
  }

  span {
    display: block;
    margin: 5px 0;
  }

  textarea {
    width: 300px;
    height: 150px;
  }

  button {
    width: 100px;
    float: right;
    margin-top: -3px;
  }

</style>
