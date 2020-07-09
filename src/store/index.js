import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/users'
Vue.use(Vuex)

const state = {
  loginUserName: '',
  loginUserRole: 1,
  lang: ''
}

const getters = {
  loginUserName: state => state.loginUserName,
  loginUserRole: state => state.loginUserRole,
  lang: state => state.lang
}

const mutations = {
  setUserName (state, data) {
    state.loginUserName = data
  },
  setUserRole (state, data) {
    state.loginUserRole = data
  },
  setLang (state, data) {
    state.lang = data
  }
}

const actions = {
  getUserName ({commit}) {
    return new Promise((resolve, reject) => {
      // http.get(url.logErp).then((data) => {
      //   data = data || {}
      //   commit('setUserName', data.erp)
      //   resolve({erp: data.erp})
      // }, (err) => {
      //   reject(err)
      // })
    })
  },
  getUserRole ({commit}) {
    return new Promise((resolve, reject) => {
      // http.get(url.logRole).then((data) => {
      //   if (data === '') {
      //     data = {}
      //   }
      //   commit('setUserRole', data.attach ? 0 : 1)
      //   resolve({role: data.attach ? 0 : 1})
      // }).catch(() => {
      //   commit('setUserRole', 1)
      //   resolve({role: 1})
      // })
    })
  }
}

export default new Vuex.Store({
  modules: {
    user
  },
  state,
  getters,
  mutations,
  actions
})
