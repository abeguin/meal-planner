import { Unit } from "./unit"

export type ML = Unit;

export const from = (value: number): ML => ({
  value,
  displayValue: `${(+value).toFixed(0)}ml`
})
