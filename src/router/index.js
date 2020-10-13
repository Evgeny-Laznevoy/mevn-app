import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Thanks from '../views/Thanks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
