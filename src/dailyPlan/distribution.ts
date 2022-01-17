import { DailyPlan } from "./dailyPlan"
import { Goal } from "../plan/goal"

export const targetEnergyPerMeal = (dailyPlan?: DailyPlan, goal?: Goal): number =>
  (goal?.calories?.value ?? 0) / (dailyPlan?.meals?.length ?? 1)

export const distribute = (dailyPlan: DailyPlan, goal: Goal) => {
  const {
    lipid,
    protein,
    calories,
    carbohydrate,
    carbohydratePercentage,
    proteinPercentage,
    lipidPercentage
  } = goal

  const targetCalPerMeal = targetEnergyPerMeal(dailyPlan, goal)


}
