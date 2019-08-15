import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isLoggedIn = token ? true : false;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  }
});
