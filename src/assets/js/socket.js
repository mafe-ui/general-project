import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
var wesocket = {
    debug: false, //false为不打印，true为打印
    connection: '',
    vuex: {}
}

function getSocket(t) {
    //  getPushurl().then(r => {
    wesocket.connection = socketIp + '/price'
    if (localStorage.getItem('Token') || t) {
        let tk = localStorage.getItem('Token') ? localStorage.getItem('Token') : t;
        wesocket.connection = socketIp + '/price?usekey=' + tk;
        // wesocket.connection = response.data + '/price?usekey=3c10de400a5945d1b5b4564bcf649c1b'
    }

    if (wesocket.connection != '') {
        Vue.use(new VueSocketIO(wesocket))
    }

    //  })
}
getSocket()
Vue.prototype.$getSocket = getSocket;
window.addEventListener('setItemEvent', function(e) {
    if (e.key == 'Token' && e.newValue) {
        let token = e.newValue
        getSocket(token)
    }
})