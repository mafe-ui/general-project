import axios from "axios";
import { getdatatoken } from '@/plugins/axios.js';

function version() {
    let baseurl = window.location.origin + "/version.json"
    axios.get(baseurl)
        .then(function(response) {
            if (localStorage.hasOwnProperty("version")) {
                if (localStorage.getItem("version") != response.data.version) {
                    localStorage.setItem("version", response.data.version)
                    window.location.reload();
                }
            } else {
                localStorage.setItem("version", response.data.version)
                window.location.reload();
            }

        })
        .catch(function(error) {
            console.log(error);
        });
}
// 判断是否开户
function judgeOpenStatus(path) {
    this.$store.dispatch('setOpenObj', { openStatus: true, path: path })
}
// 判断是否登录
function jugeLogin() {
    if (localStorage.hasOwnProperty('Token') == true) {
        return true
    } else {
        return false
    }
}

function removeLocal() {
    localStorage.removeItem('Token')
    localStorage.removeItem('Role')
    localStorage.removeItem('Area')
    localStorage.removeItem('Code')
    localStorage.removeItem('TelArea')
    localStorage.removeItem('TopRegTokenCode')
}

function clickButton() {
    this.subMitState = false
    setTimeout(() => {
        this.subMitState = true
    }, 5000)
}

//处理 “判断是否重复请求”
function dataToken() {
    getdatatoken({}).then(r => {
        // store.state.idempotence = r.data;
        this.$store.dispatch('setIdempotence', r.data)
    })
}
export default {
    install: function(Vue) {
        Vue.prototype.$version = version
        Vue.prototype.$judgeOpenStatus = judgeOpenStatus
        Vue.prototype.$jugeLogin = jugeLogin
        Vue.prototype.$removeLocal = removeLocal
        Vue.prototype.$clickButton = clickButton
        Vue.prototype.$dataToken = dataToken
    }
}