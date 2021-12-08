import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import * as fromPlan from "./planSlice"
import { Percentage } from "../units/percentage"
import { Lipid } from "../food/lipid"
import { KgCalorie } from "../units/kgCalorie"
import { Carbohydrate } from "../food/carbohydrate"
import { Protein } from "../food/protein"
import { GramPerKg } from "../units/gramPerKg"
import { KG } from "../units/kg"
import { RootState } from "../store"


const Plan: React.FC = () => {
  const dispatch = useDispatch()

  //const plan = useSelector((state: RootState) => fromPlan.selectById(state.plan, 1))


  return (
    <div>
      <button onClick={() => dispatch(fromPlan.add({
        activityFactor: 10,
        delta: new Percentage(1),
        fat: new Percentage(0),
        lipidFactor: new GramPerKg(1),
        proteinFactor: new GramPerKg(2),
        maintenance: new KgCalorie(0),
        weight: new KG(60),
        goal: {
          calories: new KgCalorie(0),
          carbohydrate: new Carbohydrate(0),
          lipid: new Lipid(0),
          protein: new Protein(0)
        }
      }))}>
        dispatch
      </button>
    </div>
  )
}

export default Plan
