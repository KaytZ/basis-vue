import Vue from "vue";
import Vuex from "vuex";
import request from "./assets/js/request";

Vue.use(Vuex);

export default new Vuex.Store({
  // 在这里添加需要全局维护的状态
  state: {
    user: {
      token: ""
    },
    language: localStorage.getItem("language") || "zh",
    theme: "light"
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      localStorage.setItem("language", language);
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    CLEAR_USER: state => {
      state.user = {};
    },
    SET_THEME: (state, theme) => {
      state.theme = theme;
    }
  },
  // actions 跟 mutations 作用相同，不过是异步操作
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
    Login({ commit }, userInfo) {
      return new Promise(resolve => {
        request({
          url: "/login",
          method: "post",
          params: {
            account: userInfo.account,
            password: userInfo.password
          }
        }).then(response => {
          commit("SET_USER", response);
          resolve(response);
        });
      });
    },
    LogOut({ commit }) {
      commit("CLEAR_USER");
    }
  },
  // getters 可根据需要使用
  getters: {
    user: state => {
      return state.user;
    },
    language: state => {
      return state.language;
    }
  }
});
