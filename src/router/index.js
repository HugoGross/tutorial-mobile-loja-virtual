import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutFull from '../layouts/LayoutFull.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutFull,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router
