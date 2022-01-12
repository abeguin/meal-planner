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
  name: "food",
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
 * Selectors
 */
export const foodState = (state: RootState) => state.food
export const {
  selectById,
  selectAll
} = adapter.getSelectors(foodState)


/**
 * Async actions
 */
export const fetchFood = async (dispatch: Dispatch, getState: typeof foodState): Promise<void> => {
  const food = await fakeApi.fetchFood()
  dispatch(addMany(food))
}

export default foodSlice.reducer
