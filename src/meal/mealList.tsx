import React, { useEffect } from "react"
import { FixedSizeList } from "react-window"
import { useDispatch, useSelector } from "react-redux"
import * as fromMeal from "./mealSlice"
import MealRow from "./mealRow"


const MealList: React.FC = () => {

  const dispatch = useDispatch()
  const meals = useSelector(fromMeal.selectAll)

  return (
    <FixedSizeList
      height={400}
      width={400}
      itemSize={46}
      itemCount={meals.length}
      overscanCount={25}
    >
      {
        (props) => (
          <MealRow
            meals={meals}
            {...props}
          />
        )
      }
    </FixedSizeList>
  )
}

export default MealList
