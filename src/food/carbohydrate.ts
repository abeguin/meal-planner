import * as GUnit from "../units/g"
import { Macronutrient } from "./macronutrient"
import * as KgCalorieUnit from "../units/kgCalorie"

export const ENERGY_PER_GRAM_OF_CARBOHYDRATE = 4

export type Carbohydrate = Macronutrient;

export const from = (energy: number): Carbohydrate => ({
  amount: GUnit.from(energy / ENERGY_PER_GRAM_OF_CARBOHYDRATE),
  energy: KgCalorieUnit.from(energy)
})

