import { Unit } from "../units/unit"
import { Protein } from "./protein"
import { Lipid } from "./lipid"
import { Carbohydrate } from "./carbohydrate"
import { KgCalorie } from "../units/kgCalorie"

export type Food = {
  id: string;
  name: string;
  quantity: Unit;
  protein: Protein;
  lipid: Lipid;
  carbohydrate: Carbohydrate;
  calories: KgCalorie;
}
