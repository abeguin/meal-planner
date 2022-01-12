import { Unit } from "./unit"

export type KG = Unit;

export const from = (value: number): KG => ({
  value,
  toString: () => `${value} [kg]`
})
