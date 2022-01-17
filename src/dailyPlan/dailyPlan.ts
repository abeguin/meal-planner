import { Meal } from "../meal/meal"

export type DailyPlan = {
  id?: string;
  date: Date;
  meals: Meal[]
}
