import { createEntityAdapter, createSlice, Dispatch, EntityState } from "@reduxjs/toolkit"
import { DailyPlan } from "./dailyPlan"
import { RootState } from "../store"
import { deleteSavedDailyPlan, getAllSavedDailyPlans, getSavedDailyPlan, saveDailyPlan } from "./dailyPlanStorage"


export type DailyPlanState = EntityState<DailyPlan>

const adapter = createEntityAdapter<DailyPlan>()

/**
 * Configuration and reducers
 */
const dailyPlanSlice = createSlice({
  name: "dailyPlan",
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

const mealReducer = dailyPlanSlice.reducer

/**
 * Actions
 */
export const { add, remove, update, addMany } = dailyPlanSlice.actions

/**
 * Selectors
 */
export const dailyPlanState = (state: RootState) => state.dailyPlan
export const {
  selectAll,
  selectById,
  selectEntities,
  selectIds
} = adapter.getSelectors(dailyPlanState)

/**
 * Async actions
 */
export const postDailyPlan = (meal: DailyPlan) =>
  async (dispatch: Dispatch, getState: typeof dailyPlanState): Promise<void> => {
    const id = saveDailyPlan(meal)
    dispatch(add({ ...meal, id }))
  }

export const fetchDailyPlan = (id: string) =>
  async (dispatch: Dispatch, getState: typeof dailyPlanState): Promise<void> => {
    const meal = getSavedDailyPlan(id)
    if (meal) {
      dispatch(add(meal))
    }
  }

export const deleteDailyPlan = (id: string) =>
  async (dispatch: Dispatch, getState: typeof dailyPlanState): Promise<void> => {
    deleteSavedDailyPlan(id)
    dispatch(remove(id))
  }

export const updateDailyPlan = (meal: DailyPlan) =>
  async (dispatch: Dispatch, getState: typeof dailyPlanState): Promise<void> => {
    if (meal.id) {
      localStorage.setItem(meal.id, JSON.stringify(meal))
      dispatch(update({ id: meal.id, changes: meal }))
    }
  }

export const fetchAll = async (dispatch: Dispatch, getState: typeof dailyPlanState): Promise<void> => {
  const meals = getAllSavedDailyPlans()
  dispatch(addMany(meals))
}

export default mealReducer
