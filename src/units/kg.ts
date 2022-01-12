import { Unit } from "./unit"

export type KG = Unit;

export const from = (value: number): KG => ({
  value,
  displayValue: `${(+value).toFixed(1)}kg`
})
