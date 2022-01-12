import React from "react"
import { FixedSizeList } from "react-window"
import { Food } from "./food"
import FoodRow from "./foodRow"
import { useDispatch, useSelector } from "react-redux"
import * as fromFood from "./foodSlice"


const FoodList: React.FC<{
  checked: Food[],
  handleToggle: (value: Food) => () => void
}> = ({ checked, handleToggle }) => {

  const dispatch = useDispatch()
  const food = useSelector(fromFood.selectAll)

  return (
    <FixedSizeList
      height={400}
      width={400}
      itemSize={46}
      itemCount={food.length}
      overscanCount={25}
    >
      {
        (props) => (
          <FoodRow
            handleToggle={handleToggle}
            checked={checked}
            food={food}
            {...props}
          />
        )
      }
    </FixedSizeList>
  )
}

export default FoodList
