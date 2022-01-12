import { Unit } from "./unit"

export type GramPerKg = Unit;

export const from = (value: number): GramPerKg => ({
  value,
  toString: () => `${value.toFixed(0)} [g/kg]`
})
