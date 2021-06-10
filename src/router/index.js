import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import Employee from '../views/Employee.vue'
import Tasks from '../views/Tasks.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Landing',
    component:Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/create-employee',
    name: 'Employee',
    component: Employee
    
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
