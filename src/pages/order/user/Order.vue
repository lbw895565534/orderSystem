<template>
  <div id="container">
    <div class="box">
      <div class="top">
        <img src="@/assets/img/back.svg" alt="" class="left" @click="back()">
        <span>{{ name }}</span>
        <img src="@/assets/img/record.svg" visibility="" alt="" class="right" @click="toRecord()">
      </div>

      <!-- 订餐时间通知 -->
      <van-notice-bar :text="notice1" left-icon="volume-o" @click="showNotice(1)" />

      <!-- 临时通知 -->
      <van-notice-bar :text="notice2" left-icon="volume-o" @click="showNotice(2)" />

      <!-- 餐单 -->
      <!-- <van-popup v-model="noticeshow1" style="width:250px;height:280px;display:flex;align-items: center;justify-content: center;">{{ notice1 }}</van-popup> -->
      <van-notice-bar :text="notice3" left-icon="volume-o" @click="imgScc()" />

      <div class="content">
        <div class="item item1">
          <div class="date">
            <span>{{ today }}</span>
          </div>
          <div class="meal">
            <div v-for="(item,index) in date1" class="mealSel">
              <!-- <input class="i" type="checkbox" name="date1" v-model="item.checked"> -->
              <el-checkbox v-model="item.checked" :label="item.value" border fill="#fd737e" :disabled="item.disabled">
              </el-checkbox>
              <!-- <span>{{ item.value }}</span> -->
            </div>
          </div>
        </div>
        <div class="submit s1">
          <button @click="submit(1)">提交</button>
        </div>
        <div class="item item1">
          <div class="date">
            <span>{{ tommorrow }}</span>
          </div>
          <div class="meal">
            <div v-for="(item,index) in date2" class="mealSel">
              <!-- <input class="i" type="checkbox" name="date2" id="" v-model="item.checked"> -->
              <el-checkbox v-model="item.checked" :label="item.value" border fill="#fd737e" :disabled="item.disabled">
              </el-checkbox>
              <!-- <span>{{ item.value }}</span> -->
            </div>
          </div>
        </div>
        <div class="submit s2">
          <button @click="submit(2)">提交</button>
        </div>
        <div class="item item1">
          <div class="date">
            <span>{{ bermorgen }}</span>
          </div>
          <div class="meal">
            <div v-for="(item,index) in date3" class="mealSel">
              <!-- <input class="i" type="checkbox" name="date2" id="" v-model="item.checked"> -->
              <el-checkbox v-model="item.checked" :label="item.value" border fill="#fd737e" :disabled="item.disabled">
              </el-checkbox>
              <!-- <span>{{ item.value }}</span> -->
            </div>
          </div>
        </div>
        <div class="submit s3">
          <button @click="submit(3)">提交</button>
        </div>
        <div class="item item2" v-if="punish==1">
          <br>
          <center>
            
              <button @click="$router.push({name:'Article'})">进入投稿</button>
           
          </center>
          <br>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'Axios';
  import {
    Dialog,
    Popup,
    Toast,
    ImagePreview
  } from 'vant';
  export default {
    data() {
      return {
        notice1: "",
        notice2: "",
        notice3: "点击显示菜单",
        popup: "",
        ImagePreview: ["./static/img/list.jpg", "./static/img/list2.jpg"],
        noticeshow1: false,
        today: "",
        tommorrow: "",
        bermorgen: "",
        news: "初一初二不提供早餐夜宵",
        date1: [{
            value: '早餐',
            checked: false,
            disabled: false
          },
          {
            value: '午餐',
            checked: false,
            disabled: false
          },
          {
            value: '晚餐',
            checked: false,
            disabled: false
          },
          {
            value: '夜宵',
            checked: false,
            disabled: false
          },

        ],
        date2: [{
            value: '早餐',
            checked: false,
            disabled: false
          },
          {
            value: '午餐',
            checked: false,
            disabled: false
          },
          {
            value: '晚餐',
            checked: false,
            disabled: false
          },
          {
            value: '夜宵',
            checked: false,
            disabled: false
          },

        ],
        date3: [{
            value: '早餐',
            checked: false,
            disabled: false
          },
          {
            value: '午餐',
            checked: false,
            disabled: false
          },
          {
            value: '晚餐',
            checked: false,
            disabled: false
          },
          {
            value: '夜宵',
            checked: false,
            disabled: false
          },

        ],
        id: window.localStorage.getItem("id"),
        name: window.localStorage.getItem("name"),
        punish: window.localStorage.getItem("punish"),
      }
    },
    methods: {
      getDate(num, str) {
        var today = new Date();
        var nowTime = today.getTime();
        //时间转化为小数
        var nowHour = today.getHours();
        var nowMinutes = today.getMinutes();
        var time = nowHour + nowMinutes / 60;
        var bTime = 7 + 10 / 60;
        console.log(time);

        // 根据时间关闭餐次
        time > bTime ? this.date1[0].disabled = true : this.date1[0].disabled = false;
        time > 8.30 ? this.date1[1].disabled = true : this.date1[1].disabled = false;
        time > 8.30 ? this.date1[2].disabled = true : this.date1[2].disabled = false;
        time > 15.00 ? this.date1[3].disabled = true : this.date1[3].disabled = false;
        var ms = 24 * 3600 * 1000 * num;
        today.setTime(parseInt(nowTime + ms));
        var oYear = today.getFullYear();
        var oMoth = (today.getMonth() + 1).toString();
        if (oMoth.length <= 1) oMoth = '0' + oMoth;
        var oDay = today.getDate().toString();
        if (oDay.length <= 1) oDay = '0' + oDay;
        return oYear + str + oMoth + str + oDay;
      },
      creatDate() {
        this.today = this.getDate(0, "-");
        this.tommorrow = this.getDate(1, "-");
        this.bermorgen = this.getDate(2, "-");
        axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
          params: {
            uid: this.id,
            date: this.today
          }
        }).then(res => {
          console.log(res.data);
          if (res.data.length) {
            var order = res.data[0];
            order.breakfast == 1 ? this.date1[0].checked = true : this.date1[0].checked = false;
            order.lunch == 1 ? this.date1[1].checked = true : this.date1[1].checked = false;
            order.dinner == 1 ? this.date1[2].checked = true : this.date1[2].checked = false;
            order.nightsnack == 1 ? this.date1[3].checked = true : this.date1[3].checked = false;
          } else {

          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
        axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
          params: {
            uid: this.id,
            date: this.tommorrow
          }
        }).then(res => {
          console.log(res.data);
          if (res.data.length) {
            var order = res.data[0];
            order.breakfast == 1 ? this.date2[0].checked = true : this.date2[0].checked = false;
            order.lunch == 1 ? this.date2[1].checked = true : this.date[1].checked = false;
            order.dinner == 1 ? this.date2[2].checked = true : this.date2[2].checked = false;
            order.nightsnack == 1 ? this.date1[3].checked = true : this.date1[3].checked = false;
          } else {

          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
        axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
          params: {
            uid: this.id,
            date: this.bermorgen
          }
        }).then(res => {
          console.log(res.data);
          if (res.data.length) {
            var order = res.data[0];
            order.breakfast == 1 ? this.date3[0].checked = true : this.date3[0].checked = false;
            order.lunch == 1 ? this.date3[1].checked = true : this.date3[1].checked = false;
            order.dinner == 1 ? this.date3[2].checked = true : this.date3[2].checked = false;
            order.nightsnack == 1 ? this.date1[3].checked = true : this.date1[3].checked = false;
          } else {

          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },
      showNotice(flag) {
        switch (flag) {
          case 1:
            this.noticeshow1 = true;
            break;
          case 2:
            this.noticeshow2 = true;
            break;

          default:
            break;
        }
      },
      imgScc() {
        ImagePreview(this.ImagePreview)
      },
      turn() {
        console.log(this.date1);
      },
      back() {
        if (this.id) {
          Dialog.confirm({
            message: '确定注销当前用户吗'
          }).then(() => {
            localStorage.clear();
            Toast('注销成功');
            this.$router.push({
              name: 'OLogin'
            });
          }).catch(() => {
            this.$router.push({
              name: 'Order'
            });
          });
        }
        if (!this.id) {
          this.$router.push({
            name: 'OLogin'
          });
        }
      },
      toRecord() {
        this.$router.push({
          name: 'ORecord'
        });
      },
      submit(flag) {
        var temp = {
          uid: this.id,
          date: "",
          breakfast: 0,
          lunch: 0,
          dinner: 0,
          nightsnack: 0
        };
        if (flag == 1) {
          temp.date = this.today.toString();
          this.date1[0].checked == 1 ? temp.breakfast = 1 : temp.breakfast = 0;
          this.date1[1].checked == 1 ? temp.lunch = 1 : temp.lunch = 0;
          this.date1[2].checked == 1 ? temp.dinner = 1 : temp.dinner = 0;
          this.date1[3].checked == 1 ? temp.nightsnack = 1 : temp.nightsnack = 0;
        }
        if (flag == 2) {
          temp.date = this.tommorrow;
          this.date2[0].checked == 1 ? temp.breakfast = 1 : temp.breakfast = 0;
          this.date2[1].checked == 1 ? temp.lunch = 1 : temp.lunch = 0;
          this.date2[2].checked == 1 ? temp.dinner = 1 : temp.dinner = 0;
          this.date2[3].checked == 1 ? temp.nightsnack = 1 : temp.nightsnack = 0;
        }
        if (flag == 3) {
          temp.date = this.bermorgen;
          this.date3[0].checked == 1 ? temp.breakfast = 1 : temp.breakfast = 0;
          this.date3[1].checked == 1 ? temp.lunch = 1 : temp.lunch = 0;
          this.date3[2].checked == 1 ? temp.dinner = 1 : temp.dinner = 0;
          this.date2[3].checked == 1 ? temp.nightsnack = 1 : temp.nightsnack = 0;
        }
        axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
          params: {
            uid: temp.uid,
            date: temp.date
          }
        }).then(res => {
          console.log(res.data);
          if (res.data.length == 1) {
            console.log("已存在");
            Dialog.confirm({
              title: temp.date + '已经存在订餐',
              message: '是否覆盖订餐记录？'
            }).then(() => {
              this.alter(temp);
            }).catch(() => {
              Dialog.alert({
                message: '已经取消'
              }).then(() => {
                // on close
              });
            });
          }
          if (res.data.length == 0) {
            console.log("无记录！");
            Dialog.confirm({
              title: temp.date + '尚未订餐',
              message: "是否提交订餐？"
            }).then(() => {
              // on confirm
              this.add(temp);
            }).catch(() => {
              // on cancel
            });
          }
          if (res.data.length >= 2) {
            Toast('系统错误，请联系管理员');
          }

        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },
      alter(t) {
        axios.get('http://119.23.189.182:80/users/alterMeal', {
          params: t
        }).then(res => {
          if (res.data) {
            Dialog.alert({
              message: '订餐记录已经更新'
            }).then(() => {
              // on close
            });
          } else {
            Dialog.alert({
              message: '请求失败，请重试'
            }).then(() => {
              // on close
            });
          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },

      add(t) {
        axios.get('http://119.23.189.182:80/users/insertMeal', {
          params: t
        }).then(res => {
          if (res.data) {
            console.log("记录已添加！");
          } else {
            console.log("请求失败！");
          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      }
    },

    del(t) {
      axios.get('http://119.23.189.182:80/users/insertMeal', {
        params: t
      }).then(res => {

      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      });
    },



    // 挂载完成时
    mounted() {
      console.log("作者：" + this.punish);
      this.id = window.localStorage.getItem("id");
      this.creatDate();
      setInterval(() => {
        location.reload();
      }, 300000);


      // Dialog.alert({
      //   title: '2.25开始订夜宵！',
      //   message: "从下星期一（2月25日）起，需要吃夜宵的同志请在上晚班当天的中午15:00前在车站订餐平台报餐。不报餐的同志不再提供夜宵，也不收夜宵费用。另外，吃夜宵的同志需自行准备双层保温饭盒一个。当天晚班点名前将饭盒送到饭堂。"
      // }).then(() => {
      //   // on close
      // });


      axios.get('http://119.23.189.182:80/messages/getNotice', {
        params: {
          id: 1
        }
      }).then(res => {
        console.log(res.data[0].news)
        this.notice1 = res.data[0].news;
      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      });

      axios.get('http://119.23.189.182:80/messages/getNotice', {
        params: {
          id: 2
        }
      }).then(res => {
        console.log(res.data[0].news)
        this.notice2 = res.data[0].news;
      }).catch(err => {
        console.log('请求失败:' + err.status + ',' + err.statusText);
      });

      // axios.get('http://119.23.189.182:80/messages/getNotice', {
      //   params: {
      //     id: 3
      //   }
      // }).then(res => {
      //   if (res.data[0].news) {
      //     alert(res.data[0].news)
      //   }
      // }).catch(err => {
      //   console.log('请求失败:' + err.status + ',' + err.statusText);
      // });

    },
  }

</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .box {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .top {
    height: 56px;
    width: 100%;
    font-size: 24px;
    background: #00bdd2;
    position: relative;
    top: 0;
    color: #fff;
    text-align: center;
    line-height: 56px;
    box-shadow: 0 0 5px 0 #9c9c9c;
    /* z-index: -1; */
  }

  .left {
    width: 28px;
    height: 28px;
    float: left;
    margin-left: 10px;
    margin-top: 14px;
  }

  .right {
    width: 28px;
    height: 28px;
    float: right;
    margin-right: 10px;
    margin-top: 14px;
  }

  .content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    z-index: 2;
    position: absolute;
    top: 150px;
    bottom: 0;
    overflow: scroll;
  }

  .item {
    width: 80%;
    height: 180px;
    border-radius: 15px;
    background: #fff;
    margin-bottom: 10px;
    box-shadow: 0 0 10px 0px #ff9800;
    /* box-shadow: 0 1px 10px 0 #999; */
  }

  .item2 {
    box-shadow: 0 0 10px 0px #26a2ff;
  }

  .item2 button {
    background: #26a2ff;
  }

  .date {
    height: 48px;
    width: 100%;
    background: #ff9800;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    border-radius: 15px 15px 0 0;
  }

  .meal {
    height: 132px;
    text-align: center;
  }

  .mealSel {
    width: 50%;
    height: 50%;
    display: inline-block;
  }

  .mealSel .el-checkbox.is-bordered {
    width: 120px;
    margin-top: 15px;
  }


  .submit {
    width: 90%;
    height: 48px;
    font-size: 20px;
    border: none;
    margin-bottom: 20px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align: center;
  }

  button {
    width: 160px;
    height: 48px;
    background: none;
    border: none;
    font-size: 20px;
    border: none;
    background: #fd737e;
    border-radius: 24px;
    outline: none;
    box-shadow: 0 1px 10px 0 #999;
  }

  .van-notice-bar {
    width: 100%;
    padding: 0 !important;
  }

  .van-dialog__message--has-title {
    text-align: center !important;
  }

  .list {
    width: 100%;
    height: 100%;
    /*图片原始大小1倍*/
    transition: all ease 0.5s;
  }

</style>
