<template>
    <div id="container">
        <div class="box">
            <div class="top">
                <img src="@/assets/img/back.svg" alt="" class="left" @click="back()">
                <span>订餐记录</span>
                <img src="" alt="" class="right">
                <div class="search">
                    <input type="text" @click="show = true" :value="currentDate" readonly>

                    <van-popup v-model="show" style="width: 80%;">
                        <van-datetime-picker type="date" v-model="dateTemp" :min-date="minDate" @confirm="searchRecord()" @cancel="show = false"/>
                    </van-popup>
                </div>
            </div>
            <div class="content">
                <div class="box_list">
                    <div class="item" v-for="(item,index) in data" >
                        <div class="pic">
                            <div class="pic_meal">
                                <div class="i">
                                    <span v-if="item.breakfast">早</span>
                                </div>
                                <div class="i">
                                    <span v-if="item.lunch">中</span>
                                </div>
                                <div class="i">
                                    <span v-if="item.dinner">晚</span>
                                </div>
                                <div class="i">
                                    <span v-if="item.nightsnack">夜</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail">
                            <div class="date">
                                <span>{{ item.date }}</span>
                            </div>
                            <div class="meal">
                                <span v-for="m in item.meal">{{ m }}，</span>
                            </div>
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
    export default {
        data() {
            return {
                today: "",
                tommorrow: "",
                data: [],
                key: { uid: 1, date: "" },
                show: false,
                dateTemp: "",
                minDate: new Date(2018,11,1),
                currentDate:  ""
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
                this.$router.push({ name: 'Order' });
            },
            getRecord() {
                axios.get('http://192.168.2.220:3000/users/findRecordById', {
                    params: { uid: this.key.uid }
                }).then(res => {
                    if (res.data.length) {
                        this.data = res.data;
                        this.dealData();
                    }
                    else {
                        this.data = res.data;
                        alert("无记录！")
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
            },
            searchRecord() {
                this.show = false;
                console.log(this.currentDate);
                axios.get('http://192.168.2.220:3000/users/findRecordByDateId', {
                    params: { uid: this.key.uid, date: this.currentDate }
                }).then(res => {
                    console.log(res)
                    if (res.data.length) {
                        this.data = res.data;
                        
                    }
                    else {
                        this.data = res.data;
                        this.dealData();
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
            },
            dealData() {
                for (var i = 0; i < this.data.length; i++) {
                    var a = "早餐", b = "午餐", c = "晚餐", d = "夜宵";
                    this.data[i].meal = [];
                    if (this.data[i].breakfast) {
                        this.data[i].meal.push(a);
                    }
                    if (this.data[i].lunch) {
                        this.data[i].meal.push(b);
                    }
                    if (this.data[i].dinner) {
                        this.data[i].meal.push(c);
                    }
                    if (this.data[i].nightsnack) {
                        this.data[i].meal.push(d);
                    }
                    this.data[i].date = this.data[i].date.substr(0, 10);
                }
                console.log(this.data);
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
        height: 150px;
        width: 100%;
        padding-top: 8px;
        font-size: 24px;
        padding-top: 10px;
        background: #5BC8FF;
        position: fixed;
        color: #fff;
        text-align: center;
        /* z-index: -1; */
    }

    .left {
        width: 28px;
        height: 28px;
        float: left;
        margin-left: 10px;
    }

    .right {
        width: 28px;
        height: 28px;
        float: right;
        margin-right: 10px;
    }

    .search {
        width: 100%;
        height: 100px;
    }

    .search input {
        width: 60%;
        height: 36px;
        border: none;
        border-radius: 18px;
        margin-top: 20px;
        box-shadow: 0px 0px 20px 0 #9baeb7;
        outline: none;
        text-align: center;
        font-size: 22px;
        color: #000;
    }

    .content {
        width: 100%;
        height: 400px;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 180px;

    }

    .box_list {
        width: 90%;
        height: 100%;
        overflow: scroll;
        border-radius: 5px;
    }

    .item {
        height: 100px;
        box-shadow: -2px 4px 5px 0 #c5c4c4;
        margin-bottom: 10px;
        display: flex;
        border-radius: 5px;
        background: #fff;
    }

    .item .pic {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item .pic .pic_meal {
        width: 60px;
        height: 60px;
        border-radius: 45px;
        margin: auto;
    }

    .i {
        width: 27px;
        height: 27px;
        display: inline-block;
        border: none;
        text-align: center;
    }

    .i span {
        display: inline-block;
        margin: auto;
        line-height: 37px;
        font-size: 24px;
        font-family: STXingkai;
    }

    .item .detail {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 10px;
    }

    .item .detail div {
        margin-bottom: 10px;
        font-size: 20px;
    }

    .item .detail div.meal {
        font-size: 16px;
    }
</style>