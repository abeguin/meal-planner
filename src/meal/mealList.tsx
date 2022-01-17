import React from "react"
import { FixedSizeList } from "react-window"
import { useDispatch, useSelector } from "react-redux"
import * as fromMeal from "./mealSlice"
import MealRow from "./mealRow"
import { Meal } from "./meal"


const MealList: React.FC<{
  checked: Meal[],
  handleToggle: (value: Meal) => () => void
}> = ({ checked, handleToggle }) => {

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
            handleToggle={handleToggle}
            checked={checked}
            meals={meals}
            {...props}
          />
        )
      }
    </FixedSizeList>
  )
}

export default MealList
