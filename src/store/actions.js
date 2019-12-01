import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => { throw err })
  },
  fetchLists: ({ commit }) => {
    throw new Error('fetchLists action shold be implemented')
  },
  addTask: ({ commit }) => {
    throw new Error('addTask action shold be implemented')
  },
  updateTask: ({ commit }) => {
    throw new Error('updateTask action shold be implemented')
  },
  removeTask: ({ commit }) => {
    throw new Error('removeTask action shold be implemented')
  },
  logout: ({ commit }) => {
    throw new Error('logout action shold be implemented')
  }
}
