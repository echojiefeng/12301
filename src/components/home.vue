<template>
  <div class="home">
    <router-view/>
    <m-tabbar v-model="select">
      <m-tabbar-item id='main' >
        <img src="../assets/home/icon_tabBar_recommend_normal.png" alt="" slot="icon-normal" @click="goSub('main')">
        <img src="../assets/home/icon_tabBar_recommend_pressed.png" alt="" slot="icon-active" @click="goSub('main')">
        <a @click="goSub('main')">推荐</a>
      </m-tabbar-item>
      <m-tabbar-item id='user'>
        <img src="../assets/home/icon_tabBar_destination_normal.png" alt="" slot="icon-normal" @click="goSub('destination')">
        <img src="../assets/home/icon_tabBar_destination_pressed.png" alt="" slot="icon-active" @click="goSub('destination')">
        <a @click="goSub('destination')">目的地</a>
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './tabbar'
import mTabbarItem from './tabbar-item'
export default {
  name: 'home',
  components: {
    'm-tabbar': mTabbar,
    'm-tabbar-item': mTabbarItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      select: 'test'
    }
  },
  methods: {
    goSub (subRT) {
      this.$router.push({ path: '/home/' + subRT })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
