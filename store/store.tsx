import { combineReducers, configureStore } from "@reduxjs/toolkit"
import setSlice from "./setSlice"


const rootReducer = combineReducers({
  set: setSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer
})


