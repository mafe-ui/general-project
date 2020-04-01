<template>
<div id="app">
       <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <tabs @on-click="goRouter"  v-model="active" :anmited="true" animationDelay="0.3s" lineDelay="0.5s" offsetTop="0" :line="true"  :fixed="true" lineWidth="0.5rem"  lineColor="#58bc58" inactiveColor="#ccc" activeColor="#58bc58" lineHeight="0.03rem" :barPosition="{top:'0'}">
            <!-- to="/about" -->
            <tabsPane label="home" name="1" to='/'>
                <!-- <img src="./assets/logo.png" alt=""> -->
            </tabsPane>
            <tabsPane label="about" name="2" to='/about'>
                <!-- 2 -->
            </tabsPane>
            <tabsPane label="news" name="3">
                <!-- 2 -->
            </tabsPane>
            <tabsPane label="mine" name="4">
                <!-- 3 -->
            </tabsPane>
        </tabs>
    <!-- </div> -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
 
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
            active: 1,
        }
    },
    methods: {
        goRouter(label,name) {
            console.log(label,name)
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
