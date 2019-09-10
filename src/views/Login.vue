<template>
    <div>
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png" alt="">
        <cube-form
                :model="model"
                :schema="schema"
                @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                model:{
                    username:'',
                    passwoed:''
                },
                schema:{
                    fields:[
                        {
                            type:'input',
                            modelKey:'username',
                            label: '用户名',
                            props:{
                                placeholder:'请输入用户名'
                            },
                            rules:{
                                required:true,
                                type:'string',
                                min:3,
                                max:15
                            },
                            trigger:'blur',
                            messages:{
                                required:'用户名不能为空',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能大于15个字符'
                            }
                        },
                        {
                            type:'input',
                            modelKey:'password',
                            label: '密码',
                            props:{
                                placeholder:'请输入密码',
                                type:'password',
                                eye:{
                                    open:false
                                }
                            },
                            rules:{
                                required:true,
                                type:'string',
                                min:6,
                                max:15
                            },
                            trigger:'blur',
                            messages:{
                                required:'密码不能为空',
                                min:'密码不能少于6位数',
                                max:'密码不能大于15位数'
                            }
                        },
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods:{

//            submitHandler(e){
//                e.preventDefault(),
//                this.$http.get('/api/login',{params:this.model}).then(res=>{
//                    console.log(res.data.code)
//                    alert(res.data.message)
//                }).catch(err=>{
//                        console.log(err)
//                })
//            }

            async submitHandler(e){
                e.preventDefault()
                try{
                    const result=await this.$http.get('/api/login',{params:this.model})
                    if(result.data.code==0){
                        this.$store.commit('settoken',result.data.token)
                        window.localStorage.setItem('token',result.data.token)
                        alert(result.data.message)

                        //判断路由是否带参数，带参则重定向参数地址，否则去首页
                        if(this.$route.query.redirect){
                            this.$router.replace({path:this.$route.query.redirect})
                        }else{
                            this.$router.replace({path:'/botnav/index'})
                        }
                    }else {
                        alert(result.data.message)
                    }
                }catch(err){
                    console.log(err)
                }
            }

        }
    }

</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%
</style>