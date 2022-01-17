import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DailyPlan } from "./dailyPlan"
import * as Protein from "../food/protein"

export const useProteinTotal = (dailyPlan: DailyPlan): [ Protein.Protein, Dispatch<SetStateAction<Protein.Protein>> ] => {
  const [ protein, setProtein ] = useState(Protein.from(0))
  useEffect(() => {
    if (protein.energy.value === 0) {
      const p = dailyPlan.meals.flatMap(m => m.ingredients)
        .flatMap(i => i.protein)
        .reduce(
          (prec, curr) =>
            Protein.from(prec.amount.value + curr.amount.value),
          Protein.from(0))
      setProtein(p)
    }
  }, [ protein ])

  return [ protein, setProtein ]
}
