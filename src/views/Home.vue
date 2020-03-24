<template>
  <div class="home">
    <span>日期格式化：{{date}}</span><br/><br/>
    <span>今天日期：{{today}}</span><br/><br/>
    <span>获取某个日期的前几天或几天后的日期：{{getIntervalDay}}</span><br/><br/>
    <span>获取date的n个月前的今天的日期：{{getPreMonth}}</span><br/><br/>
    <span>获取某天的那周第一天{{getFirstDayOfWeek}}</span><br/><br/>
    <span>获取本月第一天{{getFirstDayOfMonth}}</span><br/><br/>
  </div>
</template>

<script>
// @ is an alias to /src
import dateFilter from '@/assets/js/dateFilter'

export default {
  name: 'Home',
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