import fetch from './fetch'
import store from '../store'

export function apiGetData(value) {
  return fetch({
    url: '/api/v1/search',
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    data: {
      value: value,
    },
  })
}
export function login(value) {
  return fetch({
    url: '/api/v1/userLogin',
    method: 'post',
    data: {
      value: value,
    },
  })
}

export function borrow(value) {
  return fetch({
    url: '/api/v1/getBorrow',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'post',
    data: {
      value: value,
    },
  })
}
export function borrowRenew(borrow_id) {
  return fetch({
    url: '/api/v1/borrowRenew',
    headers: {
      Authorization: `Bearer ${store.getState().token}`,
    },
    method: 'get',
    params: {
      borrow_id,
    },
  })
}

export function refresh(id) {
  return fetch({
    url: '/api/v1/renew',
    headers: {
      Authorization: `Bearer ${store.getState().token}`,
    },
    method: 'post',
    data: {
      id,
    },
  })
}

// 登录校验
/* export function apiLogin(params) {
  return fetch({
    url: '/api/login/validate',
    method: 'get',
    params,
  })
} */
