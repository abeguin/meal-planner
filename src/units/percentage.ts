import { Unit } from "./unit"

export type Percentage = Unit & { displayDecimalValue: string, decimalValue: number };

export const from = (value: number): Percentage => ({
    value,
    displayValue: `${(+value).toPrecision(3)}%`,
    decimalValue: value / 100,
    displayDecimalValue: `${(+value / 100).toPrecision(3)}`
  }
)
