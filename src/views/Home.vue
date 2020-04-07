<template>
  <div class="home">
    <span>日期格式化：{{date}}</span><br/><br/>
    <span>今天日期：{{today}}</span><br/><br/>
    <span>获取某个日期的前几天或几天后的日期：{{getIntervalDay}}</span><br/><br/>
    <span>获取date的n个月前的今天的日期：{{getPreMonth}}</span><br/><br/>
    <span>获取某天的那周第一天{{getFirstDayOfWeek}}</span><br/><br/>
    <span>获取本月第一天{{getFirstDayOfMonth}}</span><br/><br/>

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


  
    <mf-loading type=1 :visible=loadingVisible>Loading</mf-loading>
    <mf-loading type=2 :visible=false>Loading</mf-loading>
    <mf-loading type=3 :visible=false>Loading</mf-loading>
    <mf-loading type=4 :visible=false>Loading</mf-loading>
    <mf-loading :visible=false  :txt=loadingTxt></mf-loading>


  </div>
</template>

<script>
// @ is an alias to /src
import dateFilter from '@/assets/js/dateFilter'
import mfButton from '@/components/button/mf-button'
import mfLoading from '@/components/loading/mf-loading'
import Vue from 'vue'
import mfLoadingIndex from '@/components/loading/index'
Vue.use(mfLoadingIndex)

export default {


  name: 'Home',
  components:{
    'mf-button':mfButton,
    'mf-loading':mfLoading,
  },
  data(){
    return {
      date:'',
      today:'',
      getIntervalDay:'',
      getPreMonth:'',
      getFirstDayOfWeek:'',
      getFirstDayOfMonth:'',
      loadingVisible:false,
      loadingTxt:'加载中...',
    }
  },
  mounted(){
    this.today = dateFilter.getToday('mm/dd');
    this.date = dateFilter.timeFormat('2019-07-08','yyyy/mm');
    this.getIntervalDay = dateFilter.getIntervalDay('2019-07-08',-10);
    this.getPreMonth = dateFilter.getPreMonth('2019-07-08',6);
    this.getFirstDayOfWeek = dateFilter.getFirstDayOfWeek(new Date());
    this.getFirstDayOfMonth = dateFilter.getFirstDayOfMonth();

    setTimeout(()=>{
      this.loadingVisible = false
    },2000)
  },
  methods: {
    clickBtn(){
      console.log('点击事件')
      this.$loading.show({type:'2',txt:'jzz'});
      setTimeout(()=>{
        this.$loading.close();
      },2000)
    }
  }
}
</script>
<style lang='scss'>
.home{
  // height: 100vh;
  padding-bottom: rem(100);
  background: #ca9;
  span{
    font-size: rem(16);
  }
}
  
</style>
