import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: { 
    loggedIn: false
  },
  reducers: {
    changeLoginStatus: (state, action) => {
      state.loggedIn = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeLoginStatus } = loginSlice.actions

export default loginSlice.reducer
