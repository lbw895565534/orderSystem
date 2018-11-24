<template>
    <div id="container">
        <div class="box">
            <div class="top">
                <img src="@/assets/img/back.svg" alt="" class="left" @click="back()">
                <span>订餐记录</span>
                <img src="" alt="" class="right">
                <div class="search">
                    <input type="text" @click="dealData()">
                </div>
            </div>
            <div class="content">
                <div class="box_list">
                    <div class="item" v-for="(item,index) in data">
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
    export default {
        data() {
            return {
                today: "",
                tommorrow: "",
                data: [],
                key: { uid: 1, date: "" }
            }
        },
        methods: {        
            back() {
                this.$router.push({ name: 'Order' });
            },
            getRecord() {
                axios.get('http://127.0.0.1:3000/users/findRecordById', {
                    params: { uid: this.key.uid }
                }).then(res => {
                    if (res.data.length) {
                        this.data = res.data;
                        this.dealData();
                    }
                    else {
                        alert("无记录！")
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
            },
            searchRecord() {
                axios.get('http://127.0.0.1:3000/users/findRecordByDate', {
                    params: { uid: this.key.uid, date: this.key.date }
                }).then(res => {
                    console.log(res)
                    if (res.data.length) {
                        this.data = res.data;
                    }
                    else {
                        alert("无记录！")
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
            this.dealData();
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
    }

    .left {
        width: 32px;
        height: 32px;
        float: left;
        margin-left: 10px;
    }

    .right {
        width: 32px;
        height: 32px;
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
    }

    .content {
        width: 100%;
        height: 500px;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 128px;
        z-index: 1;
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