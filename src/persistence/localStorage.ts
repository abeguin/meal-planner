import { nanoid } from "@reduxjs/toolkit"
import { Meal } from "../meal/meal"

const LOCAL_STORAGE_MEAL_IDS_KEY = "meals-planner-all-meals-ids"

export const save = (o: object): string => {
  const id = (o as Partial<{ id: string }>)?.id ?? nanoid()
  localStorage.setItem(id, JSON.stringify({ ...o, id }))
  return id
}

export const get = (key: string): object | undefined => {
  const stringItem = localStorage.getItem(key)
  if (stringItem) {
    return JSON.parse(stringItem)
  }
}

export const getSavedIds = (): string[] => {
  const mealsId = localStorage.getItem(LOCAL_STORAGE_MEAL_IDS_KEY)
  return mealsId ? JSON.parse(mealsId) : []
}

export const saveId = (id: string) => {
  const savedIds = getSavedIds()
  const ids = [ id, ...savedIds ]
  localStorage.setItem(LOCAL_STORAGE_MEAL_IDS_KEY, JSON.stringify(ids))
}

export const saveMeal = (meal: Meal): string => {
  const id = save(meal)
  saveId(id)
  return id
}

export const getSavedMeal = (id: string): Meal | undefined => {
  return get(id) as Meal
}

export const removeSavedMealId = (id: string): void => {
  const ids = getSavedIds()
  const toDelete = ids.findIndex(storedId => storedId === id)
  ids.splice(toDelete, 1)
  localStorage.setItem(LOCAL_STORAGE_MEAL_IDS_KEY, JSON.stringify(ids))

}

export const deleteSavedMeal = (id: string): void => {
  removeSavedMealId(id)
  localStorage.removeItem(id)
}

export const getAllSavedMeals = () => {
  const savedIds = getSavedIds()
  return savedIds.map(getSavedMeal).filter(Boolean) as Meal[]
}
