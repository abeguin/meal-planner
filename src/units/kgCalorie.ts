import { Unit } from "./unit"

export type KgCalorie = Unit;

export const from = (value: number): KgCalorie => ({
  value,
  displayValue: `${(+value).toFixed(0)}kcal`
})
