import axios from "axios";
import Vue from "vue";
import store from "../store";
import router from "../router";
import VueI18n from '@/assets/js/locale/i18n.js'
import codeBack from '@/assets/js/codeBack.js'


var qs = require("qs");

// 限制快速点击
var requesting = [];
var limitTime = 2000; //請求間隔時間
var requestingId = "";

var time = null;

Vue.prototype.$dataToken;

if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "http://192.168.0.109:6598"; //李勇       
} else {
    axios.defaults.baseURL = ipconfig;
}
axios.defaults.timeout = 5000; //請求過期時間
Vue.prototype.$axios = axios.defaults.baseURL;

// 显示loading
let loadingFn = config => {
    if (config.data && config.data.toString().indexOf("noLoading") >= 0) {} else {
        clearTimeout(time);
        time = setTimeout(() => {
            // Vue.$vux.loading.show({
            //     text: ''
            // })
        }, 1000);
    }
};
//不可發送多次請求的接口
let unrepeatStr =
    "/api/forgetpwdverify,/api/reg,/api/order/submitorder,/api/user/cancelorder,/api/order/aheadcloseorder,/api/saveurlinfo,/api/savesonurlinfo,/api/saveibinfo,/api/recharge,/api/addbankcard,/api/addcreditcard,/api/withdraw,";

// 添加请求拦截器
axios.interceptors.request.use(
    function(config) {
        // 添加token
        let token = localStorage.getItem("Token");
        let idempotence = store.state.transactionOther.idempotence;
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
        if (idempotence) {
            config.headers.common["Idempotence"] = idempotence;
        }

        // 限制快速点击
        var requestingId = JSON.stringify(config.data);
        if (config.method === "post" && requestingId) {
            let nowTime = new Date().getTime();
            requesting = requesting.filter(item => {
                return item.startTime + limitTime > nowTime;
            });
            let sessionUrl = requesting.filter(item => {
                return item.requestingId === requestingId;
            });

            if (sessionUrl.length > 0) {
                // 请求重复 中断请求
                let configUrl = config.url;
                let newUrl = configUrl.substring(configUrl.indexOf("/api"));
                if (unrepeatStr.indexOf(newUrl) >= 0) {
                    config.url = "/api/getdatatoken";
                    config.method = "post";
                }
                return config;
            } else {
                let item = {
                    requestingId: requestingId,
                    startTime: nowTime
                };
                requesting.push(item);

                loadingFn(config);
                return config;
            }
        } else {
            loadingFn(config);
            return config;
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
        clearTimeout(time);
        time = null;
        // Vue.$vux.loading.hide();
        var routerPath = router.history.current.fullPath;
        if (response.data.code == "-100") {
            //token过期或为空
            if (
                routerPath.indexOf("main/mine") == -1 &&
                routerPath.indexOf("register") == -1 &&
                routerPath.indexOf("login") == -1 &&
                routerPath.indexOf("forgetPassword") == -1
            ) {
                // 路由守卫
                if (
                    routerPath.indexOf("register") == -1 &&
                    routerPath.indexOf("login") == -1
                ) {
                    removeLocal();
                }
            }
            store.state.loginPath = routerPath;

            function removeLocal() {
                localStorage.removeItem("Token");
                localStorage.removeItem("Role");
                localStorage.removeItem("Area");
                localStorage.removeItem("Code");
                localStorage.removeItem("TopRegTokenCode");
            }
            sessionStorage.removeItem("UserInfo");
            router.push({ name: "login" })
        } else if (
            response.data.hasOwnProperty("rst") &&
            response.data.rst != true &&
            response.data.msg
        ) {
            //请求失败
            // if (
            //     // routerPath.indexOf("login") == -1 &&
            //     routerPath.indexOf("register") == -1
            // ) {
            if (response.data.code != '-105') {
                let str = codeBack.setCode(response.data.code, response.data.param)
                    // Vue.$vux.toast.text(str, 'middle')
                Vue.prototype.$Notice.warning({
                    title: str
                });
                if (response.data.code != 37) {
                    Vue.prototype.$dataToken;
                }
            }
            // Vue.prototype.$Notice.warning({
            //     title: response.data.msg,
            // });
            // Vue.$vux.toast.text(response.data.msg, "middle");
            //      Vue.$vux.toast.text('连接超时，请稍后重试...', 'middle')
            // if (response.data.code != 37) {
            //     Vue.prototype.$dataToken;
            // }
            // }
        }
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