import { Unit } from "./unit"

export class G extends Unit {

  constructor(v: number) {
    super(v)
  }

  toString(): string {
    return `${this.value}g`
  }
}
