import { createRouter, createWebHistory } from 'vue-router'

// 引入你的主页 homePage.vue
import homePage from '../views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testPage.vue'),
    },
  ],
})

export default router
