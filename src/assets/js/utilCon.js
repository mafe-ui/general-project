import { getdatatoken } from '@/api';
import Vue from 'vue'
import store from '@/store/'
export default {
    isAndroid() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isiOS ? '2' : '1'
    },
    //处理 “判断是否重复请求”
    dataToken() {
        getdatatoken({}).then(r => {
            store.state.idempotence = r.data;
        })
    }

}