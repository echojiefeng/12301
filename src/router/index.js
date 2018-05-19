import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import main from '@/components/main'
import destination from '@/components/Destination'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home/main' },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        { path: 'main', component: main },
        { path: 'destination', component: destination }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
