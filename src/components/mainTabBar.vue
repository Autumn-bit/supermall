<template>
   <tab-bar>
     <tab-bar-item  path="/home">
       <div slot="item-text">首页</div>
      <span class="iconfont" slot="item-icon">&#xe619;</span>
     </tab-bar-item>
     <tab-bar-item  path="/category">
      <div slot="item-text">分类</div>
      <span class="iconfont" slot="item-icon">&#xe622;</span>
     </tab-bar-item>
     <tab-bar-item  path="/cart">
      <div slot="item-text">购物车</div>
      <span class="iconfont" slot="item-icon">&#xe7f8;</span>
     </tab-bar-item>
     <tab-bar-item  path="/profile">
      <div slot="item-text">我的</div>
      <span class="iconfont" slot="item-icon">&#xe619;</span>
     </tab-bar-item>
   </tab-bar>
</template>

<script>
import tabBar from './tabBar/tabBar'
import tabBarItem from './tabbar/tabBarItem'

export default {
  name: 'mainTabBar',
  components:{
      tabBar,
      tabBarItem,
   
  }
}
</script>

<style>
 
</style>
