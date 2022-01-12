import * as GUnit from "../units/g"
import { Macronutrient } from "./macronutrient"
import * as KgCalorieUnit from "../units/kgCalorie"

export const PROTEIN_ENERGY_COEFFICIENT = 4

export type Protein = Macronutrient;

export const from = (amount: number): Protein => ({
  amount: GUnit.from(amount),
  energy: KgCalorieUnit.from(amount * PROTEIN_ENERGY_COEFFICIENT)
})
