<template>
  <!--目的地更多-->
  <div class="main">
    <div class="headBox">
      <div class="title"><img @click="goback()" src="../assets/home/icon_arrow_back.png"><div>目的地详情</div></div>
    </div>
    <div class="card">
      <div class="img" :style="{ 'background-image' : image }"></div>
      <div class="title">{{title}}</div>
      <div class="star">
        <img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><img src="../assets/home/icon_evaluation_star_shine.png"><span>（查看230条点评）</span>
      </div>
      <div class="label"><span v-for="(value, index) in tab" :key = "index">{{value[index]}}</span></div>
    </div>
    <!--基础信息-->
    <div class="itemTitle space">
      <div class="left">
        <p>基础信息</p>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="message">
      <div class="introduce">{{abstract}}</div>
      <div class="ticket">
        <div class="title">门票</div>
        <div class="content">{{ticket}}</div>
      </div>
      <div class="ticket">
        <div class="title">地址</div>
        <div class="content">{{address}}</div>
      </div>
      <div></div>
    </div>
    <!--旅行商城-->
    <div class="itemTitle" style="display: none">
      <div class="left">
        <p>旅行商城</p>
      </div>
      <div class="right">
        <a>
          <span>查看更多折扣</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="shop" style="display: none">
      <div class="img"></div>
      <div class="txt">
        <div class="title">三亚3天2夜纯玩套餐</div>
        <div class="price">
          <div class="left">¥999.00</div>
          <div class="right">已售2011件</div>
        </div>
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
    <div class="comment">
      <div class="title">
        <div class="img" :style="{ 'background-image' : detailData[0].user_image?detailData[0].user_image: 'url(http://12301.sy.hn//uploads/20180521/3162786f053985ae772da5ac1eb68889.jpg)'}"></div>
        <div class="txt">
          <div class="left">{{detailData[0].user_name?detailData[0].user_name:'暂无'}}</div>
          <div class="right">{{detailData[0].time?detailData[0].time:'2018-06-10 11:16:22'}}</div>
        </div>
      </div>
      <div class="content">{{detailData[0].abstract?detailData[0].abstract:'暂无'}}</div>
    </div>
    <!--相关游记-->
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
    <div class="travels">
      <div class="title">相关游记标题</div>
      <div class="content">千古情景区是来三亚必到的经典景区。同天涯海角一样，来到三亚不去三亚千古情景区也会遗憾的！整个景区叫三亚宋城旅游区，里面包含四个景区：三亚千古情景区、三亚宋...</div>
      <div class="user">
        <div class="img"></div>
        <div class="name">海外游客</div>
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
      this.getDetail()
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        image: this.$route.query.image,
        title: this.$route.query.title,
        tab: this.$route.query.tab,
        abstract: this.$route.query.abstract,
        ticket: this.$route.query.ticket,
        address: this.$route.query.address,
        detailData: [
          {
            user_image:null,
            user_name:null,
            time:null,
            abstract:null,
          }
        ]
      }
    },
    methods: {
      getDetail(){
        let vm = this;
        req.get('/assess', {params: {
          id: this.$route.query.id
        }})
          .then(function (response) {
            vm.detailData = response.data.data;
            for(let i=0;i<vm.detailData.length;i++){
              vm.detailData[i].user_image= "url("+vm.detailData[i].user_image+")";
            }
            console.log(vm.detailData);
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      goback(){
        this.$router.push({path: '/destinationMore'});
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
    .message{
      box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
      background-color: #fff;
      margin: .3rem .3rem 0 .3rem;
      padding: .38rem .35rem;
      font-size:.24rem;
      font-family:PingFangSC-Regular;
      color:rgba(153,153,153,1);
      .introduce{
        font-size:.24rem;
        font-family:PingFangSC-Regular;
        color:rgba(153,153,153,1);
      }
      .ticket{
        display: flex;
        .title{
          margin-top: .3rem;
          font-size:.28rem;
          font-family:PingFangSC-Regular;
          color:rgba(51,51,51,1);
          width: 1rem;
        }
        .content{
          margin-top: .3rem;
          flex:1;
          text-align: left;
        }
      }
    }
    .shop{
      box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
      border-radius: .08rem;
      background-color: #fff;
      margin: .3rem .3rem 0 .3rem;
      padding: .2rem;
      font-size:.24rem;
      font-family:PingFangSC-Regular;
      color:rgba(153,153,153,1);
      display: flex;
      .img{
        width: 1.6rem;
        height: 1.6rem;
        background-image: url('../assets/sample/img_recommend_subject1.png');
        background-Repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .txt{
        margin-left: .3rem;
        width: 4.5rem;
        .title{
          text-align: left;
          font-size:.28rem;
          font-family:PingFangSC-Regular;
          color:rgba(51,51,51,1);
        }
        .price{
          display: flex;
          margin-top: .86rem;
          .left{
            flex: 1;
            text-align: left;
            font-size:.28rem;
            font-family:SFUIDisplay-Regular;
            color:rgba(255,136,48,1);
          }
          .right{
            flex: 1;
            text-align: right;
          }
        }
      }
    }
    .comment{
      box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
      border-radius: .08rem;
      background-color: #fff;
      margin: .3rem .3rem 0 .3rem;
      padding: .38rem .35rem;
      font-size:.24rem;
      font-family:PingFangSC-Regular;
      color:rgba(153,153,153,1);
      .title{
        display: flex;
        .img{
          width: .68rem;
          height: .68rem;
          border-radius: .34rem;
          background-image: url('../assets/sample/img_recommend_subject1.png');
          background-Repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .txt{
          flex: 1;
          display: flex;
          line-height: .68rem;
          .left{
            margin-left: .26rem;
            flex: 1;
            text-align: left;
            font-size:.28rem;
            font-family:PingFangSC-Regular;
            color:rgba(51,51,51,1);
          }
          .right{
            flex: 1;
            text-align: right;
          }
        }
      }
      .content{
        text-align: left;
        margin-top: .2rem;
      }
    }
    .travels{
      box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
      border-radius: .08rem;
      background-color: #fff;
      margin: .3rem .3rem 0 .3rem;
      padding: .38rem .35rem;
      font-size:.24rem;
      font-family:PingFangSC-Regular;
      color:rgba(153,153,153,1);
      text-align: left;
      .title{
        font-size:.32rem;
        font-family:PingFangSC-Semibold;
        color:rgba(51,51,51,1);
        font-weight: bold;
      }
      .content{
        font-size:.24rem;
        font-family:PingFangSC-Regular;
        color:rgba(51,51,51,1);
        margin: .3rem 0;
      }
      .user{
        display: flex;
        .img{
          width: .5rem;
          height: .5rem;
          border-radius: .25rem;
          background-image: url('../assets/sample/img_recommend_subject1.png');
          background-Repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .name{
          line-height: .5rem;
          margin-left: .2rem;
        }
      }
    }
  }
</style>
