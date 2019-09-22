<template>
  <div class="container">
    <div class="box">
      <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-cell-group>
        <van-field style="font-size: 24px; line-height: 24px;" type="textarea" minheight rows="3" autosize
          v-model="title " placeholder="请输入题目" />
      </van-cell-group>
      <div class="tip">
        <div class="lefthr" style="width: 40%;float: left; height: 48px;text-align: center">
          <hr style="display: block;float: right;width: 80%;position: relative;top: 23px;margin: right">
        </div>
        <div style="width: 20%;float: left; height: 48px;display: flex;align-items: center;justify-content: center; ">
          <span>链接</span>
        </div>

        <div class="righthr" style="width: 40%;float: right; height: 48px;text-align:center">
          <hr style="width: 80%;position: relative;top: 23px;">
        </div>
      </div>
      <div>
        <center>
          <table class="links" border="0" width="84%;">
            <tr>
              <td style="height: 32px;">
                <button style="width:100px;height: 32px;border:none;" :class="{ 'blue': links[0].site }"
                  @click="showSite1 = true">{{ links[0].site }}</button>
              </td>
            </tr>
            <tr>
              <td style="width: 100%;height: 32px;">
                <input style="width:100%;height: 32px;background:none;border:none;border-bottom:1px solid #ddd;"
                  type="text" v-model="links[0].link" placeholder="请输入链接一">
              </td>
            </tr>
            <tr>
              <td style="height: 32px;">
                <button style="width:100px;height: 32px;border:none;" :class="{ 'blue': links[1].site }"
                  @click="showSite2 = true">{{ links[1].site }}</button>
              </td>
            </tr>
            <tr>
              <td style="width: 100%;height: 32px;">
                <input style="width:100%;height: 32px;background:none;border:none;border-bottom:1px solid #ddd;"
                  type="text" v-model="links[1].link" placeholder="请输入链接二">
              </td>
            </tr>
            <tr>
              <td style="height: 32px;">
                <button style="width:100px;height: 32px;border:none;" :class="{ 'blue': links[2].site }"
                  @click="showSite3 = true">{{ links[2].site }}</button>
              </td>
            </tr>
            <tr>
              <td style="width: 100%;height: 32px;">
                <input style="width:100%;height: 32px;background:none;border:none;border-bottom:1px solid #ddd;"
                  type="text" v-model="links[2].link" placeholder="请输入链接三">
              </td>
            </tr>
          </table>
        </center>
      </div>
      <div class="op"
        style="width: 100%;height: 48px;text-align: center;display: flex;justify-content: center;align-items: center">
        <button class="submit" style="width: 30%;height: 36px;" @click="submit()">提交</button>
      </div>
      <!-- 弹出选项 -->
      <van-popup v-model="showSite1" position="bottom">
        <van-picker show-toolbar :columns="columns" @cancel="showSite1 = false" @confirm="onConfirm1" />
      </van-popup>
      <van-popup v-model="showSite2" position="bottom">
        <van-picker show-toolbar :columns="columns" @cancel="showSite2 = false" @confirm="onConfirm2" />
      </van-popup>
      <van-popup v-model="showSite3" position="bottom">
        <van-picker show-toolbar :columns="columns" @cancel="showSite3 = false" @confirm="onConfirm3" />
      </van-popup>
    </div>
  </div>
</template>

<script>
  import axios from 'Axios';
  import {
    NavBar,
    Field,
    Button,
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        title: "",
        links: [{
            site: "",
            link: ""
          },
          {
            site: "",
            link: ""
          },
          {
            site: "",
            link: ""
          },
        ],
        userid: window.localStorage.getItem("id"),
        name: window.localStorage.getItem("name"),
        showSite1: false,
        showSite2: false,
        showSite3: false,
        columns: ['', '舜网（重点）', '高铁网', '铁路网', '川北在线','神舟铁路网','火车票网']
      }
    },
    mounted() {
      console.log(this.userid);
    },
    methods: {
      onClickLeft() {
        this.$router.push({
          name: 'Article'
        });
      },
      onConfirm1(value) {
        this.links[0].site = value;
        this.showSite1 = false;
      },
      onConfirm2(value) {
        this.links[1].site = value;
        this.showSite2 = false;
      },
      onConfirm3(value) {
        this.links[2].site = value;
        this.showSite3 = false;
      },
      submit() {
        if (this.id == null || this.title.length == 0) {
          Toast.fail('失败文案');
        } else {
          this.add();
        }
      },
      add() {
        axios.get('http://119.23.189.182:80/articles/addArticle', {
          params: {
            userid: this.userid,
            title: this.title,
            site1: this.links[0].site,
            link1: this.links[0].link,
            site2: this.links[1].site,
            link2: this.links[1].link,
            site3: this.links[2].site,
            link3: this.links[2].link
          }
        }).then(res => {
          Toast.success('提交成功');
          this.$router.back(-1);
        }).catch(err => {
          Toast.fail('提交异常');
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      }


    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
  }

  .box {
    width: 100%;
    background-color: #f8f8f8;
    padding-bottom: 20px;
  }

  .tip {
    width: 100%;
    height: 48px;
  }

  .tip span {
    font-size: 20px;
    color: #969799;
  }

  tr {
    height: 48px;
  }

  .blue {
    background: #409eff;
    color: #fff;
  }

</style>
