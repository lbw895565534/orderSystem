<template>
  <div class="container">
    <van-nav-bar :title="name" right-text="添加" @click-right="onClickRight" fixed />
    <div class="box">
      <div class="item">
        <el-card class="box-card" v-for="(a,index) in articles" :key="a.id">
          <div>
            <div class="text item" @click="open(a)">
              <span>{{ index+1 }}.</span>
              <span>{{ a.title }}</span>
            </div>
            <br>
            <div class="text item">
              <el-tag v-if="a.site1" @click="open(a)">{{ a.site1 }}</el-tag>&nbsp;
              <el-tag v-if="a.site2" @click="open(a)">{{ a.site2 }}</el-tag>&nbsp;
              <el-tag v-if="a.site3" @click="open(a)">{{ a.site3 }}</el-tag>
            </div>
            <br height="5px">
            <div class="text item">
              
               <el-button style="color: #f56c6c" type="text" class="button btn-del" @click="submit2(a.id)">删除文章</el-button>
               <el-button type="text" class="button btn-copy"
                v-clipboard:copy="'肇庆车务段推荐网评：'+'\n'+a.name+'：' +a.title+'\n'+a.site1+'：'+a.link1+'\n'+a.site2+'：'+a.link2+'\n'+a.site3+'：'+a.link3"
                v-clipboard:success="onCopy" v-clipboard:error="onError">复制格式</el-button> 
              <!-- <span>
                <el-button type="primary" icon="el-icon-edit" circle
                  v-clipboard:copy="'肇庆车务段推荐网评：'+'\n'+a.name+'：' +a.title+'\n'+a.site1+'：'+a.link1+'\n'+a.site2+'：'+a.link2+'\n'+a.site3+'：'+a.link3"
                  v-clipboard:success="onCopy" v-clipboard:error="onError"></el-button>
              </span>
              <span style="float: right;">
                <el-button type="danger" icon="el-icon-delete" circle @click="submit2(a.id)"></el-button>
              </span> -->
            </div>
          </div>

        </el-card>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'Axios';
  import {
    NavBar,
    Dialog,
    Toast
  } from 'vant';

  export default {
    data() {
      return {
        articles: [],
        userid: window.localStorage.getItem("id"),
        name: window.localStorage.getItem("name"),
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        axios.get('http://119.23.189.182:80/articles/getArticle', {
          params: {
            userid: this.userid
          }
        }).then(res => {
          this.articles = res.data;
          console.log(this.name)
          for (var i = 0; i < this.articles.length; i++) {
            this.articles[i].name = this.name.replace(/[\r\n]/g, "");
          }
        }).catch(err => {
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },
      onClickRight() {
        this.$router.push({
          name: 'Addarticle'
        });
      },
      open(i) {
        Dialog.confirm({
          title: '是否修改',
          message: i.title
        }).then(() => {
          this.$router.push({
            name: 'Alterarticle',
            params: {
              articleTemp: i
            }
          });
        }).catch(() => {

        });
        axios.get('http://119.23.189.182:80/articles/showArticle', {
          params: {
            id: i
          }
        }).then(res => {
          this.temp = res.data[0];
        }).catch(err => {

          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },
      // 复制成功
      onCopy(e) {
        this.$message({
          type: 'success',
          message: '复制成功'
        })
        // console.log(e)
      },
      // 复制失败
      onError(e) {
        this.$message({
          type: 'warning',
          message: '复制失败'
        })
        //console.log(this);
      },
      submit2(i) {
        Dialog.confirm({
          title: '是否删除',
          message: this.title
        }).then(() => {
          this.del(i);
        }).catch(() => {
          // on cancel
        });
      },

      del(i) {
        axios.get('http://119.23.189.182:80/articles/removeArticle', {
          params: {
            id: i,
          }
        }).then(res => {
          Toast.success('删除成功');
          this.init();
        }).catch(err => {
          Toast.fail('提交异常');
          console.log('请求失败:' + err.status + ',' + err.statusText);
        });
      },
    },


  }

</script>

<style scoped>
  .container {
    height: 100%;
    width: 100%;
    background-color: #f8f8f8;
  }

  .box {
    width: 100%;
    background-color: #f8f8f8;
    padding-top: 56px;
    padding-bottom: 20px;
  }


  .el-card {
    margin: 30px !important;
  }

  .btn-copy {
    float: right;
    position: inherit;
    padding: 0;
    line-height: 36px;
    margin-right: 15px;
  }

  .btn-del {
    float: right;
    position: inherit;
    padding: 0;
    line-height: 36px;
  }

  .el-message--success {
    position: absolute;
    top: 0;
  }

</style>
