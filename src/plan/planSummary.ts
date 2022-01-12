import * as KgUnit from "../units/kg"
import * as PercentageUnit from "../units/percentage"
import * as KgCalorieUnit from "../units/kgCalorie"
import * as GramPerKgUnit from "../units/gramPerKg"
import * as Goal from "./goal"
import { PlanFormFields } from "./plan"

export type PlanSummary = {
  id?: string
  weight?: KgUnit.KG
  bodyFat?: PercentageUnit.Percentage
  activityCoefficient?: number
  maintenance?: KgCalorieUnit.KgCalorie
  delta?: PercentageUnit.Percentage
  proteinCoefficient?: GramPerKgUnit.GramPerKg
  lipidCoefficient?: GramPerKgUnit.GramPerKg
  goal?: Goal.Goal
}

export const BASE_CALORIE = 370
export const ENERGY_BURN_COEFFICIENT = 21.6

export const computeMaintenance = (
  weight: KgUnit.KG,
  bodyFat: PercentageUnit.Percentage,
  activityCoefficient: number
): KgCalorieUnit.KgCalorie => {
  const weightWithoutBodyFat = 1 - bodyFat.value
  const baseMetabolism = weightWithoutBodyFat * ENERGY_BURN_COEFFICIENT * weight.value
  const energyBurn = (baseMetabolism + BASE_CALORIE) * activityCoefficient
  return KgCalorieUnit.from(energyBurn)
}

export const buildPlanSummary = (props: PlanFormFields) => {
  const {
    activityCoefficient = 1.1
  } = props
  const weight = KgUnit.from(props.weight ?? 0)
  const bodyFat = PercentageUnit.from(props.bodyFat ?? 0)
  const delta = PercentageUnit.from(props.delta ?? 0)
  const proteinCoefficient = GramPerKgUnit.from(props.proteinCoefficient ?? 1)
  const lipidCoefficient = GramPerKgUnit.from(props.lipidCoefficient ?? 0.7)
  const maintenance = computeMaintenance(weight, bodyFat, activityCoefficient)
  const goal = Goal.from(weight, bodyFat, maintenance, delta, proteinCoefficient, lipidCoefficient)
  return {
    weight,
    bodyFat,
    activityCoefficient,
    delta,
    proteinCoefficient,
    lipidCoefficient,
    maintenance,
    goal
  }
}
