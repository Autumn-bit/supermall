import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () =>import('../pages/home/Home') 
const Cart = () =>import('../pages/cart/Cart') 
const Category = () =>import('../pages/category/Category') 
const Profile = () =>import('../pages/profile/Profile') 
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart 
    },
    {
        path:'/category',
        component:Category 
    },
    {
        path:'/profile',
        component:Profile
    }

]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router