import { createEntityAdapter, createSlice, Dispatch, EntityState } from "@reduxjs/toolkit"
import { Meal } from "./meal"
import { RootState } from "../store"
import { deleteSavedMeal, getAllSavedMeals, getSavedMeal, saveMeal } from "../persistence/localStorage"


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
    const id = saveMeal(meal)
    dispatch(add({ ...meal, id }))
  }

export const fetchMeal = (id: string) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    const meal = getSavedMeal(id)
    if (meal) {
      dispatch(add(meal))
    }
  }

export const deleteMeal = (id: string) =>
  async (dispatch: Dispatch, getState: typeof mealState): Promise<void> => {
    deleteSavedMeal(id)
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
  const meals = getAllSavedMeals()
  dispatch(addMany(meals))
}

export default mealReducer
