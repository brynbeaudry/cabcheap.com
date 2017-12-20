import request from '../request'

function register (data) {
  console.log('in register: ', data)
  return request({
    method : 'post',
    url: '/register',
    data : { user: data },
  })
}

function login (user) {
  return request({
    url: '/login',
    method : 'POST',
    data : { email: user.email, password: user.password }
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
