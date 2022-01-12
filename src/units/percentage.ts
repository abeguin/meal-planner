import { Unit } from "./unit"

export type Percentage = Unit;

export const from = (value: number): Percentage => ({
  value: value / 100,
  toString: () => `${value * 100}%`
})
