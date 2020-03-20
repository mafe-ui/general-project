const state = {
    productCode: "", //产品编码
};

// getters
const getters = {
    getProductCode: state => {
        return state.productCode;
    },

};

// mutations
const mutations = {
    setProductCode(state, data) {
        state.productCode = data;
    },

};

// actions
const actions = {
    setProductCode(conText, data) {
        conText.commit("setProductCode", data);
    },
};

export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions
};