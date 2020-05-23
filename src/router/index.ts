import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Resume from '../components/Resume.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
