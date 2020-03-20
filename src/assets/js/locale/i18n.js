import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载


// 切换语言
function lang() {
    // 将选择的语言存在localStorage中
    let t = localStorage.getItem('lang')
    if (t) return t
        // 默认中文
    else return 'en'
}
const language = lang()
const i18n = new VueI18n({
    locale: language, // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh': require('./lang/zh'), // 中文语言包
        'en': require('./lang/en') // 英文语言包
    }
})

export default i18n