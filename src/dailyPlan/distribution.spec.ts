import { goalFixture } from "../plan/__fixture__/goal.fixture"
import { dailyPlanFixture } from "./__fixture__/dailyPlan.fixture"
import { targetEnergyPerMeal } from "./distribution"


describe("distribute", () => {

  describe("targetEnergyPerMeal", () => {

    it("given two meals, it should split calories in two", () => {
      // Given
      const dailyPlan = dailyPlanFixture()
      const goal = goalFixture()

      // When
      const targetEnergyPerMealPerMeal = targetEnergyPerMeal(dailyPlan, goal)

      // Then
      expect(targetEnergyPerMealPerMeal).toEqual(840)
    })

    it("given a goal without plan, it should return the total calorie of the plan", () => {
      // Given
      const dailyPlan = dailyPlanFixture()
      const goal = goalFixture()

      // When
      const target = targetEnergyPerMeal(undefined, goal)

      // Then
      expect(target).toEqual(1680)
    })

    it("given a plan without goal, it should return 0", () => {
      // Given
      const dailyPlan = dailyPlanFixture()
      const goal = goalFixture()

      // When
      const target = targetEnergyPerMeal(dailyPlan, undefined)

      // Then
      expect(target).toEqual(0)
    })

    it("given no goal nor dailyPlan, it should return 0", () => {
      // Given
      const dailyPlan = dailyPlanFixture()
      const goal = goalFixture()

      // When
      const target = targetEnergyPerMeal(undefined, undefined)

      // Then
      expect(target).toEqual(0)
    })
  })

})
