<template>
  <!--推荐主页-->
  <div class="main">
      <div class="topimg"></div>
      <div class="search"><img src="../assets/home/icon_searchBar_search.png"><input type="text" placeholder="搜一搜"></div>
      <!--精选专题-->
      <div class="itemTitle">
        <div class="left">
          <p>精选专题</p>
        </div>
        <div class="right">
          <a>
            <span>更多</span><img src="../assets/home/icon_arrow_more.png">
          </a>
        </div>
      </div>
      <div class="itemT">
        <div class="itemTBody">
          <div class="itemTImg"><p>玩遍三亚</p></div>
          <p class="itemTxt">玩遍全三亚主会
            场分会场</p>
        </div>
        <div class="itemTBody">
          <div class="itemTImg"><p>玩遍三亚</p></div>
          <p class="itemTxt">玩遍全三亚主会
            场分会场</p>
        </div>
        <div class="itemTBody">
          <div class="itemTImg"><p>玩遍三亚</p></div>
          <p class="itemTxt">玩遍全三亚主会
            场分会场</p>
        </div>
      </div>
      <!--分类-->
      <div class="tabbar">
        <div class="item">全部</div>
        <div class="item">游记</div>
        <div class="item">商城</div>
        <div class="item">问答</div>
        <div class="item">干货</div>
      </div>
      <div class="itemO">
        <div class="img"></div>
        <div class="txt">
          <p class="title">带父母和小孩来三亚，合适么？</p>
          <p>美食、美景、友善、好客、高效、服务好，就是对三亚的第一印象</p>
        </div>
      </div>
      <!--限时立减-->
      <div class="itemTitle">
        <div class="left">
          <p>限时立减</p>
        </div>
        <div class="right">
        </div>
      </div>
      <div class="itemTwo">
        <div class="item">
          <div class="img"></div>
          <div class="txt">
            <p>三亚3天2夜纯玩套餐</p>
            <span>¥999</span><span>.00</span>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="txt">
            <p>三亚3天2夜纯玩套餐</p>
            <span>¥999</span><span>.00</span>
          </div>
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
      .blankSpace{
        height: 1.05rem;
      }
      .topimg{
        width: 100%;
        height: 3.98rem;
        background-image: url('../assets/sample/img_recommend_banner1.png');
        background-Repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #464646;
      }
      .search{
        background-color: #fff;
        position: relative;
        top: -0.45rem;
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
      .itemTitle{
        display: flex;
        margin: 0 .3rem;
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
      .itemT{
        margin: .3rem .3rem 0 .3rem;
        display: flex;
        .itemTBody{
          flex: 1;
          .itemTImg{
            color: #fff;
            width: 2rem;
            line-height: 2rem;
            font-size: .3rem;
            font-family:PingFangSC-Regular;
            background-image: url('../assets/sample/img_recommend_subject1.png');
            background-Repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 8px;
            P{
              height: 2rem;
              width: 2rem;
              background-color: rgba(0,0,0,0.2);
              border-radius: 8px
            }
          }
          .itemTxt{
            height: .92rem;
            width: 2rem;
            font-size: .24rem;
            font-family:PingFangSC-Regular;
            color:rgba(153,153,153,1);
            line-height: .36rem;
          }
        }
      }
      .tabbar{
        padding: 0 .3rem;
        line-height: .9rem;
        background-color: #fff;
        display: flex;
        .item{
          flex: 1;
          font-size:.28rem;
          font-family:PingFangSC-Regular;
          color:rgba(153,153,153,1);
        }
      }
      .itemO{
        background-color: #fff;
        margin: .3rem .3rem;
        border-radius: .08rem;
        box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
        .img{
          height: 3.17rem;
          background-image: url('../assets/sample/img_recommend_raiders1.png');
          background-Repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-radius: 0.08rem 0.08rem 0 0;
        }
        .txt{
          padding: .3rem .4rem .44rem .4rem;
          font-size:.24rem;
          font-family:PingFangSC-Regular;
          color:rgba(153,153,153,1);
          .title{
            font-size:.32rem;
            font-family:PingFangSC-Semibold;
            color:rgba(51,51,51,1);
            margin-bottom: .2rem;
          }
        }
      }
      .itemTwo{
        margin: .3rem;
        display: flex;
        box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
        .item{
          flex: 1;
          width: 3.0rem;
          background-color: #fff;
          padding: .2rem .15rem;
          border-radius: .08rem;
          text-align: left;
          .img{
            height: 3rem;
            width: 3rem;
            background-image: url('../assets/sample/img_destination_cttj1.png');
            background-Repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
          p{
            font-size:.28rem;
            font-family:PingFangSC-Regular;
            color:rgba(51,51,51,1);
            margin: .2rem 0;
          }
          span{
            font-size:.24rem;
            font-family:SFUIDisplay-Regular;
            color:rgba(255,136,48,1);
          }
          .small{
            font-size:.1rem;
          }
        }
      }
    }
</style>
