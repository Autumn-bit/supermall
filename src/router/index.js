import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () =>import('../pages/home/home') 
const cart = () =>import('../pages/cart/cart') 
const category = () =>import('../pages/category/category') 
const profile = () =>import('../pages/profile/profile') 
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/cart',
        component:cart 
    },
    {
        path:'/category',
        component:category 
    },
    {
        path:'/profile',
        component:profile
    }

]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router