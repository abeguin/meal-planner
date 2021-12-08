import { Unit } from "./unit"

export class KgCalorie extends Unit {

  constructor(v: number) {
    super(v)
  }

  toString(): string {
    return `${this.value}`
  }
}
