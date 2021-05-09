import * as constants from './constants'
import { apiGetData, login, borrow, refresh } from '../api'
import { message } from 'antd'

const changeData = (data) => ({
  type: constants.GET_DATA,
  data: data,
})

const getLogin = (data) => ({
  type: constants.GET_LOGIN,
  data: data,
})

const borrowGet = (data) => ({
  type: constants.GET_BORROW,
  data: data,
})
const outLIgin = () => ({
  type: constants.OUT_LOGIN,
})
const changeRenew = (data) => ({
  type: constants.BW_RENEW,
  data: data,
})
const newFresh = (data) => ({
  type: constants.NEW_FRESH,
  data: data,
})
// 查询
export const getData = (value) => {
  return (dispatch) => {
    apiGetData(value)
      .then((res) => {
        const data = res
        dispatch(changeData(data.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
// 登录
export const userLogin = (value) => {
  return (dispatch) => {
    login(value)
      .then((res) => {
        const data = res.data
        if (data.status === 'ok') {
          message.success('登录成功')
          dispatch(getLogin(data))
        } else {
          message.error('账号或密码错误')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
// 退出登录
export const outLogin = () => {
  return (dispatch) => {
    dispatch(outLIgin())
  }
}
export const getBorrow = (value) => {
  return (dispatch) => {
    borrow(value)
      .then((res) => {
        const data = res
        dispatch(borrowGet(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
// 续借
export const changeBorrow = (borrow_id) => {
  return (dispatch) => {
    dispatch(changeRenew(borrow_id))
  }
}
// 续借后重新获取列表
export const fresh = (id) => {
  return (dispatch) => {
    refresh(id)
      .then((res) => {
        const data = res.data
        dispatch(newFresh(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const changeValue = (value) => ({
  type: constants.GET_DATA,
  value,
})
