import { Dispatch, SetStateAction, useEffect, useState } from "react"
import * as Lipid from "../food/lipid"
import { DailyPlan } from "./dailyPlan"

export const useLipidTotal = (dailyPlan: DailyPlan): [ Lipid.Lipid, Dispatch<SetStateAction<Lipid.Lipid>> ] => {
  const [ lipid, setLipid ] = useState(Lipid.from(0))
  useEffect(() => {
    if (lipid.energy.value === 0) {
      const l = dailyPlan.meals.flatMap(m => m.ingredients)
        .flatMap(i => i.lipid)
        .reduce(
          (prec, curr) =>
            Lipid.from(prec.amount.value + curr.amount.value),
          Lipid.from(0))
      setLipid(l)
    }
  }, [ lipid ])

  return [ lipid, setLipid ]
}
