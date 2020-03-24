<template>
  <div>
    about
     <div v-asyncClick="{event: requestTest,delayTime:500}">requestTest</div>
     <button @click="requestTest" v-preventReClick>preventReClick</button>
    <!-- @click="scienceClick($event,requestTest)" -->
  </div>
</template>

<script>
import { getPushurl } from "@/plugins/axios";
export default {
  methods: {
    requestTest(e){
      console.log(666)
    },
  }
};
</script>

<style></style>
