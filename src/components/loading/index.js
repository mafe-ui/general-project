//先引入loading组件
import LoadingComponent from './mf-loading'
const Loading = {}
Loading.install = function(Vue) {
    // 生成一个Vue的子类 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(LoadingComponent)
        // 生成一个该子类的实例
    const instance = new ToastConstructor({
            propsData: {
                type: '2',
                visible: false,
                txt: ''
            }
        })
        // 将这个实例挂载在我创建的div上
        // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
        //注入vue的原型链

    Vue.prototype.$loading = {
        show(obj) {
            instance.type = obj.hasOwnProperty('type') ? obj.type : '1';
            instance.txt = obj.hasOwnProperty('txt') ? obj.txt : '';
            instance.visible = true;
        },
        close() {
            instance.visible = false;
        }
    }
}
export default Loading