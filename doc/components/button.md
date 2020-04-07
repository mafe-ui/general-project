# button

## API

### Button props

| 属性         | 说明                                                         | 类型             | 默认值 |
| :----------- | :----------------------------------------------------------- | :--------------- | :----- |
| hoverType| hover类型，可选值为 `1`、`2`、`3` | String           | 1   |
| focusType| focus类型，可选值为 `1`、`2`、`3` | String           |无  |
| inverted| 反向颜色                                         | Boolean          | false  |
| disabled| 是否不可点击                                 | Boolean          | false  |




### 例子

````vue
<template>
  <div>
   hover
    <mf-button hoverType=1>hover</mf-button>
    <mf-button hoverType=1 inverted>hover-inverted</mf-button><br/>

    <mf-button hoverType=2>hoverType=2</mf-button>
    <mf-button  hoverType=2 inverted>hoverType=2</mf-button><br/>

    <mf-button hoverType=3>hoverType=3</mf-button>
    <mf-button  hoverType=3 inverted>hoverType=3</mf-button><br/>

    focus
    <mf-button focusType=1>focus</mf-button>
    <mf-button focusType=1 inverted>focus-inverted</mf-button><br/>

    <mf-button focusType=2>focusType=2</mf-button>
    <mf-button  focusType=2 inverted>focusType=2</mf-button><br/>

    <mf-button focusType=3>focusType=3</mf-button>
    <mf-button  focusType=3 inverted>focusType=3</mf-button><br/>
    
    disable
    <mf-button disabled>disabled</mf-button><br/>

    click事件
    <mf-button focusType=1 @click.native="clickBtn">focus</mf-button>
  </div>
</template>

<script>
import mfButton from '@/components/button/mf-button'
export default {
  components:{
    'mf-button':mfButton
  },
  data () {
    return {
      value:''
    }
  },
  methods: {
    clickBtn(){
      console.log('点击事件')
    }
  }
};
</script>


````

