<template>
  <div class="about">
    <div style="text-align:left;color: white;font-size: 15px;padding:10px;background: #4a4c5b">
      已选商品列表
    </div>
    <div class="goods" v-for="(item,index) in cartarr">
      <input type="checkbox" v-model="item.active" style="margin-right: 15px">
      {{item.title}} <span style="color: red;font-size: 10px;padding-left: 5px">￥{{item.price}}&nbsp;/&nbsp;台</span>
      <div class="goodsright">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span class="cartCountnum">数量:{{item.cartCount}}</span>
        <i class="cubeic-add" @click="addCart(index)"></i>
        <span class="clearone" @click="clearone">删除</span>
      </div>
    </div>
    <div>
      <table style="margin: 10px 0;color: red;font-size: 10px">
        <tr style="width:100%;padding: 10px">
          <td style="padding-left: 10px">选中的商品：</td>
          <td style="padding-right: 20px">{{activeCount}}/{{count}}</td>
          <td>需付总金额：</td>
          <td >{{totalprice}}元</td>
        </tr>
      </table>
    </div>
    <cube-button style="margin: 5px 0">支付订单</cube-button>
    <cube-button @click="clearcart">清空购物车</cube-button>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return{
/*        cartarr:[
 /!*         {
            title:'小米手机',
            cartCount:5
          },
          {
            title:'华为手机',
            cartCount:4
          }*!/
        ]*/
      }
    },
    computed:{
            ...mapState({
              cartarr:state=>state.cartarry
            }),

            activeCount(){
              return this.cartarr.filter(v=>v.active).length
            },
            count(){
              return this.cartarr.length
            },
            ...mapGetters({
            totalprice:'totalprice'
            })
    },
    methods:{
      //减少商品
      removeCart(index){
        this.$store.commit('cartremove',index)
      },
      //增加商品
      addCart(index){
        this.$store.commit('cartadd',index)
      },
//      addtochat(index){
//        const goods=this.classlist[index]
//        const result=this.chatarr.find(v=>v.text==goods.text)
//        if(result){
//          result.count+=1
//        }else{
//          this.chatarr.push({...goods,count:1,active:true})
//        }
//      }

      //清空本列商品
      clearone(index){
        this.$store.commit('clearone',index)
      },
      //清空购物车
      clearcart(){
        this.$store.commit('clearcart')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .goods
    margin 3px
    padding 10px 0px 10px 5px
    background #e6e6e6
    font-size 15px
    color black
    text-align left
    border 1px solid #e6e6e6
  .goodsright
    float right
    .cartCountnum
      font-size 14px
      padding 3px
      /*color red*/
    i
      font-size 18px
      /*color red*/
  .clearone
    color red
    font-size 12px
    line-height 20px
    padding 10px 5px 10px 10px

</style>