import { KG } from "../units/kg"
import { Percentage } from "../units/percentage"
import { KgCalorie } from "../units/kgCalorie"
import { GramPerKg } from "../units/gramPerKg"
import { Goal } from "./goal"


export type PlanSummary = {
  id?: string;
  weight: KG;
  fat: Percentage;
  activityFactor: number;
  maintenance: KgCalorie;
  delta: Percentage;
  proteinFactor: GramPerKg;
  lipidFactor: GramPerKg;
  goal: Goal;
}
