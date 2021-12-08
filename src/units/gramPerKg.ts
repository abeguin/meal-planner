import { Unit } from "./unit"

export class GramPerKg extends Unit {

  constructor(v: number) {
    super(v)
  }

  toString(): string {
    return `${this.value}g/kg`
  }
}
