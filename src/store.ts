import { configureStore } from "@reduxjs/toolkit"
import foodSlice from "./food/foodSlice"
import planSlice from "./plan/planSlice"
import thunkMiddleware from "redux-thunk"

const store = configureStore({
  reducer: {
    plan: planSlice,
    food: foodSlice
  },
  middleware: getDefaultMiddleware => [
    thunkMiddleware,
    ...getDefaultMiddleware({
      serializableCheck: false // Quick fix, see https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
    }) ]
})

const createStore = () => store

export type RootState = ReturnType<typeof store.getState>;

export default createStore
