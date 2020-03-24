import axios from "axios";
import Vue from "vue";
import VueI18n from '@/assets/js/locale/i18n.js'


var qs = require("qs");

var time = null;


if (process.env.NODE_ENV === "development") { //开发环境
    axios.defaults.baseURL = "http://192.168.0.109:6598"; //李勇       
} else {
    axios.defaults.baseURL = ipconfig;
}
axios.defaults.timeout = 5000; //請求過期時間
Vue.prototype.$axios = axios.defaults.baseURL;

// 显示loading
let loadingFn = config => {
    clearTimeout(time);
    time = setTimeout(() => {
        // Vue.$vux.loading.show({
        //     text: ''
        // })
    }, 1000);
};
//不可發送多次請求的接口
let unrepeatStr = "/api/forgetpwdverify,/api/reg";

// 添加请求拦截器
axios.interceptors.request.use(
    function(config) {
        // 添加token
        let token = localStorage.getItem("Token");
        // 切换语言
        function lang() {
            // 将选择的语言存在localStorage中
            let t = localStorage.getItem('lang')
            if (t) return t
                // 默认中文
            else return 'en'
        }
        const language = lang()
        config.headers.common['Language'] = language
        if (token) {
            config.headers.common["Authorization"] = "Bearer " + token;
        }



    },
    function(error) {
        // 对请求错误做些什么
        //Vue.$vux.loading.hide();
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么

        return response;

    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

//axios请求超时,设置重新请求
axios.defaults.retry = 4;
axios.defaults.retryDelay = 5000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err);

    //判斷是否不發送多次請求
    let configUrl = config.url;
    let newUrl = configUrl.substring(configUrl.indexOf("/api"));
    if (unrepeatStr.indexOf(newUrl) >= 0) {
        return Promise.reject(err);
    }
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        clearTimeout(time);
        time = null;
        // Vue.$vux.loading.hide();
        // Vue.$vux.toast.text("连接超时，请稍后重试...", "middle");
        Vue.prototype.$Notice.warning({
            title: VueI18n.t('m.common.outTime'),
        });
        return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

//------------------------------------
export const getPushurl = pms => {
    const params = qs.stringify(pms);
    return axios.get("/api/getpushurl?" + params);
};
//获取是否重复请求得token
export const getdatatoken = pms => {
    const params = qs.stringify(pms);
    return axios.post("/api/getdatatoken", params);
};