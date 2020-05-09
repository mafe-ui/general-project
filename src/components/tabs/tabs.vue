<template>
<div class="mf-tabs " :style="currentOffsetTop" :class="[{'mf-tabs-fix-bar':fixed},{'mf-tabs-absolute-bar':absolute},{'mf-tabs-sticky-bar':sticky}]">
    <div class="mf-tabs-bar"  >
        <!--标签页标题，通过v-for实现循环-->
        <div :class="tabCls(item)" v-for="(item,index) in navList" :key="item.name">
            <span :style="{color:(item.name==currentValue?activeColor:inactiveColor)}" @click="handleClick(index)" >{{item.label}}</span>
        </div>
        <span v-if="line" id="mf-tabs-tips" :style="currentStyle" ref="mf-tabs-tips"></span>
    </div>
    <div class="mf-tabs-content">
        <!-- slot放置pane组件内容-->
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'mf-tabs',
    props: {
        value: [String, Number],
        lineWidth: [Number, String],
        lineHeight: [Number, String],
        lineColor: String,
        inactiveColor: String,
        activeColor: String,
        offsetTop: {
            type: [Number, String],
            default: 0
        },
        lineDelay: {
            type: [Number, String],
            default: '0.5s'
        },
          animationDelay: {
            type: [Number, String],
            default: '0.5s'
        },
        sticky: {
            type: Boolean,
            default: false,
        },
        fixed: {
            type: Boolean,
            default: false,
        },
        absolute: {
            type: Boolean,
            default: false,
        },
        anmited: {
            type: Boolean,
            default: true,
        },
        line: {
            type: Boolean,
            default: true,
        },
        barPosition: {
            type: [String, Object],
            default: function () {
                return {
                    bottom: '0'
                }
            }
        },
    },
    data() {
        return {
            currentValue: this.value,
            navList: [],
            position: this.barPosition,
        }
    },
    computed: {
        currentStyle() {
            let style = [this.barPosition, {
                width: this.lineWidth
            }, {
                height: this.lineHeight
            }, {
                backgroundColor: this.lineColor
            }, {
                transition: `left ${this.lineDelay}` 
            }];
            return style ? style : []
        },
        currentOffsetTop() {
            return this.sticky ? [{top:this.offsetTop}] : []
        }
    },
    methods: {
        tabCls(item) {
            return [
                'mf-tabs-tab',
                {
                    'mf-tabs-tab-active': item.name === this.currentValue
                }
            ]
        },
        getTabs() {
            //获取pane
            return this.$children.filter(function (item) {
                return item.$options.name === 'pane'
            })
        },
        updateNav() {
            //获取标题，name,并放置到navList数组中
            this.navList = []
            let _this = this
            this.getTabs().forEach(function (pane, index) {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index,
                    isLink: pane.to || ""
                })
                if (!pane.name) pane.name = index
                if (index === 0) {
                    if (!_this.currentValue) {
                        _this.currentValue = pane.name || index
                    }
                }
            })
            this.updateStatus()
        },
        updateStatus() {
            let tabs = this.getTabs()
            let _this = this
            tabs.forEach(function (tab) {
                let b = tab.name === _this.currentValue
                tab.show = b
                return tab.show
            })
        },
        handleClick(index) {
            let nav = this.navList[index]
            let name = nav.name
            let label = nav.label
            let isLink = nav.isLink
            this.currentValue = name
            this.$emit('input', name)
            this.$emit('on-click',label, name)
            this.$nextTick(() => {
                this.tipChange(index)
            })
            if (isLink) {
                this.$router.push({
                    path: isLink
                })
            }
        },
        tipChange(index) {
            var itemWidth = document.getElementsByClassName("mf-tabs-tab")[0].offsetWidth;
            var tips = this.$refs['mf-tabs-tips'];
            //自身div的一半 - 滑块的一半
            tips.style.left = itemWidth * index + itemWidth / 2 - tips.offsetWidth / 2 + 'px';

        }
    },
    watch: {
        value: function (val) {
            this.currentValue = val

        },
        currentValue() {
            this.updateStatus()
        }
    },
    mounted() {
        this.handleClick(this.currentValue)

    }
}
</script>

<style lang="scss" scoped>
@import './style';
</style>
