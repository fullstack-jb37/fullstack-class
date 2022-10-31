import {
  USERS_POST_REQUEST,
  USERS_GET_REQUEST,
  USERS_POST_RES_SUCCEEDED,
  USERS_GET_RES_SUCCEEDED,
  USERS_POST_RES_FAILED,
  USERS_GET_RES_FAILED,
} from './types.js'
import { getUsers, postUsers } from './states.js'

export const getUsersReducer = (state = getUsers, action) => {
  const { type, payload } = action
  switch (type) {
    case USERS_GET_REQUEST:
      console.log('Before getting users')
      return {
        emails: [],
        loading: true,
        error: '',
      }
    case USERS_GET_RES_SUCCEEDED:
      console.log('After getting users')
      return {
        emails: payload,
        loading: false,
        error: '',
      }
    case USERS_GET_RES_FAILED:
      console.log('Failed getting users')
      return {
        emails: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export const postUsersReducer = (state = postUsers, action) => {
  const { type, payload } = action
  switch (type) {
    case USERS_POST_REQUEST:
      console.log('Before getting users')
      return {
        names: [],
        loading: true,
        error: '',
      }
    case USERS_POST_RES_SUCCEEDED:
      console.log('After getting users')
      return {
        names: payload,
        loading: false,
        error: '',
      }
    case USERS_POST_RES_FAILED:
      console.log('Failed getting users')
      return {
        names: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
