import {createRouter, createWebHistory,RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import studentTeamInfo from '../views/student/teamInfo.vue'
import teacherTeamInfo from '../views/student/teamInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/student/teamInfo',
    name: 'studentTeamInfo',
    component: studentTeamInfo
  },
  {
    path: '/teacher/teamInfo',
    name: 'teacherTeamInfo',
    component: teacherTeamInfo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
