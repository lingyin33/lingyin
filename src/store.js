import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  state: {
    token:'',
    cartarry:JSON.parse(localStorage.getItem('cartarry'))||[],//存储购物车商品的数组
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){
      state.token=token
    },
    //添加商品到购物车
    tocart(state,ta){
      let goods=state.cartarry.find(v=>v.title==ta.label)
      if(goods){
        goods.cartCount+=1
      }else{
        state.cartarry.push({title:ta.label,price:ta.price,image:ta.image,cartCount:1,active:true})
      }
    },
    //购物车商品数量加1
    cartadd(state,index){
      state.cartarry[index].cartCount++
    },
    //购物车商品数量减1
    cartremove(state,index){
      if(state.cartarry[index].cartCount>1){
        state.cartarry[index].cartCount--
      }else {
        if(window.confirm('确定从购物车移除该商品吗？')){
          state.cartarry.splice(index,1)
        }
      }
    },
    //清空购物车
    clearcart(state){
      state.cartarry=[]
    },
    //清空本列商品
    clearone(state,index){
      if(window.confirm('确定从购物车移除该商品吗？')){
        state.cartarry.splice(index,1)
      }
    }

  },
  actions: {

  },
  //相当于vue的计算属性
  getters:{
      countsum:state=>{
          let num=0
          state.cartarry.forEach(v=>{
            num+=v.cartCount
          })
          return num
      },

      totalprice:state=>{
        let total=0
        state.cartarry.forEach(v=>{
          if(v.active){
            total+=v.price*v.cartCount
          }
        })
        return total
      }
  }
})
//监听每次调用mutations的时候都会进入这个方法，然后我们可以做一些我们想要的处理
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartarry',JSON.stringify(state.cartarry))
})
export default store
