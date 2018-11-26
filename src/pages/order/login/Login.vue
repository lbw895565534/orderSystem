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
    export default {
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login() {
                console.log("username:" + this.username);
                console.log("password:" + this.password);
                axios.get('http://192.168.2.220:3000/users/findUser', {
                    params: { username: this.username, password: this.password }
                }).then(res => {
                    console.log(res)
                    if (res.data.length) {
                        this.$router.push({ name: 'Order' });
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