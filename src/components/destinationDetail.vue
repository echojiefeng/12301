<template>
  <!--目的地更多-->
  <div class="main">
    <div class="headBox">
      <div class="title"><img src="../assets/home/icon_arrow_back.png"><div>目的地详情</div></div>
    </div>
    <div class="card">
      <div class="img"></div>
      <div class="title">三亚千古情景区</div>
      <div class="star">
        <img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><span>（查看230条点评）</span>
      </div>
      <div class="label"><span>千古情</span><span>三亚</span><span>三亚</span></div>
    </div>
    <!--基础信息-->
    <div class="itemTitle space">
      <div class="left">
        <p>基础信息</p>
      </div>
      <div class="right">
      </div>
    </div>
    <!--旅行商城-->
    <div class="itemTitle">
      <div class="left">
        <p>旅行商城</p>
      </div>
      <div class="right">
        <a>
          <span>查看更多折扣</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <!--点评-->
    <div class="itemTitle">
      <div class="left">
        <p>点评</p>
      </div>
      <div class="right">
        <a>
          <span>查看全部点评（共260条）</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemTitle">
      <div class="left">
        <p>相关游记</p>
      </div>
      <div class="right">
        <a>
          <span>搜索更多相关游记</span><img src="../assets/home/icon_arrow_more.png">
        </a>
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
    .space{
      margin-top: 3.86rem!important;
    }
    .blankSpace{
      height: 1.05rem;
    }
    .headBox{
      background: linear-gradient(#0080FF, #0096FF);
      padding: .35rem 0 .12rem 0;
      .title{
        margin: 0 auto;
        width: 6.9rem;
        height: 2.6rem;
        font-size:.36rem;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        display: flex;
        img{
          width: .16rem;
          height: .3rem;
          margin-top: .1rem;
        }
        div{
          flex: 1;
          text-align: center;
        }
      }
    }
    .card{
      box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
      margin: 0 .3rem;
      padding: .2rem;
      background-color: #fff;
      border-radius: .08rem;
      text-align: left;
      position: absolute;
      top: .88rem;
      .img{
        width: 6.5rem;
        height: 3.4rem;
        background-image: url('../assets/sample/img_recommend_subject1.png');
        background-Repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .title{
        font-size:.32rem;
        line-height: .6rem;
        font-family:PingFangSC-Regular;
        color:rgba(51,51,51,1);
      }
      .star{
        line-height: .5rem;
        font-size:.24rem;
        font-family:PingFangSC-Regular;
        color:rgba(0,128,255,1);
        img{
          width: .22rem;
          height: .22rem;
        }
      }
      .label{
        line-height: .6rem;
        span{
          border-radius: .04rem;
          font-size:.22rem;
          font-family:PingFangSC-Regular;
          color:rgba(0,128,255,1);
          border: .02rem solid #0080FF;
          margin-right: .2rem;
          padding: .05rem;
        }
      }
    }
    .itemTitle{
      display: flex;
      margin: .5rem .3rem 0 .3rem;
      .left{
        flex: 1;
        text-align: left;
        font-size: .28rem;
        font-family:PingFangSC-Semibold;
        font-weight: bold;
        border-left: .04rem solid rgba(0,128,255,1);
        p{
          margin-left: .14rem;
        }
      }
      .right{
        flex: 1;
        text-align: right;
        font-size: .24rem;
        a {
          display: inline-block;
          vertical-align: middle;
          span {
            color:rgba(0,128,255,1);
            vertical-align: middle;
          }
          img {
            height: .22rem;
            vertical-align: middle;
            margin-left: .11rem;
          }
        }
      }
    }
  }
</style>
