<template>
  <!--推荐主页-->
  <div class="main">
    <div class="searchBox">
      <div class="search"><img src="../assets/home/icon_searchBar_search.png"><input type="text" placeholder="搜一搜"></div>
    </div>
    <!--景点推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>景点推荐</p>
      </div>
      <div class="right">
        <a>
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg"><p>南山寺</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>蜈支洲岛</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>三亚千古情</p></div>
      </div>
    </div>
    <!--酒店推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>酒店推荐</p>
      </div>
      <div class="right">
        <a>
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg"><p>三亚湾酒店</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>凤凰岛</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>凤凰岛</p></div>
      </div>
    </div>
    <!--餐厅推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>餐厅推荐</p>
      </div>
      <div class="right">
        <a>
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg"><p>容三亚餐厅美食推荐</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>三亚湾酒店</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>三亚千古情</p></div>
      </div>
    </div>
    <!--购物推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>购物推荐</p>
      </div>
      <div class="right">
        <a>
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg"><p>三亚海棠湾国际购物中心</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>购物中心</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg"><p>购物中心</p></div>
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
    .itemT{
      margin: .3rem .3rem 0 .3rem;
      display: flex;
      .itemTBody{
        flex: 1;
        .itemTImg{
          color: #fff;
          width: 2rem;
          line-height: 1.5rem;
          font-size: .3rem;
          font-family:PingFangSC-Regular;
          background-image: url('../assets/sample/img_recommend_subject1.png');
          background-Repeat: no-repeat;
          background-position: center;
          background-size: cover;
          border-radius: .08rem;
          P{
            height: 1.5rem;
            width: 2rem;
            background-color: rgba(0,0,0,0.2);
            border-radius: .08rem
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
  }
</style>
