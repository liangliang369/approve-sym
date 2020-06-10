import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken
} from '../utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken()
  },
  getters: {
    token(state) {
      token = state.token;
    }
  },
  mutations: {

  },
  actions: {

  }
})