import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DailyPlan } from "./dailyPlan"
import * as Carbohydrates from "../food/carbohydrate"

export const useCarbohydrateTotal = (dailyPlan: DailyPlan): [ Carbohydrates.Carbohydrate, Dispatch<SetStateAction<Carbohydrates.Carbohydrate>> ] => {
  const [ carbohydrate, setCarbohydrate ] = useState(Carbohydrates.from(0))
  useEffect(() => {
    if (carbohydrate.amount.value === 0) {
      const c = dailyPlan.meals.flatMap(m => m.ingredients)
        .flatMap(i => i.carbohydrate)
        .reduce(
          (prec, curr) =>
            Carbohydrates.from(prec.energy.value + curr.energy.value),
          Carbohydrates.from(0)
        )
      setCarbohydrate(c)
    }
  }, [ carbohydrate ])

  return [ carbohydrate, setCarbohydrate ]
}
