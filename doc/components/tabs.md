# tabs

## API

### Tabs Props

| 参数           | 说明                                         | 类型               | 默认值       |
| -------------- | :------------------------------------------- | :----------------- | :----------- |
| v-model        | 绑定当前选中标签的标识符                     | *number \| string* | `0`          |
| inactiveColor  | 默认字体颜色(未选中)                         | *string*           | `#333`       |
| activeColor    | 字体颜色(选中)                               | *string*           | `#3399ff`    |
| line           | 是否显示底部条                               | *boolean*          | `true`       |
| lineDelay      | 底部条动画时间，单位秒                       | *number \| string* | `0.5`        |
| lineColor      | 底部条颜色                                   | *string*           | `#3399ff`    |
| lineWidth      | 底部条宽度，默认单位`px\rem`                 | *number \| string* | `auto`       |
| lineHeight     | 底部条高度，默认单位`px\rem`                 | *number \| string* | `rem（3）`   |
| barPosition    | 底部条位置上下左右                           | object             | {bottom:'0'} |
| animated       | 是否开启切换标签内容时的转场动画             | *boolean*          | `false`      |
| animationDelay | 切换标签内容动画时间，单位秒                 | *number \| string* | `0.5`        |
| sticky         | 是否使用粘性定位布局(不能与fixed同时使用)    | *boolean*          | `false`      |
| offsetTop      | 粘性定位布局下与顶部的最小距离，单位`px\rem` | *number \| string* | `0`          |
| fixed          | 是否固定在底部(不能与sticky同时使用)         | *boolean*          | `false`      |

### TabsPane Props

| 参数          | 说明                       | 类型               | 默认值       |
| :------------ | :------------------------- | :----------------- | :----------- |
| label         | 标题                       | *string*           | -            |
| name `v2.0.6` | 标签名称，作为匹配的标识符 | *number \| string* | 标签的索引值 |
| to `v2.2.1`   | 点击后跳转的目标路径(path) | *string*           | -            |

### Tabs Events

| 事件名   | 说明           | 回调参数                  |
| :------- | :------------- | :------------------------ |
| on-click | 点击标签时触发 | name：标识符，title：标题 |

### 例子

````js
<template>
    <div id="app">
       <tabs 
			@on-click="goRouter"  
            v-model="active" 
            :anmited="true" 
            animationDelay="0.3s" 
            lineDelay="0.5s" 
            offsetTop="0" 
            :line="true" 
            :sticky="true" 
            lineWidth="0.5rem"  
            lineColor="#58bc58" 
            inactiveColor="#ccc" 
            activeColor="#58bc58" 
            lineHeight="0.03rem" 
            :barPosition="{top:'0'}">
             <tabsPane label="home" name="1" to='/'>
               <img src="./assets/logo.png" alt="">
             </tabsPane>
            <tabsPane label="about" name="2" to='/about'>
                2
            </tabsPane>
            <tabsPane label="news" name="3">
                3
            </tabsPane>
            <tabsPane label="mine" name="4">
                    4
            </tabsPane>
     </tabs>
    </div>
</template>

<script>
import {tabs,tabsPane} from '@/components/tabs'
export default {
    components: {
        tabsPane,
        tabs,
    },
    data() {
        return {
            active: 1,
        }
    },
    methods: {
        goRouter(label,name) {
            console.log(label,name)
        },
    }
}
</script>
````

