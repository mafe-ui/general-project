<template>
  <div class="home">
    <span>日期格式化：{{date}}</span><br/><br/>
    <span>今天日期：{{today}}</span><br/><br/>
    <span>获取某个日期的前几天或几天后的日期：{{getIntervalDay}}</span><br/><br/>
    <span>获取date的n个月前的今天的日期：{{getPreMonth}}</span><br/><br/>
    <span>获取某天的那周第一天{{getFirstDayOfWeek}}</span><br/><br/>
    <span>获取本月第一天{{getFirstDayOfMonth}}</span><br/><br/>

    hover
    <e-button hoverType=1>hover</e-button>
    <e-button hoverType=1 inverted>hover-inverted</e-button><br/>

    <e-button hoverType=2>hoverType=2</e-button>
    <e-button  hoverType=2 inverted>hoverType=2</e-button><br/>

    <e-button hoverType=3>hoverType=3</e-button>
    <e-button  hoverType=3 inverted>hoverType=3</e-button><br/>

    focus
    <e-button focusType=1>focus</e-button>
    <e-button focusType=1 inverted>focus-inverted</e-button><br/>

    <e-button focusType=2>focusType=2</e-button>
    <e-button  focusType=2 inverted>focusType=2</e-button><br/>
    
    disable
    <e-button disabled>disabled</e-button><br/>

  </div>
</template>

<script>
// @ is an alias to /src
import dateFilter from '@/assets/js/dateFilter'
import eButton from '@/components/button/eButton'

export default {
  name: 'Home',
  components:{
    'e-button':eButton
  },
  data(){
    return {
      date:'',
      today:'',
      getIntervalDay:'',
      getPreMonth:'',
      getFirstDayOfWeek:'',
      getFirstDayOfMonth:'',
    }
  },
  mounted(){
    this.today = dateFilter.getToday('mm/dd');
    this.date = dateFilter.timeFormat('2019-07-08','yyyy/mm');
    this.getIntervalDay = dateFilter.getIntervalDay('2019-07-08',-10);
    this.getPreMonth = dateFilter.getPreMonth('2019-07-08',6);
    this.getFirstDayOfWeek = dateFilter.getFirstDayOfWeek(new Date());
    this.getFirstDayOfMonth = dateFilter.getFirstDayOfMonth();
  }
}
</script>
<style lang='scss'>
.home{
  background: #ca9;
  span{
    font-size: rem(16);
  }
}
  
</style>
