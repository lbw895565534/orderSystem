<template>
  <div id="container">
    <div class="box">
      <input type="test" class="sel username" v-model="section" @click="show1=true" readonly placeholder="请选择部门">
      <van-actionsheet v-model="show1" :actions="actions1" cancel-text="取消" @select="onSelect1" @cancel="onCancel1" />
      <input type="test" class="sel username" v-model="term" @click="show2=true" readonly placeholder="请选择班组">
      <van-actionsheet v-model="show2" :actions="actions2" cancel-text="取消" @select="onSelect2" @cancel="onCancel2" />
      <input type="test" class="sel username" v-model="name" @click="show3=true" readonly placeholder="请选择姓名">
      <van-actionsheet v-model="show3" :actions="actions3" cancel-text="取消" @select="onSelect3" @cancel="onCancel3" />
      <input type="password" class="password" v-model="password" placeholder="请输入密码">
      <van-dialog v-model="show" show-cancel-button :before-close="beforeClose" title="还没有密码">
        <van-field v-model="set" type="text" label="密码" placeholder="请输入新密码" />
      </van-dialog>
      <button class="username" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
    </div>
  </div>
</template>

<script>
  import axios from 'Axios';
  import {
    Dialog, Toast, Actionsheet
  } from 'vant';
  export default {
    data() {
      return {
        section: '',
        term: '',
        name: '',
        query: '',
        username: "",
        password: "",
        set: "",
        show: false,
        show1: false,
        show2: false,
        show3: false,
        actions1: [{
          name: '管理',
          query: 'gl',
        },
        {
          name: '其他',
          query: 'ht',

        },
        {
          name: '客运',
          query: 'ky',
        },
        {
          name: '运转',
          query: 'yz',
        },
        {
          name: '票房',
          query: 'pf',
        },
        {
          name: '饭堂',
          query: 'ft',
        },
        {
          name: '实习生',
          query: 'sxs',
        },
        ],
        actions2: [

        ],
        actions3: [

        ]
      }
    },
    methods: {
      beforeClose(action, done) {
        if (action === 'confirm') {

          if (this.set) {
            axios.get('http://119.23.189.182:80/users/setPassword', {
              params: {
                password: this.set,
                username: this.username
              }
            }).then(res => {
              if (res.status == 200) {
                this.show = false;
              }
            }).catch(err => {
              console.log('请求失败:' + err.status + ',' + err.statusText);
            })
          }
          if (this.set == "") {
            Toast('不能为空')
            done()
          }
        }
        else {
          done();
        }
      },
      onSelect1(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.show1 = false;

        this.section = item.name;
        this.query = item.query;
        // 重置后面的选项
        this.name = '';
        this.term = '';
        this.username = '';

        axios.get('http://119.23.189.182:80/users/getTermBySection', {
          params: {
            section: this.query,
          }
        }).then(res => {
          this.actions2 = res.data;
          this.actions2.forEach(n => {
            n.name = n.term;
          });
          if (this.actions2.length == 1) {
            var temp = { name: '甲' };
            this.onSelect2(temp)
          }
          if (this.actions2.length >= 2) {
            this.show2 = true;
          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });


      },
      onCancel1() {
        this.show1 = false;
      },
      onSelect2(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.show2 = false;
        this.term = item.name;
        // 重置后面的选项
        this.name = '';
        this.username = '';

        axios.get('http://119.23.189.182:80/users/getUsersBySectionTerm', {
          params: {
            section: this.query,
            term: this.term
          }
        }).then(res => {
          console.log(this.query, this.term);
          console.log(res.data)
          this.actions3 = res.data;
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
        if (this.section && this.term) {
          this.show3 = true;
        }
      },
      onCancel2() {
        this.show2 = false;
      },
      onSelect3(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.show3 = false;
        this.name = item.name;
        this.username = item.username;
      },
      onCancel3() {
        this.show3 = false;
      },
      login() {
        axios.get('http://119.23.189.182:80/users/findUser', {
          params: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          if (res.data.length) {
            // 如果密码为空，跳转至设置密码页面
            if (res.data[0].password == "") {
              this.show = true;
            }
            if (res.data[0].password) {
              if (window.localStorage) {
                window.localStorage.setItem("id", res.data[0].id);
                window.localStorage.setItem("name", res.data[0].name);
                window.localStorage.setItem("rule", res.data[0].rule);
                window.localStorage.setItem("username", res.data[0].username);
                window.localStorage.setItem("password", res.data[0].password);
                window.localStorage.setItem("job", res.data[0].job);
                console.info(window.localStorage.getItem('rule'))
              }
              setTimeout(function () {
                if (localStorage.getItem('rule') == 1) {
                  this.$router.push({
                    name: 'OReport'
                  });
                }
                if (localStorage.getItem('rule') == 2) {
                  this.$router.push({
                    name: 'Order'
                  });
                }
              }.bind(this), 1000)
            }

          } else {
            console.log(res.data);
            alert("账号或密码错误！")
          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      }
    }
  }

</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgb(14, 214, 240);
    display: flex;
    justify-content: center;
    /* background: url("../../../../static/img/bg.jpg") no-repeat center; */
  }

  .box {
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  input {
    outline: none;
    height: 48px;
    margin-bottom: 20px;
    border-radius: 24px;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    /* 方法2 */
    box-shadow: 0 0 15px 1px #ddd inset;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
  }

  button {
    width: 100%;
    height: 48px;
    font-size: 20px;
    border: none;
    margin-top: 20px;
    border-radius: 24px;
    background: #fd737e;
    outline: none;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 0 8px 0 #999;
  }

  /* .van-cell {
    line-height: 48px!important;
} */
</style>