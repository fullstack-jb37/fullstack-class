import axios from 'axios'
import toolkit from '@reduxjs/toolkit'
import { initialUsers } from '../states.js'

const { createSlice, createAsyncThunk } = toolkit

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios
    .get('http://localhost:3001/')
    .then((response) => response.data.map((user) => user.email))
})

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsers,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.emails = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.emails = []
      state.error = action.error.message
    })
  },
})

export const usersReducer = usersSlice.reducer
