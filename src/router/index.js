import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../Login.vue')
  },
  {
    path: '/newuser',
    name: 'NewUser',
    component: () => import('../NewUser.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/home/news',
        name: 'News',
        component: () => import('../views/News.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
