import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  userId: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.userId = action.payload.userId
    },
    removeUser(state) {
      state.email = null
      state.userId = null
    }
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer