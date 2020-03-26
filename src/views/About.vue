<template>
  <div>
    about
     <div v-asyncClick="{event: requestTest,delayTime:500}">requestTest</div>
     <button @click="requestTest" v-preventReClick>preventReClick</button>
    <!-- @click="scienceClick($event,requestTest)" -->
    <mf-input />
  </div>
</template>

<script>
import { getPushurl } from "@/plugins/axios";
import mfInput from '@/components/mf-input.vue'
export default {
  components:{
    mfInput
  },
  methods: {
    requestTest(e){
      console.log(666)
    },
  }
};
</script>

<style></style>
