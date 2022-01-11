import { KG } from "../units/kg"
import { Percentage } from "../units/percentage"
import { KgCalorie } from "../units/kgCalorie"
import { GramPerKg } from "../units/gramPerKg"
import { Goal } from "./goal"


export type PlanSummary = {
  id?: string;
  weight: KG;
  bodyFat: Percentage;
  activityCoefficient: number;
  maintenance: KgCalorie;
  delta: Percentage;
  proteinCoefficient: GramPerKg;
  lipidCoefficient: GramPerKg;
  goal: Goal;
}
