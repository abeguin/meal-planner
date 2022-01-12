import { Unit } from "./unit"

export type KgCalorie = Unit;

export const from = (value: number): KgCalorie => ({
  value,
  toString: () => `${value.toFixed(0)} [kg calorie]`
})
