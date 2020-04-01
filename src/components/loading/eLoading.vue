<template>
  <div class="loading-con">
    <div class="loader" v-if="type==1">
        <div class="loader-inner ball-clip-rotate-pulse">
          <div></div>
          <div></div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "eLoading",
  props: {
    type: String
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
