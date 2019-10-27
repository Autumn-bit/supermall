<template>
<div id="tab-bar">
    <slot></slot>          
</div>
</template>

<script>
export default {
  name: 'tabBar'
}
</script>

<style>
  #tab-bar{
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  

  
</style>
       