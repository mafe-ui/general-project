# loading

## API

### Loading props

| 属性         | 说明                                                         | 类型             | 默认值 |
| :----------- | :----------------------------------------------------------- | :--------------- | :----- |
| type| 类型，可选值为 `1`、`2`、`3` 、`4`| String           | 1   |
| visible| 是否显示                                         | Boolean          | false  |
| txt| 文本                               | String           | ''|


### 例子
* 使用变量动态控制是否显示
````vue
<template>
  <div>
   <mf-loading type=1 :visible=loadingVisible>Loading</mf-loading>
  </div>
</template>

<script>
import mfLoading from '@/components/loading/mf-loading'
export default {
  components:{
   'mf-loading':mfLoading,
  },
  data () {
    return {
       loadingVisible:true,
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loadingVisible = false;
    },2000);
  },
};
</script>
````
* 动态修改文本
````vue
<template>
  <div>
   <mf-loading type=1 :visible=loadingVisible :txt=loadingTxt>Loading</mf-loading>
  </div>
</template>

<script>
import mfLoading from '@/components/loading/mf-loading'
export default {
  components:{
   'mf-loading':mfLoading,
  },
  data () {
    return {
       loadingVisible:true,
       loadingTxt:'加载中',
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loadingTxt= '加载完成';
    },2000);
  }
};
</script>
````
* 使用js调用
````vue
<script>
import Vue from 'vue'
import mfLoadingIndex from '@/components/loading/index'
Vue.use(mfLoadingIndex)
export default {

  data () {
    return {
       loadingVisible:true,
       loadingTxt:'加载中',
    }
  },
  mounted(){
    this.loadingFn();
  }，
  methods: {
    loadingFn(){
      this.$loading.show({type:'2',txt:'loading'});
      setTimeout(()=>{
        this.$loading.close();
      },2000)
    }
  }
};
</script>
````


