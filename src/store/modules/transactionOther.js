const state = {
  marketRightShow: 0, //0：不显示行情右侧页面，1：買2賣3.設置指標  4.市價交易成功
  indicators: {
    //配置設置
    selIndicator1: "MA",
    selIndicator2: "MACD",
    rangeArr: {}
  },
  idempotence: "", //后台判断是否重复点击
  distanceData: {}, //下单
  winLossNum: {}, //再次交易----目标距离 ，止损距离
  patternObj: {}, //下单---展示模式/交易类型/盈利/亏损
  placeAnOrderData: {}, //下单成功/失敗
  marketObj: {}, //分时数据
  marketObjSel: 0, //当前选中的分时数据
  socketParams: "", //實時字段
  cancelCode: 0, //0:关闭  1:打开弹窗  2.确认
  headerSort: false, //訂單篩選
  earlyCode: 0, //提前结算订单号
  orderDetails: 0, //查看详情订单号
  earlyOver: {}, //提前结算
  changeOrder: {} //修改挂单
};

// getters
const getters = {
  getMarketRightShow: state => {
    return state.marketRightShow;
  },
  getIndicators: state => {
    return state.indicators;
  },
  getIdempotence: state => {
    return state.idempotence;
  },
  getDistanceData: state => {
    return state.distanceData;
  },
  getWinLossNum: state => {
    return state.winLossNum;
  },
  getPatternObj: state => {
    return state.patternObj;
  },
  getPlaceAnOrderData: state => {
    return state.placeAnOrderData;
  },
  getMarketObj: state => {
    return state.marketObj;
  },
  getMarketObjSel: state => {
    return state.marketObjSel;
  },
  getSocketParams: state => {
    return state.socketParams;
  },
  getCancelCode: state => {
    return state.cancelCode;
  },
  getHeaderSort: state => {
    return state.headerSort;
  },
  getEarlyCode: state => {
    return state.earlyCode;
  },
  getOrderDetails: state => {
    return state.orderDetails;
  },
  getEarlyOver: state => {
    return state.earlyOver;
  },
  getChangeOrder: state => {
    return state.changeOrder;
  }
};

// mutations
const mutations = {
  setMarketRightShow(state, data) {
    state.marketRightShow = data;
  },
  setIndicators(state, data) {
    state.indicators = data;
  },
  setIdempotence(state, data) {
    state.idempotence = data;
  },
  setDistanceData(state, data) {
    state.distanceData = data;
  },
  setWinLossNum(state, data) {
    state.winLossNum = data;
  },
  setPatternObj(state, data) {
    state.patternObj = data;
  },
  setPlaceAnOrderData(state, data) {
    state.placeAnOrderData = data;
  },
  setMarketObj(state, data) {
    state.marketObj = null;
    state.marketObj = data;
  },
  setMarketObjSel(state, data) {
    state.marketObjSel = data;
  },
  setSocketParams(state, data) {
    state.socketParams = data;
  },
  setCancelCode(state, data) {
    state.cancelCode = data;
  },
  setHeaderSort(state, data) {
    state.headerSort = data;
  },
  setEarlyCode(state, data) {
    state.earlyCode = data;
  },
  setOrderDetails(state, data) {
    state.orderDetails = data;
  },
  setEarlyOver(state, data) {
    state.earlyOver = data;
  },
  setChangeOrder(state, data) {
    state.changeOrder = data;
  }
};

// actions
const actions = {
  setMarketRightShow(conText, data) {
    conText.commit("setMarketRightShow", data);
  },
  setIndicators(conText, data) {
    conText.commit("setIndicators", data);
  },
  setIdempotence(conText, data) {
    conText.commit("setIdempotence", data);
  },
  setDistanceData(conText, data) {
    conText.commit("setDistanceData", data);
  },
  setWinLossNum(conText, data) {
    conText.commit("setWinLossNum", data);
  },
  setPatternObj(conText, data) {
    conText.commit("setPatternObj", data);
  },
  setPlaceAnOrderData(conText, data) {
    conText.commit("setPlaceAnOrderData", data);
  },
  setMarketObj(conText, data) {
    conText.commit("setMarketObj", data);
  },
  setMarketObjSel(conText, data) {
    conText.commit("setMarketObjSel", data);
  },
  setSocketParams(conText, data) {
    conText.commit("setSocketParams", data);
  },
  setCancelCode(conText, data) {
    conText.commit("setCancelCode", data);
  },
  setHeaderSort(conText, data) {
    conText.commit("setHeaderSort", data);
  },
  setEarlyCode(conText, data) {
    conText.commit("setEarlyCode", data);
  },
  setOrderDetails(conText, data) {
    conText.commit("setOrderDetails", data);
  },
  setEarlyOver(conText, data) {
    conText.commit("setEarlyOver", data);
  },
  setChangeOrder(conText, data) {
    conText.commit("setChangeOrder", data);
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
