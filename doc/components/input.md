## API

### Input props

| 属性         | 说明                                                         | 类型             | 默认值 |
| :----------- | :----------------------------------------------------------- | :--------------- | :----- |
| type         | 输入框类型，可选值为 `text`、`password`、`textarea`、`url`、`email`、`date`、`number`、`tel` | String           | text   |
| value        | 绑定的值，可使用 v-model 双向绑定                            | String \| Number | 空     |
| placeholder  | 占位文本                                                     | String           | -      |
| disabled     | 设置输入框为禁用状态                                         | Boolean          | false  |
| readonly     | 设置输入框为只读                                             | Boolean          | false  |
| maxlength    | 最大输入长度                                                 | Number           | -      |
| number       | 将用户的输入转换为 Number 类型                               | Boolean          | false  |
| autofocus    | 自动获取焦点                                                 | Boolean          | false  |
| autocomplete | 原生的自动完成功能                                           | String           | off    |
| element-id   | 给表单元素设置 `id`，详见 Form 用法。                        | String           | -      |
| inputClasses | 给表单input加class                                           |                  |        |
| spellcheck   | 原生的 spellcheck 属性                                       | Boolean          | false  |

### Input events

| 事件名      | 说明                             | 返回值 |
| :---------- | :------------------------------- | :----- |
| on-enter    | 按下回车键时触发                 | 无     |
| on-click    | 设置 icon 属性后，点击图标时触发 | 无     |
| on-change   | 数据改变时触发                   | event  |
| on-focus    | 输入框聚焦时触发                 | 无     |
| on-blur     | 输入框失去焦点时触发             | 无     |
| on-keyup    | 原生的 keyup 事件                | event  |
| on-keydown  | 原生的 keydown 事件              | event  |
| on-keypress | 原生的 keypress 事件             | event  |

### inputClasses 各个效果

| inputClasses                        |
| :---------------------------------- |
| `basic-slide`                       |
| `clean-slide`                       |
| `gate`                              |
| `skinny`                            |
| `swing`                             |
| `spotlight`                         |
| `input__field input__field--hoshi`  |
| `input__field input__field--madoka` |



### 例子

````vue
<template>
  <div>
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="basic-slide"  label="name"/>
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="clean-slide" label="name"/>
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="gate" label="name"/>
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="skinny" label="name"/>
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="swing" label="name"/>
    <mf-input @on-blur="handleBlur" v-model="value" inputClasses="spotlight" label="name"/>
    <mf-input @on-blur="handleBlur" v-model="value"  inputClasses="input__field input__field--hoshi" elementId="input-5" />
    <mf-input @on-blur="handleBlur" v-model="value"  inputClasses="input__field input__field--madoka" elementId="input-31" />

  </div>
</template>

<script>
import { getPushurl } from "@/plugins/axios";
import mfInput from '@/components/input/mf-input.vue'
export default {
  components:{
    mfInput
  },
  data () {
    return {
      value:'这是个文本框'
    }
  },
  methods: {
    handleBlur(val){
      console.log(val)
    }
  }
};
</script>

<style></style>

````

