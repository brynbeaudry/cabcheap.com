import request from '../request'

function getRoutes (data) {
  // console.log('in register: ', data)
  return request({
    method : 'get',
    url: '/route',
    data : { user: data },
  })
}

const MapService = {
  getRoutes
}

export default MapService
