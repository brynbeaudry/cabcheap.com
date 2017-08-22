import request from '../request'

function getRoutes (data) {
  // console.log('in register: ', data)
  return request({
    method : 'post',
    url: '/users',
    data : { user: data },
  })
}

const MapService = {
  getRoutes
}

export default MapService
