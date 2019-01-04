<template>
    <div id="container">
        <div class="box">
            <div class="top">
                <img src="@/assets/img/back.svg" alt="" class="left" @click="back()">
                <span>{{ name }}</span>
                <img src="@/assets/img/record.svg" alt="" class="right" @click="toRecord()" >
            </div>
            <div class="content">
                <div class="item item1">
                    <div class="date">
                        <span>{{ today }}</span>
                    </div>
                    <div class="meal">
                        <div v-for="(item,index) in date1" class="mealSel">
                            <!-- <input class="i" type="checkbox" name="date1" v-model="item.checked"> -->
                            <el-checkbox v-model="item.checked" :label="item.value" border fill="#fd737e" :disabled="item.disabled"></el-checkbox>
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
                            <el-checkbox v-model="item.checked" :label="item.value" border fill="#fd737e" :disabled="item.disabled"></el-checkbox>
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
                            <el-checkbox v-model="item.checked" :label="item.value" border fill="#fd737e" :disabled="item.disabled"></el-checkbox>
                            <!-- <span>{{ item.value }}</span> -->
                        </div>
                    </div>
                </div>
                <div class="submit s3">
                    <button @click="submit(3)">提交</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'Axios';
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                today: "",
                tommorrow: "",
                bermorgen: "",
                date1: [
                    { value: '早餐', checked: false, disabled: false },
                    { value: '午餐', checked: false, disabled: false },
                    { value: '晚餐', checked: false, disabled: false },

                ],
                date2: [
                    { value: '早餐', checked: false, disabled: false },
                    { value: '午餐', checked: false, disabled: false },
                    { value: '晚餐', checked: false, disabled: false },

                ],
                date3: [
                    { value: '早餐', checked: false, disabled: false },
                    { value: '午餐', checked: false, disabled: false },
                    { value: '晚餐', checked: false, disabled: false },

                ],
                id: window.localStorage.getItem("id"),
                name: window.localStorage.getItem("name"),
            }
        },
        methods: {
            getDate(num, str) {
                var today = new Date();
                var nowTime = today.getTime();
                var nowHour = today.getHours();
                console.log(nowHour);

                // 根据时间关闭餐次
                nowHour > 3?this.date1[0].disabled = true:this.date1[0].disabled = false;
                nowHour > 8?this.date1[1].disabled = true:this.date1[1].disabled = false;
                nowHour > 14?this.date1[2].disabled = true:this.date1[2].disabled = false;
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
                    params: { uid: this.id, date: this.today }
                }).then(res => {
                    console.log(res.data);
                    if (res.data.length) {
                        var order = res.data[0];
                        order.breakfast == 1?this.date1[0].checked = true:this.date1[0].checked = false;
                        order.lunch == 1?this.date1[1].checked = true:this.date1[1].checked = false;
                        order.dinner == 1?this.date1[2].checked = true:this.date1[2].checked = false;
                    }
                    else {
                       
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
                axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
                    params: { uid: this.id, date: this.tommorrow }
                }).then(res => {
                    console.log(res.data);
                    if (res.data.length) {
                        var order = res.data[0];
                        order.breakfast == 1?this.date2[0].checked = true:this.date2[0].checked = false;
                        order.lunch == 1?this.date2[1].checked = true:this.date[1].checked = false;
                        order.dinner == 1?this.date2[2].checked = true:this.date2[2].checked = false;
                    }
                    else {
                       
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
                axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
                    params: { uid: this.id, date: this.bermorgen }
                }).then(res => {
                    console.log(res.data);
                    if (res.data.length) {
                        var order = res.data[0];
                        order.breakfast == 1?this.date3[0].checked = true:this.date3[0].checked = false;
                        order.lunch == 1?this.date3[1].checked = true:this.date3[1].checked = false;
                        order.dinner == 1?this.date3[2].checked = true:this.date3[2].checked = false;
                    }
                    else {
                       
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
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
                        this.$router.push({ name: 'OLogin' });
                    }).catch(() => {
                        this.$router.push({ name: 'Order' });
                    });
                }
                if (!this.id) {
                    this.$router.push({ name: 'OLogin' });
                }
            },
            toRecord() {
                this.$router.push({ name: 'ORecord' });
            },
            submit(flag) {
                var temp = { uid: this.id, date: "", breakfast: 0, lunch: 0, dinner: 0, nightsnack: 0 };
                if (flag == 1) {
                    temp.date = this.today.toString();
                    this.date1[0].checked == 1 ? temp.breakfast = 1 : temp.breakfast = 0;
                    this.date1[1].checked == 1 ? temp.lunch = 1 : temp.lunch = 0;
                    this.date1[2].checked == 1 ? temp.dinner = 1 : temp.dinner = 0;
                    // this.date1[3].checked == 1 ? temp.nightsnack = 1 : temp.nightsnack = 0;
                }
                if (flag == 2) {
                    temp.date = this.tommorrow;
                    this.date2[0].checked == 1 ? temp.breakfast = 1 : temp.breakfast = 0;
                    this.date2[1].checked == 1 ? temp.lunch = 1 : temp.lunch = 0;
                    this.date2[2].checked == 1 ? temp.dinner = 1 : temp.dinner = 0;
                    // this.date2[3].checked == 1 ? temp.nightsnack = 1 : temp.nightsnack = 0;
                }
                if (flag == 3) {
                    temp.date = this.bermorgen;
                    this.date3[0].checked == 1 ? temp.breakfast = 1 : temp.breakfast = 0;
                    this.date3[1].checked == 1 ? temp.lunch = 1 : temp.lunch = 0;
                    this.date3[2].checked == 1 ? temp.dinner = 1 : temp.dinner = 0;
                    // this.date2[3].checked == 1 ? temp.nightsnack = 1 : temp.nightsnack = 0;
                }
                axios.get('http://119.23.189.182:80/users/findRecordByDateId', {
                    params: { uid: temp.uid, date: temp.date }
                }).then(res => {
                    console.log(res.data);
                    if (res.data.length == 1) {
                        console.log("已存在");
                        Dialog.confirm({
                            title: temp.date + '已经存在订餐',
                            message: '是否覆盖订餐记录？'
                        }).then(() => {
                            axios.get('http://119.23.189.182:80/users/alterMeal', {
                                params: temp
                            }).then(res => {
                                if (res.data) {
                                    Dialog.alert({
                                        message: '订餐记录已经更新'
                                    }).then(() => {
                                        // on close
                                    });
                                }
                                else {
                                    Dialog.alert({
                                        message: '请求失败，请重试'
                                    }).then(() => {
                                        // on close
                                    });
                                }
                            }).catch(err => {
                                console.log('请求失败:' + err.status + ',' + err.statusText);
                            });
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
                            axios.get('http://119.23.189.182:80/users/insertMeal', {
                                params: temp
                            }).then(res => {
                                if (res.data) {
                                    console.log("记录已添加！");
                                }
                                else {
                                    console.log("请求失败！");
                                }
                            }).catch(err => {
                                console.log('请求失败:' + err.status + ',' + err.statusText);
                            });
                        }).catch(() => {
                            // on cancel
                        });
                    }
                    if (res.data.length >= 2) {
                        Toast('系统错误，请联系管理员')
                    }
                    
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
            }
        },
        
        // 挂载完成时
        mounted() {
            this.id = window.localStorage.getItem("id");
            this.creatDate();
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
        visibility: hidden;
    }

    .content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        z-index: 2;
    }

    .item {
        width: 80%;
        height: 180px;
        border-radius: 15px;
        background: #fff;
        overflow: hidden;
        margin-bottom: 10px;
        box-shadow: 0 0 10px 0px #ff9800;
        /* box-shadow: 0 1px 10px 0 #999; */
    }

    .date {
        height: 48px;
        background: #ff9800;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 24px;
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
        display: flex;
        justify-content: center;
        align-items: center;
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



    .van-dialog__message--has-title {
        text-align: center!important;
    }
</style>