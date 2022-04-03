import { createStore } from 'redux'
import { user as userReducer } from './reducers'

export default (
  state = {
    user: {
      authorized: false,
      name: null,
      emailAddr: null,
    }
  }) => {
  return createStore(userReducer, state)
}