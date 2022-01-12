import { Unit } from "./unit"

export type G = Unit;

export const from = (value: number): G => ({
  value,
  displayValue: `${(+value).toFixed(0)}g`
})
