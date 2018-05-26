<template>
  <!--目的地更多-->
  <div class="main">
    <div class="comment" v-for="(value, index) in detailData" :key = "index">
      <div class="title">
        <div class="img" :style="{ 'background-image' : value.user_image?value.user_image: 'url(http://12301.sy.hn//uploads/20180521/3162786f053985ae772da5ac1eb68889.jpg)'}"></div>
        <div class="txt">
          <div class="left">
            {{value.user_name?value.user_name:'暂无'}}
            <div class="star">
              <img src="../assets/home/icon_evaluation_star_shine.png" v-for="n in value.stars"><img  src="../assets/home/icon_evaluation_star_normal.png" v-for="n in value.unstars">
            </div>
          </div>
          <div class="right">{{value.time?value.time:'2018-06-10 11:16:22'}}</div>
        </div>
      </div>
      <div class="content">{{value.abstract?value.abstract:'暂无'}}</div>
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
        showFlag: true,
        detailData: [
          {
            user_image:'',
            user_name:'',
            time:'',
            abstract:'',
            stars:5,
            unstars:0
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
            console.log(response.data);
            if(response.data.data){
              vm.detailData = response.data.data;
              for(let i=0;i<vm.detailData.length;i++){
                vm.detailData[i].user_image= "url("+vm.detailData[i].user_image+")";
                vm.detailData[i].unstars= 5-vm.detailData[i].stars;
              }
            }
            console.log('------');
            console.log(vm.detailData)
            console.log('------');
          })
          .catch(function (error) {
            console.log(error)
          })
      },
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
          padding: 0.07rem .2rem;
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
        text-align: left;
        span{
          font-size:.24rem;
          color:rgba(0,128,255,1);
        }
      }
      .ticket{
        display: flex;
        .title{
          margin-top: .3rem;
          font-size:.28rem;
          font-family:PingFangSC-Regular;
          color:rgba(51,51,51,1);
          width: 1rem;
          text-align: left;
        }
        .content{
          font-size:.28rem;
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
          .left{
            line-height: .46rem;
            margin-left: .26rem;
            flex: 1;
            text-align: left;
            font-size:.28rem;
            font-family:PingFangSC-Regular;
            color:rgba(51,51,51,1);
            .star{
              height: .22rem;
              img{
                width:.22rem;
                height:.22rem;
              }
            }
          }
          .right{
            line-height: .68rem;
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
