<template>
    <div class="box" @turn="changeStatus()">
        <img src="@/assets/img/bg_login.jpg" alt="" class="bg">
        <div class="box_login box_input1 ">
            <div id="input1" class="input">
                <span class="title">用户添加</span>
            </div>
            <div class="box-input">
                <div id="input2" class="input">
                    <div class="border" v-bind:class="{focus:form[0].focus}">
                        <div class="box_icon">
                            <img src="@/assets/img/icon/username.svg" alt="" class="icon" v-if="!form[0].focus">
                            <img src="@/assets/img/icon/username_after.svg" alt="" class="icon" v-if="form[0].focus">
                        </div>
                        <input type="text" class="input_username" placeholder="用户名" v-model="username" @focus="focus(0)" @blur="unFocus(0)">
                    </div>
                </div>
                <div id="input2" class="input">
                    <div class="border" v-bind:class="{focus:form[1].focus}">
                        <div class="box_icon">
                            <img src="@/assets/img/icon/name.svg" alt="" class="icon" v-if="!form[1].focus">
                            <img src="@/assets/img/icon/name_after.svg" alt="" class="icon" v-if="form[1].focus">
                        </div>
                        <input type="text" class="input_username" placeholder="姓名" v-model="name" @focus="focus(1)" @blur="unFocus(1)">
                    </div>
                </div>
                <div id="input2" class="input">
                    <div class="border" v-bind:class="{focus:form[2].focus}" @click="">
                        <div class="box_icon">
                            <img src="@/assets/img/icon/section.svg" alt="" class="icon" v-if="!form[2].focus">
                            <img src="@/assets/img/icon/section_after.svg" alt="" class="icon" v-if="form[2].focus">
                        </div>
                        <input type="text" class="input_username" placeholder="部门" v-model="section" @focus="select1()" @blur="unFocus(2)">
                        <van-actionsheet v-model="show1" :actions="sections" cancel-text="取消" @select="onSelect1" @cancel="onCancel1" />
                    </div>
                </div>
                <div id="input2" class="input">
                    <div class="border" v-bind:class="{focus:form[3].focus}">
                        <div class="box_icon">
                            <img src="@/assets/img/icon/term.svg" alt="" class="icon" v-if="!form[3].focus">
                            <img src="@/assets/img/icon/term_after.svg" alt="" class="icon" v-if="form[3].focus">
                        </div>
                        <input type="text" class="input_username" placeholder="班组" v-model="term" @focus="select2()" @blur="unFocus(3)">
                        <van-actionsheet v-model="show2" :actions="terms" cancel-text="取消" @select="onSelect2" @cancel="onCancel2" />
                    </div>
                </div>
                <div id="input2" class="input">
                    <div class="border" v-bind:class="{focus:form[4].focus}">
                        <div class="box_icon">
                            <img src="@/assets/img/icon/password.svg" alt="" class="icon" v-if="!form[4].focus">
                            <img src="@/assets/img/icon/password_after.svg" alt="" class="icon" v-if="form[4].focus">
                        </div>
                        <input type="text" class="input_username" placeholder="密码" v-model="password" @focus="focus(4)" @blur="unFocus(4)">
                    </div>
                </div>
            </div>
            <div id="input4" class="input">
                <button class="login" @click="submit()">添&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加</button>
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
                status: "add",
                name: '',
                username: "",
                password: "",
                section: "",
                query: "",
                term: "",
                show1: false,
                show2: false,
                form: [{
                    focus: false
                },
                {
                    focus: false
                },
                {
                    focus: false
                },
                {
                    focus: false
                },
                {
                    focus: false
                }],
                sections: [
                    {name: '管理', query: 'gl' },
                    {name: '其他', query: 'ht'},
                    {name: '客运', query: 'ky'},
                    {name: '运转', query: 'yz'},
                    {name: '票房', query: 'pf'},
                    {name: '实习生', query: 'sxs'},
                ],
                terms: [
                    {name: '甲' },
                    {name: '乙' },
                    {name: '丙' },
                    {name: '丁' },
                ],
                success: true
            };
        },
        methods: {
            changeStatus(val) {
                this.status = val;
            },
            focus(i) {
                this.form[i].focus = true;
            },
            unFocus(i) {
                this.form[i].focus = false;
            },
            select1() {
                this.form[2].focus = true;
                this.show1 = true;
            },
            select2() {
                this.form[3].focus = true;
                this.show2 = true;
            },
            onSelect1(item) {
                this.section = item.name;
                this.query = item.query;
                this.show1 = false;
            },
            onCancel1() {
                this.show1 = false;
            },
            onSelect2(item) {
                this.term = item.name;
                this.show2 = false;
            },
            onCancel2() {
                this.show2 = false;
            },
            submit() {
                axios.get('http://119.23.189.182:80/users/addUser', {
          params: {
            section: this.query,
            username: this.username, 
            name:this.name, 
            term:this.term, 
            password: this.password
          }
        }).then(res => {
            console.log(res.data)

                Toast('添加成功');
       
        }).catch(err => {
            console.log(params)
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
            }
        }
    };
</script>
<style scoped>
    .box {
        width: 100%;
        height: 100%;
    }

    .bg {
        width: 100%;
        height: 100%;
    }

    input,
    textarea {
        -webkit-appearance: none;
    }

    .box_login {
        width: 80%;
        max-width: 320px;
        height: auto;
        min-height: 320px;
        max-height: 500px;
        margin: auto;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 5px 0 #999;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 5px;
    }

    .box-input {
        height: auto;
    }

    .input {
        width: 100%;
        height: 64px;
        display: table-cell;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #input1 {
        flex: 4;
    }

    #input2,
    #input3 {
        flex: 3;
    }

    #input4 {
        flex: 3;
    }

    #input5 {
        flex: 2;
    }

    .title {
        font-size: 24px;
    }

    .jump {
        font-size: 12px;
        color: #05c1ff;
    }

    .border {
        width: 75%;
        height: 45px;
        border-radius: 30px;
        background: #fff;
        box-shadow: 0 0 2px 0 #999;
    }

    .focus {
        border: 2px solid #f8a227;
        box-shadow: 0 0 5px 0 #f8a227;
    }

    .box_icon {
        width: 15%;
        height: 100%;
        display: inline-block;
        float: left;
        position: relative;
    }

    .icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -10px;
        /* 高度的一半 */
        margin-left: -10px;
        /* 宽度的一半 */
    }

    .input_username,
    .input_password {
        height: 44px;
        width: 70%;
        margin: 0 auto;
        padding-top: 1px;
        display: block;
        border: none;
        outline: none;
        font-size: 16px;
        display: inline-block;
        float: left;
    }

    .login {
        width: 50%;
        height: 45px;
        background: #ffc107;
        border: none;
        border-radius: 30px;
        color: #fff;
        font-size: 18px;
        outline: none;
        box-shadow: 1px 1px 5px 0 #999;
    }

    .login:active {
        box-shadow: -1px -1px 5px 0 #999 inset;
    }
</style>