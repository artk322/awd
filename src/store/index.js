import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    records: [],
  },
  getters: {
    records: state => state.records,
  },
  mutations: {
    addToRecords(state, payload) {
      state.records.push(payload);
    },
    removeFromRecords(state, id) {
      state.records.find((el, idx) => {
        if (el && el.id == id) {
          state.records.splice(idx, 1);
        }
      })
    }
  },
  actions: {

  },
  modules: {
  }
})
