import * as GUnit from "../units/g"
import { Macronutrient } from "./macronutrient"
import * as KgCalorieUnit from "../units/kgCalorie"

export const CARBOHYDRATE_ENERGY_COEFFICIENT = 4

export type Carbohydrate = Macronutrient;

export const from = (energy: number): Carbohydrate => ({
  amount: GUnit.from(energy / CARBOHYDRATE_ENERGY_COEFFICIENT),
  energy: KgCalorieUnit.from(energy)
})

