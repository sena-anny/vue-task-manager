import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation shold be implemeted')
  },
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    throw new Error('FETCH_ALL_TASKLIST mutation shold be implemeted')
  },
  [types.ADD_TASK] (state, payload) {
    throw new Error('ADD_TASK mutation shold be implemeted')
  },
  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutation shold be implemeted')
  },
  [types.REMOVE_TASK] (state, payload) {
    throw new Error('REMOVE_TASK mutation shold be implemeted')
  },
  [types.AUTH_LOGOUT] (state) {
    throw new Error('AUTH_LOGOUT mutation shold be implemeted')
  }
}
