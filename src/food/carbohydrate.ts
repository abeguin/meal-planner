import { G } from "../units/g"
import { Macronutrient } from "./macronutrient"
import { KgCalorie } from "../units/kgCalorie"


export class Carbohydrate extends Macronutrient {
  readonly energy: KgCalorie
  readonly #factor: number = 4

  constructor(a: number | G) {
    super(a)
    const amount = typeof a === "number" ? a : a.value
    this.energy = new KgCalorie(amount * this.#factor)
  }

  static from(energy: number): Carbohydrate {
    return new Carbohydrate(energy / 4)
  }
}
