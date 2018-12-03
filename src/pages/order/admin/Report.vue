<template>
    <div id="container">
        <div class="box">
            <div class="top">
                <img src="@/assets/img/back.svg" alt="" class="left" @click="back()">
                <span>订餐记录</span>
                <img src="" alt="" class="right">
            </div>
            <div class="search">
                <input type="text" @click="show = true" :value="currentDate" readonly>

                <van-popup v-model="show" style="width: 80%;">
                    <van-datetime-picker type="date" v-model="dateTemp" :min-date="minDate" @confirm="getRecord()" @cancel="show = false"
                    />
                </van-popup>
            </div>

            <div class="content">
                
                <div class="box_list">
                    <div class="title">订餐人数统计</div>
                    <hr style="height:1px;width:80%;margin:auto;background-color:#ddd;border: none;">
                    <div class="box_item">
                        <div class="item">
                                <span class="mark">{{ data.breakfast }}</span>
                                <span class="info">早餐</span>
                            </div>
                            <div class="item">
                                <span class="mark">{{ data.lunch }}</span>
                                <span class="info">午餐</span>
                            </div>
                            <div class="item">
                                <span class="mark">{{ data.dinner }}</span>
                                <span class="info">晚餐</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'Axios';
    import { Popup } from 'vant';
    import { Dialog } from 'vant';
    import { Tab, Tabs } from 'vant';
    import { NavBar } from 'vant';
    export default {
        data() {
            return {
                today: "",
                tommorrow: "",
                result: [],
                data: {breakfast: 0, lunch: 0, dinner: 0},                
                show: false,
                dateTemp: "",
                minDate: new Date(2018, 11, 1),
                currentDate: this.getNowFormatDate()
            }
        },
        watch: {
            dateTemp(val) {
                var seperator1 = "-";
                var year = val.getFullYear();
                var month = val.getMonth() + 1;
                var strDate = val.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;
                this.currentDate = currentdate;
            }
        },
        methods: {
            getNowFormatDate() {
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;
                return currentdate;
            },
            back() {
                this.$router.push({ name: 'OLogin' });
            },
            getRecord() {
                axios.get('http://192.168.2.220:3000/users/findBreakfastByDate', {
                    params: {date: this.currentDate}
                }).then(res => {
                    if (res.data.length) {
                        console.log("breakfast" + res);
                    }
                    else {
                        this.data.breakfast = res.data;
                        
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
                axios.get('http://172.16.28.112:3000/users/findLunchByDate', {
                    params: {date: this.currentDate}
                }).then(res => {
                    if (res.data.length) {
                        this.result = res.data;
                    }
                    else {
                        this.data.lunch = res.data;
                        
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
                axios.get('http://172.16.28.112:3000/users/findDinnerByDate', {
                    params: {date: this.currentDate}
                }).then(res => {
                    if (res.data.length) {
                        this.result = res.data;
                    }
                    else {
                        this.data.dinner = res.data;
                        
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
                this.show = false;
            }
        },
        // 挂载完成时
        mounted() {
            this.getRecord();
        },
    }
</script>

<style scoped>
    #container {
        width: 100%;
        height: 100%;
        position: relative;
        background: #F1FAFF;
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
        background: #20D2BB;
        position: relative;
        top: 0;
        color: #fff;
        text-align: center;
        line-height: 56px;
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

    .search {
        width: 100%;
        height: 80px;
        background: #73EBE1;
        /* border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc; */
        box-shadow: 0 1px 5px 0px #b7b7b7;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    .search input {
        width: 60%;
        height: 36px;
        border: none;
        border-radius: 18px;
        box-shadow: 0px 0px 10px 0 #9baeb7;
        outline: none;
        text-align: center;
        font-size: 22px;
        color: #000;
    }

    .content {
        width: 100%;
        height: 400px;

    }

    .box_list {
        width: 100%;
        height: 180px;
        overflow: scroll;
        background: #fff;
        box-shadow: 0 0 15px 0 #ddd;
        position: relative;
        /* top: 10px; */
       
        
    }
    .box_list .title {
        width: 100%;
        height: 48px;
        margin: auto;
        display: inline-block;
        text-align: center;
        font-size: 18px;
        line-height: 48px;
    }

    .box_list .box_item {  
        width: 100%;   
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
    }

    .box_list .box_item .item {
        height: 120px;
        width: 120px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .mark {
        font-size: 64px;
        color: #F64C73;
    }

    .info {
        font-size: 18px;
        color: #666;
    }
</style>