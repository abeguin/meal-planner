import { Unit } from "./unit"

export class Percentage extends Unit {

  constructor(v: number) {
    super(v / 100)
  }

  toString(): string {
    return `${this.value * 100}%`
  }
}
