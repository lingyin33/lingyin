<template>
  <div>
    <img class="headerimg" src=" https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png" alt="">
    <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
    </cube-form>
  </div>
</template>

<script>
  /*export default{
    data(){
      return{
        model:{
          username:'',
          password:''
        },
      },
        schema:{
          fields: [
            {
              type: 'input',
              modelKey: 'username',
              label: 'username',
              props: {
                placeholder: '请输入用户名'
              },
              rule:{
                //效验规则
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
            //密码配置
            {
              type:'input',
              modekkey:'password',
              label:'密码',
              props: {
                placeholder: '请输入密码',
                type:'password',
                eye:{
                  open:false
                }
              },
              rule:{
                required:true
              },
              trigger:'blur'
            },
            {
              type:'submit',
              lable:'注册'
            }
          ]
        }
    }
/!*  export default {
    data() {
      return {
        validity: {},
        valid: undefined,
        model: {
          checkboxValue: false,
          checkboxGroupValue: [],
          inputValue: '',
          radioValue: '',
          rateValue: 0,
          selectValue: 2018,
          switchValue: true,
          textareaValue: '',
          uploadValue: []
        },
        schema: {
          groups: [
            {
              legend: '基础',
              fields: [
                {
                  type: 'checkbox',
                  modelKey: 'checkboxValue',
                  props: {
                    option: {
                      label: 'Checkbox',
                      value: true
                    }
                  },
                  rules: {
                    required: true
                  },
                  messages: {
                    required: 'Please check this field'
                  }
                },
                {
                  type: 'checkbox-group',
                  modelKey: 'checkboxGroupValue',
                  label: 'CheckboxGroup',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'input',
                  modelKey: 'inputValue',
                  label: 'Input',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                },
                {
                  type: 'radio-group',
                  modelKey: 'radioValue',
                  label: 'Radio',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'selectValue',
                  label: 'Select',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'switch',
                  modelKey: 'switchValue',
                  label: 'Switch',
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'textarea',
                  modelKey: 'textareaValue',
                  label: 'Textarea',
                  rules: {
                    required: true
                  },
                  // debounce validate
                  // if set to true, the default debounce time will be 200(ms)
                  debounce: 100
                }
              ]
            },
            {
              legend: '高级',
              fields: [
                {
                  type: 'rate',
                  modelKey: 'rateValue',
                  label: 'Rate',
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'upload',
                  modelKey: 'uploadValue',
                  label: 'Upload',
                  events: {
                    'file-removed': (...args) => {
        console.log('file removed', args)
      }
    },
      rules: {
        required: true,
                uploaded: (val, config) => {
          return Promise.all(val.map((file, i) => {
                    return new Promise((resolve, reject) => {
                      if (file.uploadedUrl) {
            return resolve()
          }
          // fake request
          setTimeout(() => {
            if (i % 2) {
            reject(new Error())
          } else {
            file.uploadedUrl = 'uploaded/url'
            resolve()
          }
        }, 1000)
        })
        })).then(() => {
            return true
          })
        }
      },
      messages: {
        uploaded: '上传失败'
      }
    }
    ]
    },
      {
        fields: [
          {
            type: 'submit',
            label: 'Submit'
          },
          {
            type: 'reset',
            label: 'Reset'
          }
        ]
      }
    ]
    },
      options: {
        scrollToInvalidField: true,
                layout: 'standard' // classic fresh
      }
    }
    },

  }*!/*/
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
              label:'注册'
            }
          ]
        }
      }
    },
    methods:{
      submitHandler(e){
        e.preventDefault(),
        this.$http.get('/api/register',{params:this.model}).then(res=>{
          console.log(res.data.success)
          alert(res.data.message)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .headerimg
      height 150px
      width  100%
</style>