import * as KgUnit from "../../units/kg"
import * as PercentageUnit from "../../units/percentage"
import * as KgCalorieUnit from "../../units/kgCalorie"
import * as GPerKg from "../../units/gramPerKg"
import * as Goal from "../goal"

export const goalFixture = (props: {
  weight?: KgUnit.KG,
  bodyFat?: PercentageUnit.Percentage,
  maintenance?: KgCalorieUnit.KgCalorie,
  delta?: PercentageUnit.Percentage,
  proteinCoefficient?: GPerKg.GramPerKg,
  lipidCoefficient?: GPerKg.GramPerKg
} = {
  weight: KgUnit.from(66),
  bodyFat: PercentageUnit.from(17),
  maintenance: KgCalorieUnit.from(2100),
  lipidCoefficient: GPerKg.from(1.5),
  delta: PercentageUnit.from(20),
  proteinCoefficient: GPerKg.from(2.3)
}) => {
  const {
    weight = KgUnit.from(66),
    bodyFat = PercentageUnit.from(17),
    maintenance = KgCalorieUnit.from(2100),
    lipidCoefficient = GPerKg.from(1.5),
    delta = PercentageUnit.from(20),
    proteinCoefficient = GPerKg.from(2.3)
  } = props

  return Goal.from(weight, bodyFat, maintenance, delta, proteinCoefficient, lipidCoefficient)
}
