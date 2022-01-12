import { Unit } from "./unit"

export type G = Unit;

export const from = (value: number): G => ({
  value,
  toString: () => `${value} [g]`
})
