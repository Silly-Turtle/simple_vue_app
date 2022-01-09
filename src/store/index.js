import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    UPDATE_USER_EMAIL (state, { email, index }) {
      state.users[index].email = email
    },
    UPDATE_USER_NAME (state, { name, index }) {
      state.users[index].profile.name = name
    },
    UPDATE_USER_USERNAME (state, { username, index }) {
      state.users[index].username = username
    },
    DELETE_USER (state, index) {
      state.users.splice(index, 1)
    },
    CREATE_USER_LIST (state, userList) {
      state.users = userList
    }
  },
  actions: {
    updateUser ({ commit }, { email, name, username, userId }) {
      const isUserId = (user) => user.id === userId
      const index = this.state.users.findIndex(isUserId)
      commit('UPDATE_USER_EMAIL', { email, index })
      commit('UPDATE_USER_NAME', { name, index })
      commit('UPDATE_USER_USERNAME', { username, index })
    },
    deleteUser ({ commit }, userId) {
      const isUserId = (user) => user.id === userId
      const index = this.state.users.findIndex(isUserId)
      commit('DELETE_USER', index)
    },
    createUserList ({ commit }, userList) {
      commit('CREATE_USER_LIST', userList)
    }
  },
  modules: {
  }
})
