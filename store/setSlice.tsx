import { createSlice } from "@reduxjs/toolkit";

const unmountingDuration = 500

const setSlice = createSlice({
  name: 'set',
  initialState: {
    requestCallFormOpened: false,
    requestCallFormIsUnmounting: false,
  },
  reducers: {
    setRequestCallFormOpened(state) {
      state.requestCallFormIsUnmounting = false
      state.requestCallFormOpened = true
    },
    setRequestCallFormClosed(state) {
      state.requestCallFormOpened = false
    },
    setRequestCallFormUnmounted(state) {
      state.requestCallFormIsUnmounting = true      
    },   

  }
})

export default setSlice.reducer

export const {
  setRequestCallFormOpened,
  setRequestCallFormClosed,
  setRequestCallFormUnmounted,
} = setSlice.actions