<template>
    <div id="container">
        <div class="box">
            <div class="top">
                <img src="@/assets/img/back.svg" alt="" class="left" @click="back()">
                <span>订餐</span>
                <img src="@/assets/img/record.svg" alt="" class="right" @click="toRecord()">
            </div>
            <div class="content">
                <div class="item item1">
                    <div class="date">
                        <span>{{ today }}</span>
                    </div>
                    <div class="meal">
                        <div v-for="(item,index) in date1" class="mealSel">
                            <input class="i" type="checkbox" name="date1" v-model="item.checked">
                            <span>{{ item.value }}</span>
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
                            <input class="i" type="checkbox" name="date2" id="" v-model="item.checked">
                            <span>{{ item.value }}</span>
                        </div>
                    </div>
                </div>
                <div class="submit s2">
                    <button @click="submit(2)">提交</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'Axios';
    export default {
        data() {
            return {
                today: "",
                tommorrow: "",
                date1: [
                    { value: '早餐', checked: false },
                    { value: '午餐', checked: false },
                    { value: '晚餐', checked: false },
                    { value: '夜宵', checked: false },
                ],
                date2: [
                    { value: '早餐', checked: false },
                    { value: '午餐', checked: false },
                    { value: '晚餐', checked: false },
                    { value: '夜宵', checked: false },
                ],
                uid: 1
            }
        },
        methods: {
            getDate(num, str) {
                var today = new Date();
                var nowTime = today.getTime();
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
            },
            turn() {
                console.log(this.date1);
            },
            back() {
                this.$router.push({ name: 'OLogin' });
            },
            toRecord() {
                this.$router.push({ name: 'ORecord' });
            },
            submit(flag) {
                var temp = { uid: this.uid, date: "", breakfast: 0, lunch: 0, dinner: 0, nightsnack: 0 };
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

                axios.get('http://127.0.0.1:3000/users/findRecordByDate', {
                    params: { uid: temp.uid, date: temp.date }
                }).then(res => {
                    if (res.data.length) {
                        console.log("已存在");

                        axios.get('http://127.0.0.1:3000/users/alterMeal', {
                            params:temp
                        }).then(res => {
                            if (res.data) {                                
                                console.log(res.data);
                            }
                            else {
                                console.log("请求失败！");
                            }
                        }).catch(err => {
                            console.log('请求失败:' + err.status + ',' + err.statusText);
                        });
                    }
                    else {
                        console.log("无记录！");

                        axios.get('http://127.0.0.1:3000/users/insertMeal', {
                            params:temp
                        }).then(res => {
                            if (res.data) {                                
                                console.log(res.data);
                            }
                            else {
                                console.log("请求失败！");
                            }
                        }).catch(err => {
                            console.log('请求失败:' + err.status + ',' + err.statusText);
                        });


                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
            }
        },
        // 创建完成时
        created() {
            this.creatDate();
        },
        // 挂载完成时
        mounted() {
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
        height: 150px;
        width: 100%;
        padding-top: 8px;
        font-size: 24px;
        padding-top: 10px;
        background: #5BC8FF;
        position: fixed;
        color: #fff;
        text-align: center;
    }


    .left {
        width: 32px;
        height: 32px;
        float: left;
        margin-left: 10px
    }

    .right {
        width: 32px;
        float: right;
        margin-right: 10px
    }

    .content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 64px;
        z-index: 2;
    }

    .item {
        width: 80%;
        height: 180px;
        border-radius: 15px;
        background: #fff;
        overflow: hidden;
        margin-bottom: 10px;
        box-shadow: 0 0 15px 0px #5BC8FF;
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
        height: 120px;
        text-align: center;
    }

    .mealSel {
        width: 50%;
        height: 50%;
        display: inline-block;
    }

    .mealSel input {
        width: 24px;
        height: 24px;
        position: relative;
        top: 18px;
        vertical-align: middle;
    }

    .mealSel span {
        position: relative;
        top: 18px;
        vertical-align: middle;
        font-size: 24px;
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
</style>