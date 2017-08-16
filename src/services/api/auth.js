import request from '../request'

const path = '/users'

function register (data) {
  console.log('in register: ', data)
  return request({
    method : 'post',
    url: '/users',
    data : { user: data },
  })
}

function login (user) {
  return request({
    url: '/login',
    method : 'POST',
    data : { email: user.email, password: user.password}
  })
}

function logout () {
  return request({
    url: '/logout',
    method : 'POST'
  })
}

const AuthService = {
  register, login, logout,
}

export default AuthService
