import request from '../request'

const path = '/users'

function register (data) {
  return request({
    url: '/users',
    method : 'POST'
  })
}

function login(email, password){
  return request({
    url: '/login',
    method : 'POST'
  })
}

function logout(){
  return request({
    url: '/logout',
    method : 'POST'
  })
}

const UserService = {
  register, login, logout,
}

export default UserService
