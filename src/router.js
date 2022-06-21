import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import CourseWiki from './pages/CourseWiki.vue'
import CourseBuilder from './pages/CourseBuilder.vue'
import AboutPage from './pages/AboutPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/builder',
        component: CourseBuilder 
    },
    {
        path: '/wiki',
        name: 'CourseWiki',
        component: CourseWiki 
    },
    {
        path: '/about',
        component: AboutPage 
    }
  ]
})