<template>
  <div>
    <div class="headerimg">
      <img :src="Img" alt="">
      <div style="float: left;color: white;font-size: 15px;padding-top: 30px">
        <p>
          用户名：Tom
          <i class="cubeic-vip"></i>
          <i class="cubeic-edit" style="font-size: 10px;padding-left: 10px;color: grey">修改</i>
        </p>
        <p style="font-size: 10px;float: left">
          个人信用等级：
          <i class="cubeic-star"></i>
          <i class="cubeic-star"></i>
          <i class="cubeic-star"></i>
          <i class="cubeic-star"></i>
        </p>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
          <span class="minetitle">{{item.label}}</span>
          <i class="cubeic-arrow"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        Img:require('../assets/title01.jpg'),
        minearry:[
          {label:'商品收藏'},
          {label:'我的足迹'},
          {label:'店铺收藏'},
          {label:'我的订单'},
          {label:'退出',type:'exit'},
        ]
      }
    },
    methods:{
      itemclick(item){
        if(item.type=='exit'){
          this.$store.commit('settoken','')
          localStorage.removeItem('token')
          this.$router.push({path:'/login'})
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .mineitem
    font-size  14px
    text-align left
    height  50px
    line-height 50px
    padding-left 5%
    border-bottom 1px solid #eee
  .minetitle
    display inline-block
    width 90%
  .headerimg
    height  130px
    width  100%
    background #4a4c5b
    padding 10px
    img
      height 90px
      width 90px
      border-radius 50%
      float left
      padding 20px 10px 20px 0px
    p
      padding 8px

</style>
