<template>
  <!--推荐主页-->
  <div class="Detail">
        <div class="img" :style="{ 'background-image' : detail.image}">
          <div class="bar">专题</div>
        </div>
        <div class="title">
            <div class="maintitle">{{detail.name}}</div>
            <div class="small">{{detail.title}}</div>
        </div>
        <div class="futxt" v-html="detail.abstract"></div>
        <!--<div class="img" :style="{ 'background-image' : value.image}">-->
          <!--<div class="bar">专题</div>-->
        <!--</div>-->
        <!--<div class="txt">-->
          <!--<p class="title">{{value.name}}</p>-->
          <!--<p>{{value.title}}</p>-->
        <!--</div>-->

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
      activeTab:'0',
      banner: '',
      detail: '',
    }
  },
  methods: {
    isActive (tabIndex) {
      return tabIndex == this.activeTab
    },
    getDetail(){
      let vm = this;
      req.get('/jingxuan_detail',{params: {
        id: this.$route.query.id
      }})
        .then(function (response) {
          console.log('--------');
          vm.detail = response.data.data
            vm.detail.image= "url("+vm.detail.image+")";
          console.log(vm.detail);
          console.log('--------');
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    goodChose(){
      let vm = this;
      req.get('/select_title')
        .then(function (response) {
          vm.goodData = response.data.data;
          if(response.data.data){
            for(let i=0;i<vm.goodData.length;i++){
              vm.goodData[i].image= "url("+vm.goodData[i].image+")";
            }
          }
          console.log('精选');
          console.log(vm.goodData);
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getStrategy(val){
      let vm = this;
      this.activeTab =val;
      if(val==0){
        val = 1
      }
      req.get('/travel', {params: {
        type: val
      }})
        .then(function (response) {
          if(response.data.data){
            vm.Article = response.data.data;
            for(let i=0;i<vm.Article.length;i++){
              vm.Article[i].image= "url("+vm.Article[i].image+")";
            }
            console.log(vm.Article);
          }
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
    .Detail{
      background-color: #fff;
      height: 100vh;
      .img{
        width: 100%;
        height: 3.90rem;
        background-image: url('../assets/sample/img_recommend_banner1.png');
        background-Repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #464646;
        .bar{
          position: relative;
          top:.3rem;
          left: .3rem;
          border-radius: .18rem;
          width:.70rem;
          line-height:.36rem;
          background:rgba(0,128,255,1);
          opacity:0.5;
          font-size:.20rem;
          font-family:PingFangSC-Regular;
          color:rgba(255,255,255,1);
        }
      }
      .title{
        padding: .5rem .3rem .6rem .3rem;
        border-bottom: .01rem solid #E5E5E5;
        text-align: left;
        .maintitle{
          font-size:.40rem;
          font-weight: bold;
          font-family:PingFangSC-Semibold;
          color:rgba(51,51,51,1);
          line-height:.48rem;
        }
        .small{
          margin-top: .3rem;
          font-size:.24rem;
          font-family:PingFangSC-Regular;
          color:rgba(153,153,153,1);
          line-height:.36rem;
        }
      }
      .futxt{
        padding: .8rem .3rem;
      }
    }
    .main{
      background-color: #f5f5f5;
      height: 100vh;
      .active{
        color:rgba(0,128,255,1) !important;
        border-bottom: .04rem solid #0080ff;
      }
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
          .bar{
            position: relative;
            top:.3rem;
            left: .3rem;
            border-radius: .18rem;
            width:.70rem;
            line-height:.36rem;
            background:rgba(0,128,255,1);
            opacity:0.5;
            font-size:.20rem;
            font-family:PingFangSC-Regular;
            color:rgba(255,255,255,1);
          }
        }
        .txt{
          text-align: left;
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
