import { DailyPlan } from "./dailyPlan"
import * as fromLocalStorage from "../persistence/localStorage"

const LOCAL_STORAGE_DAILY_PLAN_IDS_KEY = "daily-plans-planner-all-meals-ids"

export const getSavedIds = (): string[] => {
  const mealsId = localStorage.getItem(LOCAL_STORAGE_DAILY_PLAN_IDS_KEY)
  return mealsId ? JSON.parse(mealsId) : []
}

export const saveId = (id: string) => {
  const savedIds = getSavedIds()
  const ids = [ id, ...savedIds ]
  localStorage.setItem(LOCAL_STORAGE_DAILY_PLAN_IDS_KEY, JSON.stringify(ids))
}

export const saveDailyPlan = (meal: DailyPlan): string => {
  const id = fromLocalStorage.save(meal)
  saveId(id)
  return id
}

export const getSavedDailyPlan = (id: string): DailyPlan | undefined => {
  const dailyPlan = fromLocalStorage.get(id) as DailyPlan
  return {
    ...dailyPlan,
    date: new Date(dailyPlan.date)
  } as DailyPlan
}

export const removeSavedDailyPlanId = (id: string): void => {
  const ids = getSavedIds()
  const toDelete = ids.findIndex(storedId => storedId === id)
  ids.splice(toDelete, 1)
  localStorage.setItem(LOCAL_STORAGE_DAILY_PLAN_IDS_KEY, JSON.stringify(ids))

}

export const deleteSavedDailyPlan = (id: string): void => {
  removeSavedDailyPlanId(id)
  localStorage.removeItem(id)
}

export const getAllSavedDailyPlans = () => {
  const savedIds = getSavedIds()
  return savedIds.map(getSavedDailyPlan).filter(Boolean) as DailyPlan[]
}

