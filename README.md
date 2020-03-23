# general-project

> 1.克隆到本地
>
> ````bash
> git clone https://github.com/mafe-ui/general-project.git
> ````
>
> 2.下载依赖
>
> ````bash
> npm install
> ````
>
> 3.启动项目
>
> ````bash
> npm run serve
> ````
>
> 4.打包
>
> ````bash
> npm run build
> ````

## 一、axios用法

#### 1.接口配置

> /src/plugins/axios.js

````js
if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "http://192.168.0.109:6598"; //生产环境    
} else {
    axios.defaults.baseURL = ipconfig;	//正式环境
}
````

#### 2.请求统一写法

##### 2.1. get请求

````js
export const getPushurl = pms => {
    const params = qs.stringify(pms);
    return axios.get("/api/getpushurl?" + params);
};
````

##### 2.2 post请求

````js
export const getdatatoken = pms => {
    const params = qs.stringify(pms);
    return axios.post("/api/getdatatoken", params);
};
````

#### 3.用法

##### 3.1 GET、POST(传参)

````js
<script>
import { getPushurl } from '@/plugins/axios'
export default {
  methods: {
    requestTest(){
      let pms = {pms:1};
      getPushurl(pms).then(r => {
        console.log(r)
      })
    }
  }
}
</script>
````

##### 3.2 GET、POST(不传参)

````js
<script>
import { getPushurl } from '@/plugins/axios'
export default {
  methods: {
    requestTest(){
      getPushurl().then(r => {
        console.log(r)
      })
    }
  }
}
</script>
````

## 二、国际化用法(vue-i18n)

#### 写法：

中文：/src/assets/js/locale/lang/zh.js

````js
export const m = {
	  common: {
        demo:"示例"
    },
}
````

英文：/src/assets/js/locale/lang/en.js

````js
export const m = {
	  common: {
        demo:"demo"
    },
}
````

#### 用法：

````vue
<template>
    <div>
        {{$t('m.common.demo')}}
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log( this.$t("m.common.demo));
        },
    }
</script>
````

## 三、localStorage和sessionStorage用法及监听方法

#### 1.存储

>  \* @param { number } type 1 localStorage 2 sessionStorage
>
>  \* @param { string }     key 键
>
>  \* @param { string }     data 要存储的数据
>
> 除了存储写法不一样，其他的用法都一样

````js
//存储
this.$addStorageEvent(2, "test", this.test);

//取值
localStorage.getItem("test")

//检查是否存在某个变量
localStorage.hasOwnProperty('test')

//删除
localStorage.removeItem("test")

//清空
localStorage.clear()
````

#### 2.监听

````js
 mounted() {
   window.addEventListener('setItem', (e) => {
      console.log(e);
  });
},
````

