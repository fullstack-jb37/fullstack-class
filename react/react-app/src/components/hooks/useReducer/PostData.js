import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

function PostData() {
  const initialState = {
    ids: [],
    checks: [
      { id: 1, checked: false },
      { id: 2, checked: false },
      { id: 3, checked: false },
      { id: 4, checked: false },
      { id: 5, checked: false },
      { id: 6, checked: false },
    ],
    dataState: {
      isLoading: false,
      users: [],
      error: '',
    },
  }

  const reducer = (currState, action) => {
    const { type, value: actionValue } = action
    switch (type) {
      case 'check':
        return {
          ...currState,
          checks: [
            ...currState.checks.filter((obj) => obj.id !== actionValue.id),
            { id: actionValue.id, checked: actionValue.event.target.checked },
          ].sort((a, b) => a.id - b.id),
        }
      case 'setIds':
        return {
          ...currState,
          ids: actionValue,
        }
      case 'setDataState':
        const { isLoading, users, error } = actionValue
        return {
          ...currState,
          dataState: {
            ...currState.dataState,
            ...(isLoading !== undefined ? { isLoading } : {}),
            ...(users ? { users } : {}),
            ...(error ? { error } : {}),
          },
        }
      default:
        return currState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function postUsers() {
      try {
        dispatch({
          type: 'setDataState',
          value: { isLoading: true, error: '' },
        })
        const res = await axios.post(
          'http://localhost:3001/bulk-users',
          state.ids
        )
        console.log('res')
        console.log(res)
        dispatch({
          type: 'setDataState',
          value: { isLoading: false, error: '', users: res.data },
        })
      } catch (error) {
        dispatch({
          type: 'setDataState',
          value: { isLoading: false, error: error.message, users: [] },
        })
      }
    }
    postUsers()
  }, [state.ids])

  const pushIds = () => {
    const filtered = state.checks.filter((obj) => obj.checked)
    console.log(filtered)
    const mapped = filtered.map((obj) => obj.id)
    console.log(mapped)
    dispatch({ type: 'setIds', value: mapped })
  }

  return (
    <div>
      <form>
        {state.checks.map((check, index) => (
          <div key={check.id}>
            <label>ID {check.id}</label>
            <input
              type="checkbox"
              checked={state.checks[index].checked}
              onChange={(event) => {
                dispatch({
                  type: 'check',
                  value: { id: check.id, event },
                })
              }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            pushIds()
          }}
        >
          Submit
        </button>
      </form>

      <div>
        <div>{state.dataState.isLoading && 'Loading...'}</div>
        <div>{state.dataState.error}</div>
        <ul>
          {state.dataState.users.map((user) => (
            <li key={user.id}>
              Full Name: {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PostData
