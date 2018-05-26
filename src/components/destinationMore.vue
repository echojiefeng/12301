<template>
  <!--目的地-->
  <div class="main">
    <div class="searchBox">
      <div class="search"><img src="../assets/home/icon_searchBar_search.png"><input type="text" placeholder="搜一搜"></div>
    </div>

    <div class="item" v-for="(value, index) in listData" :key = "index" @click="goDetail(value.id,value.image,value.title,value.tab,value.abstract,value.ticket,value.address,value.stars)">
    <!--<div class="item" v-for="(value, index) in listData" :key = "index" @click="goDetail(value.id)">-->
      <div class="img" :style="{ 'background-image' : value.image }"></div>
      <div class="txt">
        <div class="title">{{value.title}}</div>
        <div>{{value.address}}{{value.stars}}</div>

        <div class="star">
          <img src="../assets/home/icon_evaluation_star_shine.png" v-for="n in value.stars"><img  src="../assets/home/icon_evaluation_star_normal.png" v-for="n in 5-value.stars">
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
      this.getList()
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        listData: []
      }
    },
    methods: {
      getList(){
        let vm = this;
        req.get('/product', {params: {
          type: this.$route.query.type
        }})
          .then(function (response) {
            vm.listData = response.data.data;
            for(let i=0;i<vm.listData.length;i++){
              vm.listData[i].image= "url("+vm.listData[i].image+")";
              vm.listData[i].stars= Math.ceil(vm.listData[i].stars);
            }
            console.log(vm.listData);
          })
          .catch(function (error) {
            console.log(error)
          })
      },
//      goDetail(val){
//        this.$router.push({path: '/destinationDetail',query:{id: val1}});
//      },
      goDetail(val1,val2,val3,val4,val5,val6,val7,val8){
        this.$router.push({path: '/destinationDetail',query:{
          id: val1,
          image: val2,
          title: val3,
          tab: val4,
          abstract: val5,
          ticket: val6,
          address: val7,
          stars: Math.ceil(val8) ,
        }});
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
      padding: .12rem 0 .12rem 0;
      .search{
        background-color: #fff;
        margin: 0 auto;
        width: 6.9rem;
        height: .64rem;
        box-shadow:.04rem 0 .15rem rgba(143,166,204,0.2);
        border-radius: .45rem;
        display: flex;
        img{
          width: .24rem;
          height: .24rem;
          margin: .20rem .1rem .20rem .2rem;
        }
        input{
          border: none;
          width: 5.5rem;
          font-size: .24rem;
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
