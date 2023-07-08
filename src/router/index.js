import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('@/pages/landingPage.vue')
  },
  {
    path: '/dog-list',
    name: "Dashboard",
    component: () => import('@/pages/homePage.vue')
  },
  {
    path: '/dog-detail',
    name: "Detail",
    component: () => import('@/pages/detailSubBreed.vue')
  }
];

const router = new VueRouter({
  routes
});


export default router;
