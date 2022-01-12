import { Unit } from "./unit"

export type KgCalorie = Unit;

export const from = (value: number): KgCalorie => ({
  value,
  toString: () => `${value} [kg calorie]`
})
