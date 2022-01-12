import { KG } from "../units/kg"
import { Percentage } from "../units/percentage"
import { KgCalorie } from "../units/kgCalorie"
import { GramPerKg } from "../units/gramPerKg"
import { Goal } from "./goal"
import { PlanFormFields } from "./plan"


export type PlanSummary = {
  id?: string
  weight?: KG
  bodyFat?: Percentage
  activityCoefficient?: number
  maintenance?: KgCalorie
  delta?: Percentage
  proteinCoefficient?: GramPerKg
  lipidCoefficient?: GramPerKg
  goal?: Goal
}


export const BASE_CALORIE = 370
export const ENERGY_BURN_COEFF = 21.6

export const computeMaintenance = (
  weight: number,
  bodyFat: Percentage,
  activityCoefficient: number
): KgCalorie => {
  const weightWithoutBodyFat = 1 - bodyFat.value
  const baseMetabolism = weightWithoutBodyFat * ENERGY_BURN_COEFF * weight
  const energyBurn = baseMetabolism * activityCoefficient
  console.log(
    weight,
    bodyFat,
    activityCoefficient,
    weightWithoutBodyFat,
    baseMetabolism,
    energyBurn
  )
  return new KgCalorie(energyBurn)
}

export const buildPlanSummary = (props: PlanFormFields) => {
  const {
    weight = 0,
    bodyFat = 0,
    activityCoefficient = 1.1,
    delta = 0,
    proteinCoefficient = 1.5,
    lipidCoefficient = 0.7
  } = props
  const maintenance = computeMaintenance(weight, new Percentage(bodyFat), activityCoefficient)
  const goal = new Goal(weight, bodyFat, maintenance.value, delta, proteinCoefficient, lipidCoefficient)
  return {
    weight: new KG(weight),
    bodyFat: new Percentage(bodyFat),
    activityCoefficient,
    delta: new Percentage(delta),
    proteinCoefficient: new GramPerKg(proteinCoefficient),
    lipidCoefficient: new GramPerKg(lipidCoefficient),
    maintenance,
    goal
  } as PlanSummary
}
