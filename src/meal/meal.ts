import { Food } from "../food/food"

export type Meal = {
  id?: string;
  name: string;
  ingredients: Food[]
}
