import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DailyPlan } from "./dailyPlan"
import * as KgCalorie from "../units/kgCalorie"

export const useEnergyTotal = (dailyPlan: DailyPlan): [ KgCalorie.KgCalorie, Dispatch<SetStateAction<KgCalorie.KgCalorie>> ] => {
  const [ energy, setEnergy ] = useState(KgCalorie.from(0))
  useEffect(() => {
    if (energy.value === 0) {
      const c = dailyPlan.meals.flatMap(m => m.ingredients)
        .flatMap(i => i.calories)
        .reduce(
          (prec, curr) =>
            KgCalorie.from(prec.value + curr.value),
          KgCalorie.from(0))
      setEnergy(c)
    }
  }, [ energy ])

  return [ energy, setEnergy ]
}
