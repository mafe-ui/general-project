import Vue from "vue";
import Vuex from "vuex";
// import createLogger from '../../../src/plugins/logger'
import createPersistedState from "vuex-persistedstate";
import transaction from "./modules/transaction";
import transactionOther from "./modules/transactionOther";
Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        reducer(val) {
            return {
                // 需要储存的数据
                transaction: val.transaction,
            }
        }
    })],
    modules: {
        transaction, //交易
        transactionOther,
    },
})