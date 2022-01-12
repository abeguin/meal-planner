import { KgCalorie } from "../units/kgCalorie"
import { from, G } from "../units/g"

export type Macronutrient = {
  energy: KgCalorie;
  amount: G;
}
