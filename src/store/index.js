import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  //deleteCookie,
} from '@/utils/cookies';
// import {
//   saveLocalStorage,
//   getLocalStorage,
//   deleteLocalStorage,
// } from '@/utils/localStorage';
import { loginUser } from '../api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //쿠기에서 기본값 가져오기
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    // 로컬스토리지에서 기본값 가져오기
    // username: getLocalStorage('til_user') || '',
    // token: getLocalStorage('til_auth') || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      //쿠키에 삭제
      // deleteCookie('til_auth');
      // deleteCookie('til_user');
      // 로컬스토리지에 삭제
      // deleteLocalStorage('til_auth');
      // deleteLocalStorage('til_user');
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      //console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      //쿠키에 저장하기
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      // 로컬스토리지에 저장
      // saveLocalStorage('til_auth', data.token);
      // saveLocalStorage('til_user', data.user.username);
    },
  },
});
