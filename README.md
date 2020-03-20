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

````js
import {forgetpwdsave} from "@/plugins/axios";
subMitPassword() {
    let params = {
        token: this.$route.query.token,
        pwd: md5(this.passwordRegister)
    };
    forgetpwdsave(params).then(r => {

    });
}
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



