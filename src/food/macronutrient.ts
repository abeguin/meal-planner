import { KgCalorie } from "../units/kgCalorie"
import { G } from "../units/g"


export abstract class Macronutrient {
  readonly abstract energy: KgCalorie
  readonly #amount: G

  constructor(a: G | number) {
    this.#amount = typeof a === "number" ? new G(a) : a
  }

  get amount(): G {
    return this.#amount
  }
}
