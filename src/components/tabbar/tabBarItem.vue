<template>

    <div class="tab-bar-item" :class="{active:isActive}" @click="itemClick">
        <slot name="item-icon"></slot> 
        <slot name="item-text"></slot> 
    </div>

</template>
<script> 
  export default{
      name:'tabBarItem',
      props:{
          path:String
      },
      data(){
          return{
              //isActive:true,
         
          }
      },
      computed:{
          isActive(){
             return this.$route.path.indexOf(this.path) !== -1//不等于-1即在router里面找到了path
          }
      },
      components:{

      },
      methods:{
          itemClick(){
              this.$router.replace(this.path)
          }
      }
  }
</script>

<style>
.active{background-color:rgba(236, 122, 189, 0.76);}
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size:14px;}
.tab-bar-item span{
    display: inline-block;
    margin-top:5px;
}
</style>