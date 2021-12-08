import { Unit } from "./unit"

export class Percentage extends Unit {
  toString(): string {
    return `${this.value}%`
  }
}
