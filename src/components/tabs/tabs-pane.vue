<template>
<div :class="{'pane pane-active':$parent.anmited}" v-show="show" :style="contentStyle">
    <!-- v-show="show" -->
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'pane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        },
        to: {
            type: [Object, String],
            default: ''
        }
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav()
        },
    },
    watch: {
        label() {
            this.updateNav()
        }
    },
    mounted() {
        this.updateNav()
    },
    computed: {
        active() {
            return this.show
        },
        contentStyle() {
            return [
                {
                visibility: this.$parent.currentValue !== this.name ? 'hidden' : 'visible'
            },{
                animationDelay: this.$parent.animationDelay 
            }
            ];
        }
    }
}
</script>
