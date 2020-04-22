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

## 四、限制重复点击使用方法

> 指令源码：/src/assets/js/repeat-click.js
>
> v-preventReClick ：只适用于button
>
> v-asyncClick	 	：所有标签

|               v-asyncClick               |       v-preventReClick       |
| :--------------------------------------: | :--------------------------: |
|        event: requestTest(事件名)        | v-preventReClick(事件正常写) |
| delayTime:2000(相隔多久可进行第二次点击) |   v-preventReClick=“2000”    |

#### 例如：

````js
<template>
    //v-asyncClick
    
    //(默认时间)
     <div v-asyncClick="{event: requestTest}">requestTest</div>
	//  (2000s 之后可以进行下一次点击)
	<div v-asyncClick="{event: requestTest,delayTime:2000}">requestTest</div>

----------------------------------------------------------------------------------
	//v-preventReClick
    
    //(默认时间)
    <button @click="requestTest" v-preventReClick>requestTest</button>
	// (2000s 之后可以进行下一次点击)
   <button @click="requestTest" v-preventReClick="2000">requestTest</button>
	
</template>


<script>
export default {
  methods: {
    requestTest(e){
      console.log(666)
    },
  }
};
</script>
````

## 五、格式化时间及其他方法

> 源码: /src/assets/js/dateFilter.js
#### 用法
| 可获取的时间                   | 写法                                                         |
| :----------------------------- | :----------------------------------------------------------- |
| 日期格式化                     | dateFilter.timeFormat('2019-07-08','yyyy/mm')    //2019/07   |
| 今天日期                       | dateFilter.getToday('mm/dd')      //03/24                    |
| 某个日期的前几天或几天后的日期 | dateFilter.getIntervalDay('2019-07-08',-10)  //2019/06/28 负数为前几天，正数为后几天 |
| date的n个月前的今天的日期      | dateFilter.getPreMonth('2019-07-08',6)//2010/1/8负数为前几天，正数为后几天 |
| 某天的那周第一天               | dateFilter.getFirstDayOfWeek(new Date());//2020-03-23        |
| 本月第一天                     | dateFilter.getFirstDayOfMonth();//2020-03-1                  |

* 在js中调用
```js
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
```js
//引入公共篩選方法
import dateFilter from '@/assets/js/dateFilter'
for (let key in dateFilter) {
    Vue.filter(key, dateFilter[key])
}
```
```js
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
```js
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
## 六、数据过滤
> 源码: /src/assets/js/computedFilter.js
#### 用法
main.js
```js
//引入公共过滤方法
import vueFilter from '@/assets/js/computedFilter'
for (let key in vueFilter) {
    Vue.filter(key, vueFilter[key])
}
```
```html
<template>
  <div class="home">
    <span>{{'0.234234234' | numPrecise(3)}}</span>
  </div>
</template>
```

## 七、屏幕切换动效
#### 用法
App.vue

修改transitionName的值，可以修改效果
* slide-left
* slide-right
* slide-hide
* slide-scale
* slide-mask
```js
<script>
export default { 
  data() {
    return {
      transitionName: "slide-left", //初始过渡动画方向 {slide-left，slide-right,slide-hide,slide-scale,slide-mask}
    };
  },
```
slide-mask颜色修改
> src/assets/css/reset.scss
```scss
$sel_color:#c59c5a; //屏幕切换颜色


