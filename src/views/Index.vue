<template>
  <div id="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="banner" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
      <!--滚动分类-->
    <cube-slide ref="slidelists" :auto-play="false" :data="lists">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li class="listli" v-for="(item,index1) in list" :key="index1">
            <a :href="item.url">
              <img :src="item.image" alt="">
              <p>{{item.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            url: 'https://m.xdclass.net',
            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png'
          },
          {
            url: 'https://m.xdclass.net',
            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/upload/banner/devpay.png'
          },
          {
            url: 'https://m.xdclass.net',
            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png'
          }
        ],
        lists:[
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                }
              ],
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label:'分类一'
                }
              ]
        ]

      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      }
    },
//    async created(){
//      try{
//        //获取轮播图数据
//        const items=await this.$http.get('/api/banner')
//          this.items=items
        //获取滚动数据
//        }catch (err){
//          console.log(err)
//        }
//      }
    }

</script>
<style lang="stylus" scoped>
#index
  a
    .banner
      display block
      width 100%
      height 175px
  .listul
    display flex
    flex-wrap   wrap
  .listli
    width 20%
    justify-content center
    img
      width 35px
      height  35px
      border-radius  50%
      padding 5px 0
    p
      font-size  14px
      padding-bottom  10px


</style>