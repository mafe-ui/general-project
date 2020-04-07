<template>
  <div class="button-con">
    <button :class=cls :data-text="btnText" v-if="hoverType && hoverType==2"  @click="reButton" :disabled="disabled" @mousemove="wave">
        <span v-for="(text,t) in btnText" :key="t">{{text}}</span>
    </button>
    <button :class=cls :data-text="btnText" v-else  @click="reButton" :disabled="disabled" @mousemove="wave">
        <span><slot></slot></span>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "eButton",
  props: {
    hoverType: String,
    focusType: String,
    inverted: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      btnText: "",
      cls: "button",
      btns: 0,
      x:0,
      y:0,
    };
  },
  mounted() {
    this.btnText = this.$slots.default[0].text;

    if (this.hoverType && this.hoverType == 1) {
      this.cls = "button button--winona";
    } else if (this.hoverType && this.hoverType == 2) {
      this.cls = "button button--nina";
    } else if (this.hoverType && this.hoverType == 3) {
      this.cls = "button button--wayra";
    }


    if (this.inverted) {
      this.cls += " button--inverted";
    }
  },
  methods: {
    
    reButton() {
      if (this.focusType && this.focusType == 1) {
        this.cls += " button--moema";
      } else if (this.focusType && this.focusType == 2) {
        this.cls += " button--wapasha";
      } else if (this.focusType && this.focusType == 3) {
         this.cls += " button--wave";
          var div = document.createElement("div");
          div.style.left = this.x + "px";
          div.style.top = this.y + "px";
          this.$el.childNodes[0].appendChild(div);
          setTimeout(()=>{
            this.$el.childNodes[0].removeChild(div);
          }, 600);
        
      }

      setTimeout(() => {
        this.cls = this.cls.replace(" button--moema", "");
        this.cls = this.cls.replace(" button--wapasha", "");
        this.cls = this.cls.replace(" button--wave", "");
      }, 500);
    },
    wave(e) {
      this.x = e.clientX - this.$el.offsetLeft;
      this.y = e.clientY - this.$el.offsetTop;
    }
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
