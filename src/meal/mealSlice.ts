import { createEntityAdapter, createSlice, Dispatch, EntityState, nanoid } from "@reduxjs/toolkit"
import { Meal } from "./meal"
import { RootState } from "../store"


export type MealState = EntityState<Meal>

const adapter = createEntityAdapter<Meal>()

/**
 * Configuration and reducers
 */
const mealSlice = createSlice({
  name: "meal",
  initialState: {
    ids: [],
    entities: {}
  },
  reducers: {
    add: adapter.upsertOne,
    remove: adapter.removeOne,
    update: adapter.updateOne
  }
})

const mealReducer = mealSlice.reducer

/**
 * Actions
 */
export const { add, remove, update } = mealSlice.actions

/**
 * Selectors
 */
export const mealState = (state: RootState) => state.meal
export const {
  selectAll,
  selectById,
  selectEntities,
  selectIds
} = adapter.getSelectors()

/**
 * Async actions
 */
export const postMeal = (meal: Meal) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    const id = nanoid()
    localStorage.setItem(id, JSON.stringify({ ...meal, id }))
    dispatch(add(meal))
  }

export const fetchMeal = (id: string) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    const meal = localStorage.getItem(id)
    if (!!meal?.length) {
      dispatch(add(JSON.parse(meal)))
    }
  }

export const deleteMeal = (id: string) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    localStorage.removeItem(id)
    dispatch(remove(id))
  }

export const updateMeal = (meal: Meal) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    if (meal.id) {
      localStorage.setItem(meal.id, JSON.stringify(meal))
      dispatch(update({ id: meal.id, changes: meal }))
    }
  }

export default mealReducer
