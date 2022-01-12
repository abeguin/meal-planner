import * as GUnit from "../units/g"
import { Macronutrient } from "./macronutrient"
import * as KgCalorieUnit from "../units/kgCalorie"

export const ENERGY_PER_GRAM_OF_PROTEIN = 4

export type Protein = Macronutrient;

export const from = (amount: number): Protein => ({
  amount: GUnit.from(amount),
  energy: KgCalorieUnit.from(amount * ENERGY_PER_GRAM_OF_PROTEIN)
})
