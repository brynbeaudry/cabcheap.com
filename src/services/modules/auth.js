// ------------------------------------
// Imports
// ------------------------------------
// import {defaultStore} from '../../../store/createStore'
import AuthService from '../api/auth'

// ------------------------------------
// Constants
// ------------------------------------
export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'

// ------------------------------------
// Actions
// ------------------------------------
/* User object should be structured to include all relevant information
payload should be an axios.post(register roue, user)
*/
export function register (user = null) {
  return {
    type    : REGISTER_USER,
    payload : {
      promise: AuthService.register(user)
    }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
/*
export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}
*/
export const actions = {
  register,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REGISTER_USER_PENDING]  : (state, action) => ({ ...state, fetching : true }),
  [REGISTER_USER_REJECTED] : (state, action) => ({ ...state, fetching : false, user : null, error : action.payload }),
  [REGISTER_USER_FULFILLED] : (state, action) => ({ fetching : false, token : action.payload.auth.access_token, expires_in : action.payload.auth.expires_in, user :action.payload.user, error: null }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
