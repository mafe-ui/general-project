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

#### 1.写法

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

#### 2.用法

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

## 四、限制重复点击(v-preventReClick)使用方法

> 指令源码：/src/assets/js/repeat-click.js

#### 1.默认时间

> v-preventReClick 默认时间3000

````html
<template>
    <button @click="requestTest" v-preventReClick>requestTest</button>
</template>
````


#### 2.自定义时间

> v-preventReClick=“2000” (2000s 之后可以进行下一次点击)

````html
<template>
    <button @click="requestTest" v-preventReClick="2000">requestTest</button>
</template>
````
### 五、格式化时间及其他方法
> 源码: /src/assets/js/dateFilter.js
#### 用法
* 在js中调用
```
<script>
import dateFilter from '@/assets/js/dateFilter'

export default {
  name: 'Home',
  mounted(){
    console.log(dateFilter.getToday('mm/dd'));
  }
}
</script>
```
* 在template中使用
方法一：写成公共文件
main.js
```
//引入公共篩選方法
import dateFilter from '@/assets/js/dateFilter'
for (let key in dateFilter) {
    Vue.filter(key, dateFilter[key])
}
```
```
<template>
  <div class="home">
    <span>日期格式化：{{day | timeFormat}}</span>
  </div>
</template>
export default {
  name: 'Home',
  data(){
    return {
      day:new Date()
    }
  },
}
```
方法二：重新封装过滤器
```
<template>
  <div class="home">
    <span>日期格式化：{{day | newDataFormat}}</span><br/><br/>
  </div>
</template>

<script>
// @ is an alias to /src
import dateFilter from '@/assets/js/dateFilter'

export default {
  name: 'Home',
  data(){
    return {
      day:new Date(),
    }
  },
  filters: {
      newDataFormat(date,type) {
          return dateFilter.timeFormat(date,type);
      }
  }
}
</script>

```




