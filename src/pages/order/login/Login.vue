<template>
    <div id="container">
        <div class="box">
            <input type="text" class="username" v-model="username">
            <input type="password" class="password" v-model="password">
            <button class="username" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
    </div>
</template>

<script>
    import axios from 'Axios';
    import { Dialog } from 'vant';
    export default {
        data() {
            return {
                username: "",
                password: "",
            }
        },
        mounted() {
            
        },
        methods: {
            login() {

                axios.get('http://192.168.2.220:3000/users/findUser', {
                    params: { username: this.username, password: this.password }
                }).then(res => {
                   
                    if (res.data.length) {
                        console.info(res.data[0].username);
                        if(window.localStorage) {
                            window.localStorage.setItem("id", res.data[0].id);
                            window.localStorage.setItem("name", res.data[0].name);
                            window.localStorage.setItem("rule", res.data[0].rule);
                            window.localStorage.setItem("username", res.data[0].username);
                            window.localStorage.setItem("password", res.data[0].password);
                            window.localStorage.setItem("job", res.data[0].job);
                            console.info(window.localStorage.getItem('rule'))
                        }else {
                            console.log("localstorage不存在")
                        }
                        setTimeout(function () {
                            if (localStorage.getItem('rule') == 1) {
                                this.$router.push({ name: 'OReport' });
                            }
                            if (localStorage.getItem('rule') == 2) {
                                this.$router.push({ name: 'Order' });
                            }
                        }.bind(this), 1000)

                    }
                    else {
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
    }
</style>