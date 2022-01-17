import { Food } from "../../food/food"
import {
  beefFixture,
  chickenFixture,
  dressingFixture,
  foodListFixture,
  mayoFixture,
  milletFixture,
  rawRiceFixture,
  saladFixture
} from "../../food/__fixture__/food.fixture"
import { Meal } from "../meal"

export const mealFixture = (props: {
  id?: string,
  name?: string,
  ingredients?: Food[]
} = {
  id: "1",
  name: "Meal 1",
  ingredients: foodListFixture
}): Meal => {
  const {
    id = "1",
    name = "Meal 1",
    ingredients = foodListFixture
  } = props
  return { id, name, ingredients } as Meal
}

export const lunchFixture = mealFixture({
  name: "lunch",
  ingredients: [
    saladFixture,
    rawRiceFixture,
    chickenFixture,
    mayoFixture,
    dressingFixture
  ] as Food[]
})

export const dinnerFixture = mealFixture({
  name: "dinner",
  ingredients: [
    saladFixture,
    milletFixture,
    beefFixture,
    dressingFixture
  ] as Food[]
})
