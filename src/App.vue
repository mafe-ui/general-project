<template>
<div id="app">
    <!-- <img src="./assets/logo.png" alt="" class="bg_logo_img"> -->


    <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <tabs @on-click="goRouter"  v-model="active" :anmited="true" animationDelay="0.3s" lineDelay="0.5s" offsetTop="0" :line="true"  :fixed="true" lineWidth="0.5rem"  lineColor="#58bc58" inactiveColor="#ccc" activeColor="#58bc58" lineHeight="0.03rem" :barPosition="{top:'0'}">
            <!-- to="/about" -->
            <tabsPane label="home" name="0" to=''>
                <!-- <img src="./assets/logo.png" alt=""> -->
            </tabsPane>
            <tabsPane label="about" name="1" to=''>
                <!-- 2 -->
            </tabsPane>
            <tabsPane label="news" name="2">
                <!-- 2 -->
            </tabsPane>
            <tabsPane label="mine" name="3">
                <!-- 3 -->
            </tabsPane>
        </tabs>
    <!-- </div> -->

    <transition :name="transitionName">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="child-view clearfix"></router-view>
        </keep-alive>
    </transition>
    <transition :name="transitionName">
        <router-view v-if="!$route.meta.keepAlive" class="child-view clearfix"></router-view>
    </transition>
        
    <div class="slide-mask" ref="slideMask">
        <div class="mask top-left"></div>
        <div class="mask bottom-right"></div>
        <div class="line" ref="slideLine"></div>
    </div>
 
</div>
</template>

<script>
import { tabs, tabsPane } from "@/components/tabs";
import router from "./router";

export default {
  components: {
    tabsPane,
    tabs
  },
  data() {
    return {
      beforeActive: -1,
      active: 0,
      transitionName: "slide-left", //初始过渡动画方向 {slide-left，slide-right,slide-hide,slide-scale,slide-mask}
      arr: [{ path: "/" }, { path: "/about" }]
    };
  },
  watch: {
    $route(to, from) {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        if(toDepth != fromDepth){
            this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
            window.scrollTo(0, 0);
        }
    }
  },
  mounted() {
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;
    let skewDeg =
      180 -
      parseInt(Math.atan(clientWidth / clientHeight) / Math.PI * 180) +
      "deg";
    this.$refs.slideLine.style.transform = "skew(" + skewDeg + ")";

    // 路由守卫
    this.routerBefore();
  },

  methods: {
    //tab跳转
    goRouter(label, name) {
      if (
        this.transitionName == "slide-left" ||
        this.transitionName == "slide-right"
      ) {
        if (this.beforeActive < this.active) {
          this.transitionName = "slide-right";
        } else {
          this.transitionName = "slide-left";
        }
      }
        this.$router.push({
          path: this.arr[name].path
        });
        this.beforeActive = this.active;
    },
    //slide-mask 显示消失
    allRouter() {
      if (this.transitionName == "slide-mask") {
        this.$refs.slideMask.style.display = "block";
        setTimeout(() => {
          this.$refs.slideMask.style.display = "none";
        }, 1500);
      }
    },
    // 路由守卫
    routerBefore() {
      router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
          // 判断该路由是否需要登录权限
          if (localStorage.hasOwnProperty("Token")) {
            // 判断本地是否存在access_token
            next();
          } else {
            next({
              path: "/login"
            });
          }
        } else {
          if (this.transitionName == "slide-mask") {
            this.allRouter();
            setTimeout(() => {
              next();
            }, 1000);
          } else {
            next();
          }
        }
        /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
        if (to.fullPath == "/login") {
          if (localStorage.hasOwnProperty("Token")) {
            next({
              path: from.fullPath
            });
          } else {
            next();
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: rem(80);
  background: white;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bg_logo_img {
  position: absolute;
  width: rem(200);
  height: rem(200);
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.child-view {
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
			height: 100%;
      -moz-box-sizing: border-box;
             box-sizing: border-box;
    transition: all .6s  cubic-bezier(0.42, 0, 0.58, 1.0);
}
</style>
