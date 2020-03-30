<template>
<div class="mf-input">
    <div class="mf-input-item">
        <span :class="[{'input input--hoshi':inputClasses=='input__field input__field--hoshi'},
        {'input__field input__field--madoka':inputClasses=='input__field input__field--madoka'},
        ]">
            <input :id="elementId" :autocomplete="autocomplete" :spellcheck="spellcheck" ref="input" :type="type" :class="inputClasses" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :number="number" :autofocus="autofocus" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput" @change="handleChange" />
            <label v-if="label" :for="elementId">{{label}}</label>
            <label v-else :class="[{'input__label input__label--hoshi input__label--hoshi-color-2':inputClasses=='input__field input__field--hoshi'},
        {'input__label input__label--madoka':inputClasses=='input__field input__field--madoka'},
        ]" :for="elementId">
                <svg v-if="inputClasses=='input__field input__field--madoka'" class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                    <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                </svg>
                <span>Street</span>
                <!-- <span :class="[
                {'input__label-content input__label-content--madoka':inputClasses=='input__field input__field--madoka'},
                {'input__label-content input__label-content--hoshi':inputClasses=='input__field input__field--hoshi'},]">Street</span> -->
            </label>
        </span>
    </div>

    <!-- <div class="mf-input-item">
        <span class="input input--madoka">
            <input class="input__field input__field--madoka" type="text" id="input-31">
            <label class="input__label input__label--madoka" for="input-31">
                <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                    <path d="m0,0l404,0l0,77l-404,0l0,-77z"></path>
                </svg>
                <span class="input__label-content input__label-content--madoka">Frequency</span>
            </label>
        </span>
    </div>
    <div class="mf-input-item">
        <span class="input input--hoshi">
            <input class="input__field input__field--hoshi" type="text" id="input-5">
            <label class="input__label input__label--hoshi input__label--hoshi-color-2" for="input-5">
                <span class="input__label-content input__label-content--hoshi">Street</span>
            </label>
        </span>
    </div> -->
</div>
</template>

<script>
export default {
    name: "mf-input",
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        number: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        spellcheck: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        elementId: {
            type: String
        },
        inputClasses: {
            type: String
        },
        label: {
            type: String,
            default: ''
        },

    },
    data() {
        return {
            currentValue: this.value,
        }
    },
    methods: {
        handleEnter(event) {
            this.$emit('on-enter', event);
        },
        handleKeydown(event) {
            this.$emit('on-keydown', event);
        },
        handleKeypress(event) {
            this.$emit('on-keypress', event);
        },
        handleKeyup(event) {
            this.$emit('on-keyup', event);
        },
        handleIconClick(event) {
            this.$emit('on-click', event);
        },
        handleFocus(event) {
            this.$emit('on-focus', event);
        },
        handleBlur(event) {
            this.$emit('on-blur', event);
        },
        handleInput(event) {
            let value = event.target.value;
            if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value);
            this.$emit('input', value);
            this.setCurrentValue(value);
            this.$emit('on-change', event);
        },
        handleChange(event) {
            this.$emit('on-input-change', event);
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return;
            this.currentValue = value;
        },
    },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
