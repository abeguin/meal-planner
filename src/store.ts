import { configureStore } from "@reduxjs/toolkit"
import foodSlice from "./food/foodSlice"
import planSlice from "./plan/planSlice"
import thunkMiddleware from "redux-thunk"
import mealSlice from "./meal/mealSlice"

const store = configureStore({
  reducer: {
    plan: planSlice,
    food: foodSlice,
    meal: mealSlice
  },
  middleware: getDefaultMiddleware => [
    thunkMiddleware,
    ...getDefaultMiddleware()
  ]
})

const createStore = () => store

export type RootState = ReturnType<typeof store.getState>;

export default createStore
