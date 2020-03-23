<template>
  <div>
    about
    <button @click="requestTest">requestTest</button>
  </div>
</template>

<script>
import { getPushurl } from '@/plugins/axios'
export default {
  methods: {
    requestTest(){
      let pms = {pms:1};
      getPushurl(pms).then(r => {
        console.log(r)
      })
    }
  }
}
</script>

<style>

</style>

