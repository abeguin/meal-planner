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
    update: adapter.updateOne,
    addMany: adapter.addMany
  }
})

const mealReducer = mealSlice.reducer

/**
 * Actions
 */
export const { add, remove, update, addMany } = mealSlice.actions

/**
 * Selectors
 */
export const mealState = (state: RootState) => state.meal
export const {
  selectAll,
  selectById,
  selectEntities,
  selectIds
} = adapter.getSelectors(mealState)

/**
 * Async actions
 */

const LOCAL_STORAGE_IDS_KEY = "meals-planner-all-meals-ids"

export const postMeal = (meal: Meal) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    const id = nanoid()
    localStorage.setItem(id, JSON.stringify({ ...meal, id }))
    const mealsId = localStorage.getItem(LOCAL_STORAGE_IDS_KEY)
    let ids = [ id ]
    if (mealsId) {
      const stored: string[] = JSON.parse(mealsId)
      ids = [ id, ...stored ]
    }
    localStorage.setItem(LOCAL_STORAGE_IDS_KEY, JSON.stringify(ids))
    dispatch(add({ ...meal, id }))
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
    const mealsId = localStorage.getItem(LOCAL_STORAGE_IDS_KEY)
    if (mealsId) {
      const ids: string[] = JSON.parse(mealsId)
      const toDelete = ids.findIndex(storedId => storedId === id)
      ids.splice(toDelete, 1)
      localStorage.setItem(LOCAL_STORAGE_IDS_KEY, JSON.stringify(ids))
    }
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

export const fetchAll = async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
  const mealsId = localStorage.getItem(LOCAL_STORAGE_IDS_KEY)
  if (mealsId) {
    const ids: string[] = JSON.parse(mealsId)
    const meals: Meal[] = ids.map(id => JSON.parse(localStorage.getItem(id) ?? "undefined"))
    dispatch(addMany(meals))
  }
}

export default mealReducer
