import { KgCalorie } from "../units/kgCalorie"
import { Lipid } from "../food/lipid"
import { Protein } from "../food/protein"
import { Carbohydrate } from "../food/carbohydrate"


export type Goal = {
  calories: KgCalorie;
  protein: Protein;
  lipid: Lipid;
  carbohydrate: Carbohydrate;
}
