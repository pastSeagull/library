import * as constants from './constants'
const defaultState = {
  text: [],
  user: [],
  borrow: [],
  token: [],
}

const reducer = (state = defaultState, action) => {
  if (action.type === constants.GET_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.text = action.data
    return newState
  }
  if (action.type === constants.GET_LOGIN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.user = action.data.user
    newState.token = action.data.token
    return newState
  }
  if (action.type === constants.GET_BORROW) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.borrow = action.data
    return newState
  }
  return state
}

export default reducer
