<template>
<div id="app">
       <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <tabs @on-click="goRouter"  v-model="active" :anmited="true" animationDelay="0.3s" lineDelay="0.5s" offsetTop="0" :line="true"  :fixed="true" lineWidth="0.5rem"  lineColor="#58bc58" inactiveColor="#ccc" activeColor="#58bc58" lineHeight="0.03rem" :barPosition="{top:'0'}">
            <!-- to="/about" -->
            <tabsPane label="home" name="0" to='/'>
                <!-- <img src="./assets/logo.png" alt=""> -->
            </tabsPane>
            <tabsPane label="about" name="1" to='/about'>
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
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>
    <transition :name="transitionName">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
        
 
</div>
</template>

<script>
import {
    tabs,
    tabsPane
} from '@/components/tabs'
export default {
    components: {
        tabsPane,
        tabs,
    },
    data() {
        return {
            active: 0,
            transitionName: 'slide-scale', //初始过渡动画方向
        }
    },
    methods: {
        goRouter(label,name) {
        },
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: rem(80);
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
</style>
