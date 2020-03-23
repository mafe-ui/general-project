<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <span>日期格式化：{{date}}</span><br/><br/>
    <span>日期格式化：{{day | newDataFormat}}</span><br/><br/>
    <span>今天日期：{{today}}</span><br/><br/>
    <span>获取某个日期的前几天或几天后的日期：{{getIntervalDay}}</span><br/><br/>
    <span>获取date的n个月前的今天的日期：{{getPreMonth}}</span><br/><br/>
    <span>获取某天的那周第一天{{getFirstDayOfWeek}}</span><br/><br/>
    <span>获取本月第一天{{getFirstDayOfMonth}}</span><br/><br/>

    <span>{{'0.234234234' | numPrecise(3)}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import dateFilter from '@/assets/js/dateFilter'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      day:new Date(),
      date:'',
      today:'',
      getIntervalDay:'',
      getPreMonth:'',
      getFirstDayOfWeek:'',
      getFirstDayOfMonth:'',
    }
  },
  sockets: {
    servermessage(data) {
        console.log(data)
    }
  },
  mounted(){
    this.today = dateFilter.getToday('mm/dd');
    this.date = dateFilter.timeFormat('2019-07-08','yyyy/mm');
    this.getIntervalDay = dateFilter.getIntervalDay('2019-07-08',-10);
    this.getPreMonth = dateFilter.getPreMonth('2019-07-08',6);
    this.getFirstDayOfWeek = dateFilter.getFirstDayOfWeek(new Date());
    this.getFirstDayOfMonth = dateFilter.getFirstDayOfMonth();
  },
  filters: {
      newDataFormat(date,type) {
          return dateFilter.timeFormat(date,type);
      }
  }
}
</script>
