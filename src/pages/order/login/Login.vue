<template>
    <div id="container">
        <div class="box">
            <input type="test" class="username" v-model="section" @click="show1=true" readonly>
            <van-actionsheet v-model="show1" :actions="actions1" cancel-text="取消" @select="onSelect1" @cancel="onCancel1" />
            <input type="test" class="username" v-model="name" @click="show2=true" readonly>
            <van-actionsheet v-model="show2" :actions="actions2" cancel-text="取消" @select="onSelect2" @cancel="onCancel2" />
            <input type="password" class="password" v-model="password">
            <button class="username" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
    </div>
</template>

<script>
    import axios from 'Axios';
    import { Dialog } from 'vant';
    import { Actionsheet } from 'vant';
    import { Toast } from 'vant';

    export default {
        data() {
            return {
                section: '',
                name: "",
                username: "",
                password: "",
                show1: false,
                show2: false,
                actions1: [
                    {
                        name: '客运',
                        list: []
                    },
                    {
                        name: '运转',
                        list: []
                    },
                    {
                        name: '管理',
                        list: []
                    },
                    {
                        name: '饭堂',
                        list: []
                    },
                ],
                actions2: []
            }
        },
        methods: {
            onSelect1(item) {
                // 点击选项时默认不会关闭菜单，可以手动关闭
                this.show1 = false;
                this.section = item.name;
                this.actions2 = item.list;
                this.username = "", this.name = "";                
            },
            onCancel1() {
                this.show1 = false;
            },
            onSelect2(item) {
                // 点击选项时默认不会关闭菜单，可以手动关闭
                this.show2 = false;
                this.name = item.name;
                this.username = item.username;
            },
            onCancel2() {
                this.show2 = false;
            },
            login() {
                axios.get('http://119.23.189.182:80/users/findUser', {
                    params: { username: this.username, password: this.password }
                }).then(res => {
                    if (res.data.length) {
                        // 如果密码为空，跳转至设置密码页面
                        if (res.data[0].password) {
                            console.info(res.data[0].username);
                            if (window.localStorage) {
                                window.localStorage.setItem("id", res.data[0].id);
                                window.localStorage.setItem("name", res.data[0].name);
                                window.localStorage.setItem("rule", res.data[0].rule);
                                window.localStorage.setItem("username", res.data[0].username);
                                window.localStorage.setItem("password", res.data[0].password);
                                window.localStorage.setItem("job", res.data[0].job);
                                console.info(window.localStorage.getItem('rule'))
                            } else {
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
                        if (!res.data[0].password) {
                            this.$router.push({ name: 'Setpassword' })
                        }

                    }
                    else {
                        console.log(res.data);
                        alert("账号或密码错误！")
                    }
                }).catch(err => {
                    console.log('请求失败:' + err.status + ',' + err.statusText);
                });
            }
        },
        mounted() {
            axios.get('http://119.23.189.182:80/users/getUsers').then(res => {
                if (res.data.length) {
                    console.log(res.data);
                    res.data.forEach(n => {
                        switch (n.section) {
                            case 'ky':{
                                this.actions1[0].list.push(n);
                                console.log(n)
                                break;
                            }
                            case 'yz':
                                this.actions1[1].list.push(n)
                                break;
                            case 'gl':
                                this.actions1[2].list.push(n)
                                break;
                            case 'ft':
                                this.actions1[3].list.push(n)
                                break;
                            default:
                                break;
                        }
                    });
                }

            }).catch(err => {
                console.log('请求失败:' + err.status + ',' + err.statusText);
            });
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