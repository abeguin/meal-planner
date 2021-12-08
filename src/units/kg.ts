import { Unit } from "./unit"

export class KG extends Unit {

  constructor(v: number) {
    super(v)
  }

  toString(): string {
    return `${this.value}kg`
  }
}
