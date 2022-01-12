import * as GUnit from "../units/g"
import { Macronutrient } from "./macronutrient"
import * as KgCalorieUnit from "../units/kgCalorie"

export const LIPID_ENERGY_COEFFICIENT = 9

export type Lipid = Macronutrient;

export const from = (amount: number): Lipid => ({
  amount: GUnit.from(amount),
  energy: KgCalorieUnit.from(amount * LIPID_ENERGY_COEFFICIENT)
})


