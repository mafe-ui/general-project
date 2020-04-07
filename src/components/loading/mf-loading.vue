<template>
  <div class="loading-con" v-show="vShow">
    <div :class="cls">
      <div></div>
      <div></div>
      <div v-if="type==3 || type==4"></div>
    </div>
    <span class="slot_text" v-if="txt">{{txt}}</span>
    <span class="slot_text" v-else><slot></slot></span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "eLoading",
  props: {
    type: String,
    visible: Boolean,
    txt:String
  },
  data() {
    return {
      cls: "ball-clip-rotate-pulse",
      vShow: false
    };
  },
  watch: {
    visible(val) {
      this.setLoading();
    }
  },
  mounted() {
    this.setLoading();
  },
  methods: {
    setLoading() {
      this.vShow = this.visible;
      if (this.type) {
        switch (this.type) {
          case "2":
            this.cls = "ball-clip-rotate-multiple";
            break;
          case "3":
            this.cls = "ball-triangle-path";
            break;
          case "4":
            this.cls = "ball-scale-multiple";
            break;
          default:
            this.cls = "ball-clip-rotate-pulse";
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
