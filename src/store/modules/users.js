import http from '@/utils/http.js'

const user = {
  state: {
    userName: '',
    gender: 'male',
    avatar: '//img11.360buyimg.com/piclabel/jfs/t15118/359/1599279263/2658/56594741/5a53111aNdcd1fb1e.png',
    isLogin: false
  },

  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin
    },
    SET_USER_NAME: (state, userName) => {
      state.userName = userName
    },
    SET_GENDER: (state, gender) => {
      state.gender = gender
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        http.get('getUserInfo').then(response => {
          if (response.data.state === 'success') {
            const user = response.data.result
            commit('SET_IS_LOGIN', true)
            commit('SET_USER_NAME', user.userName)
            commit('SET_GENDER', user.gender)
            commit('SET_AVATAR', user.avatar)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
