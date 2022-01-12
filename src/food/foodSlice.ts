import { createEntityAdapter, createSlice, Dispatch, EntityState } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { Food } from "./food"
import * as fakeApi from "./__fixture__/food.fixture"

export type FoodState = EntityState<Food> & { last: string }

const adapter = createEntityAdapter<Food>()

/**
 * Initial state & reducers
 */
export const foodSlice = createSlice({
  name: "plan",
  initialState: {
    ids: [],
    entities: {}
  },
  reducers: {
    add: adapter.addOne,
    addMany: adapter.addMany
  }
})

/**
 * Actions
 */
export const { add, addMany } = foodSlice.actions

/**
 * Async actions
 */
export const fetchFood = async (dispatch: Dispatch, getState: () => FoodState) => {
  const food = await fakeApi.fetchFood()
  dispatch(addMany(food))
}

/**
 * Selectors
 */
export const foodState = (state: RootState) => state.food
export const {
  selectById,
  selectAll
} = adapter.getSelectors(foodState)

export default foodSlice.reducer
