<template>
  <!--推荐主页-->
  <div class="main">
    <div class="slide">
      <div class="slideshow" @mouseover="stop()" @mouseout="move()">
        <!--<ul>-->
          <transition-group tag="ul" name="image">
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
              <a href="#">
                <img :src='img'>
              </a>
            </li>
          </transition-group>
        <!--</ul>-->
      </div>
      <div class="bar">
        <!--<span></span>-->
        <!--<span v-for="(item, index) in imgArray" :key="index"></span>-->
      </div>
    </div>
    <!--<div class="topimg" :style="{ 'background-image' : banner }"></div>-->
      <div class="search"><img src="../assets/home/icon_searchBar_search.png"><input type="text" placeholder="搜一搜"></div>
      <!--精选专题-->
      <div class="itemTitle">
        <div class="left">
          <p>精选专题</p>
        </div>
        <div class="right">
          <a @click="goMore">
            <span>更多</span><img src="../assets/home/icon_arrow_more.png">
          </a>
        </div>
      </div>
      <div class="itemT">
        <div class="itemTBody" @click="goChoiceDetail(goodData[0].id)">
          <div class="itemTImg" :style="{ 'background-image' : goodData[0].image}"><p>{{goodData[0].name}}</p></div>
          <p class="itemTxt">{{goodData[0].title}}</p>
        </div>
        <div class="itemTBody" @click="goChoiceDetail(goodData[1].id)">
          <div class="itemTImg" :style="{ 'background-image' : goodData[1].image}"><p>{{goodData[1].name}}</p></div>
          <p class="itemTxt">{{goodData[1].title}}</p>
        </div>
        <div class="itemTBody" @click="goChoiceDetail(goodData[2].id)">
          <div class="itemTImg" :style="{ 'background-image' : goodData[2].image}"><p>{{goodData[2].name}}</p></div>
          <p class="itemTxt">{{goodData[2].title}}</p>
        </div>
      </div>
      <!--分类-->
      <div class="tabbar">
        <div class="item" :class="{ active: isActive('0') }" @click="getStrategy(0)">全部</div>
        <div class="item" :class="{ active: isActive('1') }" @click="getStrategy(1)">游记</div>
        <div class="item" :class="{ active: isActive('2') }" @click="getStrategy(2)">商城</div>
        <div class="item" :class="{ active: isActive('3') }" @click="getStrategy(3)">问答</div>
        <div class="item" :class="{ active: isActive('4') }" @click="getStrategy(4)">干货</div>
      </div>
      <div class="itemO" v-for="(value, index) in Article" :key = "index" @click="goTravelDetail(value.id)">
        <div class="img" :style="{ 'background-image' : value.image}"></div>
        <div class="txt">
          <p class="title">{{value.title}}</p>
          <p>{{value.abstract}}</p>
        </div>
      </div>
      <!--限时立减-->
      <div class="itemTitle" style="display: none">
        <div class="left">
          <p>限时立减</p>
        </div>
        <div class="right">
        </div>
      </div>
      <div class="itemTwo" style="display: none">
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
    this.getBanner();
    this.goodChose();
    this.getStrategy(0);
    this.play()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTab:'0',
      banner: '',
      bannerNum: 1,
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      imgArray: [
        'http://12301.sy.hn/uploads/20180525/6b078a4b40f24a6753a5d1e253353850.jpg',
        'http://12301.sy.hn/uploads/20180525/84bc48581bc3d1a5da59ad2a42e0060e.jpg',
        'http://12301.sy.hn/uploads/20180525/5487fe221fb7428d80dbadff9d91d405.png'
      ],
      goodData: [
        {
          image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg",
          title:"暂无",
          id:-1,
          name:'暂无'
        },
        {
          image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg",
          title:"暂无",
          id:-1,
          name:'暂无'
        },
        {
          image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg",
          title:"暂无",
          id:-1,
          name:'暂无'
        },
      ],
      Article: [
        {
          abstract: "暂无",
          image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg",
          title:'暂无'
        }
      ]
    }
  },
  methods: {
    //轮播图开始
    autoPlay () {
      this.mark++;
      if (this.mark === this.bannerNum) { //当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play () {
//      setInterval(this.autoPlay, 2500)
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    //轮播图结束
    goTravelDetail(val){
      this.$router.push({path: '/travelsDetail',query: {id: val}})
    },
    goChoiceDetail(val){
      if(val!=-1){
        this.$router.push({path: '/goodChoiceDetail',query: {id: val}})
      }
    },
    isActive (tabIndex) {
      return tabIndex == this.activeTab
    },
    goMore(){
      this.$router.push({path: '/goodChoiceList'})
    },
    getBanner(){
//      req.get('mock')
      let vm = this;
      req.get('/banner')
        .then(function (response) {
          vm.banner = "url("+response.data.data.image+")";
          console.log('11111111');
          if(response.data.data){
            vm.imgArray=[]
            for(let i=0;i<response.data.data.length;i++){
              vm.imgArray.push(response.data.data[i].image)
            }
            vm.bannerNum=response.data.data.length
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    goodChose(){
      let vm = this;
      req.get('/select_title')
        .then(function (response) {
          if(response.data.data){
            for(let i=0;i<response.data.number;i++){
                vm.goodData[i] = response.data.data[i];
                vm.goodData[i].image= "url("+vm.goodData[i].image+")";
            }
          }
          console.log('精选');
          console.log(response.data);
          console.log(vm.goodData);
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getStrategy(val){
      let vm = this;
      this.activeTab =val;
      req.get('/travel', {params: {
        type: val
      }})
        .then(function (response) {
          if(response.data.data){
            vm.Article = response.data.data;
            for(let i=0;i<vm.Article.length;i++){
              vm.Article[i].image= "url("+vm.Article[i].image+")";
            }
          }
          console.log('--------');
          console.log(vm.Article);
          console.log('--------');
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
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .main{
      background-color: #f5f5f5;
      .slide{
        /*width: 1024px;*/
        height: 3.98rem;
        overflow: hidden;
        position: relative;
        .slideshow {
          /*width: 1024px;*/
          height: 3.98rem;
        }
        li {
          position: absolute;
        }
        .topimg {
          /*width: 1024px;*/
          height: 3.98rem;
        }
        img {
          width: 7.5rem;
          /*width: 100%;*/
          height: 3.98rem;
        }
        .bar {
          position: absolute;
          width: 100%;
          bottom: .10rem;
          margin: 0 auto;
          z-index: 10;
          text-align: center;
        }
        .bar span {
          width: .20rem;
          height: .05rem;
          border: .01rem solid;
          background: white;
          display: inline-block;
          margin-right: .10rem;
        }
        .active {
          background: red !important;
        }
      }
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
        margin: .3rem .1rem 0 .3rem;
        display: flex;
        .itemTBody{
          flex: 1;
          .itemTImg{
            color: #fff;
            width: 2.1rem;
            line-height: 2.1rem;
            font-size: .3rem;
            font-family:PingFangSC-Regular;
            background-image: url('../assets/sample/img_recommend_subject1.png');
            background-Repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 8px;
            P{
              height: 2.1rem;
              width: 2.1rem;
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
