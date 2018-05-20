<template>
  <!--目的地-->
  <div class="main">
    <div class="searchBox">
      <div class="search"><img src="../assets/home/icon_searchBar_search.png"><input type="text" placeholder="搜一搜"></div>
    </div>
    <div class="item">
      <div class="img"></div>
      <div class="txt">
        <div class="title">三亚千古情景区</div>
        <div>海南省三亚市迎宾路333号</div>
        <div class="star"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"></div>
      </div>
    </div>
    <div class="blankSpace"></div>
  </div>
</template>

<script>
  import {req} from '@/request'
  export default {
//  name: 'main',
    created () {
      this.test()
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      test(){
        req.get('mock')
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main{
    background-color: #f5f5f5;
    min-height: 100vh;
    .blankSpace{
      height: 1.05rem;
    }
    .searchBox{
      background: linear-gradient(#0080FF, #0096FF);
      padding: .35rem 0 .12rem 0;
      .search{
        background-color: #fff;
        margin: 0 auto;
        width: 6.9rem;
        height: .9rem;
        box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
        border-radius: .45rem;
        display: flex;
        img{
          width: .32rem;
          height: .32rem;
          margin: .29rem .15rem .29rem .4rem;
        }
        input{
          border: none;
          width: 5.5rem;
          font-size: .28rem;
        }
      }
    }
    .item{
      background-color: #fff;
      margin: .3rem .3rem 0 .3rem;
      padding: .2rem;
      display: flex;
      .img{
        width: 1.6rem;
        height: 1.6rem;
        background-image: url('../assets/sample/img_recommend_subject1.png');
        background-Repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: .08rem;
        margin-right: .3rem;
      }
      .txt{
        flex:1;
        text-align: left;
        font-size:.24rem;
        line-height: .4rem;
        font-family:PingFangSC-Regular;
        color:rgba(153,153,153,1);
        .title{
          font-size:.3rem;
          color:rgba(51,51,51,1);
          line-height: .5rem;
        }
        .star{
          text-align: right;
          margin-top: .3rem;
          img{
            width: .22rem;
            height: .22rem;
          }
        }
      }
    }
  }
</style>
