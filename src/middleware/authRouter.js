import { browserHistory } from 'react-router'
import { updateLocation, locationChange } from '../store/location'

export const authRouter = store => next => action => {
  console.log('store', store)
  console.log('next', next)
  console.log('action', action)
  if (action.type === 'REGISTER_USER_FULFILLED' || action.type === 'LOGIN_USER_FULFILLED') {
    next(action)
    return browserHistory.push('/map')
    // somehwo this interrupts the fullfilled
  }
  return next(action)
}

export default authRouter
