import * as KgCalorieUnit from "../units/kgCalorie"
import * as KgUnit from "../units/kg"
import * as PercentageUnit from "../units/percentage"
import * as GPerKg from "../units/gramPerKg"
import * as Protein from "../food/protein"
import * as Lipid from "../food/lipid"
import * as Carbohydrate from "../food/carbohydrate"


export type Goal = {
  readonly calories: KgCalorieUnit.KgCalorie
  readonly protein: Protein.Protein
  readonly lipid: Lipid.Lipid
  readonly carbohydrate: Carbohydrate.Carbohydrate
  readonly proteinPercentage: PercentageUnit.Percentage
  readonly lipidPercentage: PercentageUnit.Percentage
  readonly carbohydratePercentage: PercentageUnit.Percentage

}

export const from = (
  weight: KgUnit.KG,
  bodyFat: PercentageUnit.Percentage,
  maintenance: KgCalorieUnit.KgCalorie,
  delta: PercentageUnit.Percentage,
  proteinCoefficient: GPerKg.GramPerKg,
  lipidCoefficient: GPerKg.GramPerKg
): Goal => {
  const calories = KgCalorieUnit.from(maintenance.value * (1 - delta.decimalValue))
  const protein = Protein.from((1 - bodyFat.decimalValue) * proteinCoefficient.value * weight.value)
  const lipid = Lipid.from((1 - bodyFat.decimalValue) * lipidCoefficient.value * weight.value)
  const energyLeft = calories.value - protein.energy.value - lipid.energy.value
  const carbohydrate = Carbohydrate.from(energyLeft)
  const proteinPercentage = PercentageUnit.from(protein.energy.value / calories.value * 100)
  const lipidPercentage = PercentageUnit.from(lipid.energy.value / calories.value * 100)
  const carbohydratePercentage = PercentageUnit.from(carbohydrate.energy.value / calories.value * 100)
  return {
    calories,
    protein,
    lipid,
    carbohydrate,
    proteinPercentage,
    lipidPercentage,
    carbohydratePercentage
  }
}
