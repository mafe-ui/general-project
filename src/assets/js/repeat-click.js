// 注册
let vueAsyncClick = {};
let Helper = {
        getRandomKey() {
            return 'vue-async-' + Math.random().toString().replace(/\D/g, '');
        },
    }
    // 非异步时间点击等待时长单位ms
let workSpace = {};
vueAsyncClick.install = function(Vue) {
    Vue.directive('asyncClick', {
            bind: function(el, binding, vNode) {
                let delayTime = binding.value.delayTime ? binding.value.delayTime : 3000;
                let {
                    event,
                    params
                } = binding.value;
                let key = '';
                if (typeof event !== "function") throw ('asyncClick需要绑定一个事件');
                if (el.hasOwnProperty('vue-async-id')) {
                    key = el['vue-async-id'];
                } else {
                    key = el['vue-async-id'] = Helper.getRandomKey();
                    workSpace[key] = {};
                }
                workSpace[key] = {
                    event,
                    params
                }
                let isWork = true;
                el.addEventListener('click', async function(e) {
                    try {
                        if (params === undefined) {
                            workSpace[key].params = [e];
                        } else {
                            workSpace[key].params.push(e);
                        }
                        let _this = vNode.context;
                        if (isWork) {
                            isWork = false;
                            let type = Object.prototype.toString.call(workSpace[key].event);
                            await workSpace[key].event.apply(_this, workSpace[key].params);
                            if (['[object AsyncFunction]', '[object Promise]'].includes(type)) {
                                isWork = true;
                            } else {
                                setTimeout(() => {
                                    isWork = true;
                                }, delayTime);
                            }
                        }
                    } catch (error) {}
                });
            },
            update: function(el, binding) {
                var key = el['vue-async-id'];
                let {
                    event,
                    params
                } = binding.value;
                Object.assign(workSpace[key], {
                    event,
                    params
                })
            },
            unbind: function(el) {
                var key = el['vue-async-id'];
                var data = workSpace[key];
                el.removeEventListener('click', data.event);
                delete workSpace[key];
            }
        }),
        // 防重复点击(指令实现)
        Vue.directive('preventReClick', {
            inserted(el, binding) {
                el.addEventListener('click', () => {
                    if (!el.disabled) {
                        el.disabled = true
                        setTimeout(() => {
                            el.disabled = false
                        }, binding.value || 3000)
                    }
                })
            }
        })
}
export default vueAsyncClick;
// export default {
//     install(Vue) {
//         // 防重复点击(指令实现)
//         Vue.directive('preventReClick', {
//             inserted(el, binding) {
//                 el.addEventListener('click', () => {
//                     if (!el.disabled) {
//                         el.disabled = true
//                         setTimeout(() => {
//                             el.disabled = false
//                         }, binding.value || 3000)
//                     }
//                 })
//             }
//         })
//     }
// }
// /**
//  * 函数防抖 (只执行最后一次点击)
//  * @param fn
//  * @param delay
//  * @returns {Function}
//  * @constructor
//  */
// export const Debounce = (fn, t) => {
//     let delay = t || 500;
//     let timer;
//     console.log(fn)
//     console.log(typeof fn)
//     return function() {
//         let args = arguments;
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             timer = null;
//             fn.apply(this, args);
//         }, delay);
//     }
// };
// /**
//  * 函数节流
//  * @param fn
//  * @param interval
//  * @returns {Function}
//  * @constructor
//  */
// export const Throttle = (fn, t) => {
//     let last;
//     let timer;
//     let interval = t || 500;
//     return function() {
//         let args = arguments;
//         let now = +new Date();
//         if (last && now - last < interval) {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 last = now;
//                 fn.apply(this, args);
//             }, interval);
//         } else {
//             last = now;
//             fn.apply(this, args);
//         }
//     }
// };
// export default {
//     Debounce,
//     Throttle
// }