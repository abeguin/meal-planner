import { Unit } from "./unit"

export type GramPerKg = Unit;

export const from = (value: number): GramPerKg => ({
  value,
  displayValue: `${(+value).toFixed(0)}g/kg`
})
