import { KgCalorie } from "../units/kgCalorie"
import { Lipid } from "../food/lipid"
import { Protein } from "../food/protein"
import { Carbohydrate } from "../food/carbohydrate"


export class Goal {
  readonly #calories: KgCalorie
  readonly #protein: Protein
  readonly #lipid: Lipid
  readonly #carbohydrate: Carbohydrate

  constructor(
    weight: number,
    bodyFat: number,
    maintenance: number,
    delta: number,
    proteinCoefficient: number,
    lipidCoefficient: number
  ) {
    this.#calories = new KgCalorie(maintenance * (1 - delta))
    this.#protein = new Protein((1 - bodyFat) * proteinCoefficient * weight)
    this.#lipid = new Lipid((1 - bodyFat) * lipidCoefficient * weight)
    const energyLeft = this.#calories.value - this.#protein.energy.value - this.#lipid.energy.value
    this.#carbohydrate = Carbohydrate.from(energyLeft)
  }
}
