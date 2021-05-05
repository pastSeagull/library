import * as constants from './constants'
import { apiGetData, login, borrow } from '../api'
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

export const changeValue = (value) => ({
  type: constants.GET_DATA,
  value,
})
