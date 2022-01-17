import { Meal } from "../../meal/meal"
import { dinnerFixture, lunchFixture } from "../../meal/__fixture__/meal.fixture"
import { DailyPlan } from "../dailyPlan"

export const dailyPlanFixture = (props: {
  id?: string;
  date?: Date;
  meals?: Meal[]
} = {
  id: "1",
  date: new Date("2022-01-16"),
  meals: [
    lunchFixture,
    dinnerFixture
  ]
}): DailyPlan => {
  const {
    id = "1",
    date = new Date("2022-01-16"),
    meals = [
      lunchFixture,
      dinnerFixture
    ]
  } = props

  return { id, date, meals }
}
