import axios from 'axios'
import {
  USERS_POST_REQUEST,
  USERS_GET_REQUEST,
  USERS_POST_RES_SUCCEEDED,
  USERS_GET_RES_SUCCEEDED,
  USERS_POST_RES_FAILED,
  USERS_GET_RES_FAILED,
} from './types.js'

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: USERS_GET_REQUEST })
      const res = await axios.get('http://127.0.0.1:3001')
      const emails = res.data.map((user) => user.email)
      dispatch({ type: USERS_GET_RES_SUCCEEDED, payload: emails })
    } catch (error) {
      dispatch({ type: USERS_GET_RES_FAILED, payload: error.response.status })
    }
  }
}

export const postUsers = (ids) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USERS_POST_REQUEST })
      const res = await axios.post('http://127.0.0.1:3001/bulk-users', ids)
      const names = res.data.map(
        (user) => `${user.first_name} ${user.last_name}`
      )
      dispatch({ type: USERS_POST_RES_SUCCEEDED, payload: names })
    } catch (error) {
      dispatch({ type: USERS_POST_RES_FAILED, payload: error.response.status })
    }
  }
}
