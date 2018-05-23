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
        <a @click="goDetail('景点推荐')">
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : SceneryData[0].image }"><p>{{SceneryData[0].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : SceneryData[1].image }"><p>{{SceneryData[1].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : SceneryData[2].image }"><p>{{SceneryData[2].title}}</p></div>
      </div>
    </div>
    <!--酒店推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>酒店推荐</p>
      </div>
      <div class="right">
        <a @click="goDetail('酒店推荐')">
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : HotelData[0].image }"><p>{{HotelData[0].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : HotelData[1].image }"><p>{{HotelData[1].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : HotelData[2].image }"><p>{{HotelData[2].title}}</p></div>
      </div>
    </div>
    <!--餐厅推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>餐厅推荐</p>
      </div>
      <div class="right">
        <a @click="goDetail('餐厅推荐')">
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : RestaurantData[0].image }"><p>{{RestaurantData[0].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : RestaurantData[1].image }"><p>{{RestaurantData[1].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : RestaurantData[2].image }"><p>{{RestaurantData[2].title}}</p></div>
      </div>
    </div>
    <!--购物推荐-->
    <div class="itemTitle">
      <div class="left">
        <p>购物推荐</p>
      </div>
      <div class="right">
        <a @click="goDetail('购物推荐')">
          <span>更多</span><img src="../assets/home/icon_arrow_more.png">
        </a>
      </div>
    </div>
    <div class="itemT">
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : ShoppingData[0].image }"><p>{{ShoppingData[0].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : ShoppingData[1].image }"><p>{{ShoppingData[1].title}}</p></div>
      </div>
      <div class="itemTBody">
        <div class="itemTImg" :style="{ 'background-image' : ShoppingData[2].image }"><p>{{ShoppingData[2].title}}</p></div>
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
      this.Scenery();
      this.getHotel();
      this.getRestaurant();
      this.getShopping();
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        SceneryData: [
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          }
        ],
        RestaurantData: [
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          }
        ],
        HotelData: [
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          }
        ],
        ShoppingData: [
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          },
          {
            title:'暂无',
            image:"http://12301.sy.hn//uploads/20180522/c3458e485048455af54befb779fdab22.jpg"
          }
        ]
      }
    },
    methods: {
      Scenery(){
        let vm = this;
        req.get('/product', {params: {
          type: '景点推荐'
        }})
          .then(function (response) {
            vm.SceneryData = response.data.data;
            for(let i=0;i<vm.SceneryData.length;i++){
              vm.SceneryData[i].image= "url("+vm.SceneryData[i].image+")";
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getHotel(){
        let vm = this;
        req.get('/product', {params: {
          type: '酒店推荐'
        }})
          .then(function (response) {
            vm.HotelData = response.data.data;
            for(let i=0;i<vm.HotelData.length;i++){
              vm.HotelData[i].image= "url("+vm.HotelData[i].image+")";
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getRestaurant(){
        let vm = this;
        req.get('/product', {params: {
          type: '餐厅推荐'
        }})
          .then(function (response) {
            vm.RestaurantData = response.data.data;
            for(let i=0;i<vm.RestaurantData.length;i++){
              vm.RestaurantData[i].image= "url("+vm.RestaurantData[i].image+")";
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getShopping(){
        let vm = this;
        req.get('/product', {params: {
          type: '购物推荐'
        }})
          .then(function (response) {
            vm.ShoppingData = response.data.data;
            for(let i=0;i<vm.ShoppingData.length;i++){
              vm.ShoppingData[i].image= "url("+vm.ShoppingData[i].image+")";
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      goDetail(val){
        this.$router.push({path: '/destinationMore',query: {type: val}})
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
