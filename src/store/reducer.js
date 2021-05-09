import * as constants from './constants'
const defaultState = {
  text: [],
  user: [],
  borrow: [],
  token: [],
  by: [],
}

const reducer = (state = defaultState, action) => {
  // 换if
  if (action.type === constants.GET_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.text = action.data
    return newState
  }
  if (action.type === constants.GET_LOGIN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.user = action.data.user
    newState.token = action.data.token
    newState.borrow = action.data.borrow
    newState.by = action.data.by
    return newState
  }
  if (action.type === constants.GET_BORROW) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.borrow = action.data
    return newState
  }
  if (action.type === constants.OUT_LOGIN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.user = []
    newState.token = []
    newState.borrow = []
    newState.by = []
    return newState
  }
  if (action.type === constants.BW_RENEW) {
    // const newState = JSON.parse(JSON.stringify(state))
    console.log(action.data)
  }
  if (action.type === constants.NEW_FRESH) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.borrow = action.data.data
    return newState
  }
  return state
}

export default reducer
