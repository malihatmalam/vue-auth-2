import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'

const routes: Array<RouteRecordRaw> = [
  {path: "/", component:Home},
  {path: "/login", component:Login},
  {path: "/registration", component:Registration},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
