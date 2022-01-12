import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material"
import React, { CSSProperties } from "react"
import { Meal } from "./meal"
import { DeleteOutline } from "@mui/icons-material"
import * as fromMeal from "./mealSlice"
import { useDispatch } from "react-redux"


const MealRow: React.FC<{
  meals: Meal[],
  index: number,
  style?: CSSProperties,
}> = ({ meals, index, style }) => {

  const dispatch = useDispatch()
  const meal = meals[index]
  const labelId = `meal-${meal.id}`

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (meal.id) {
      dispatch(fromMeal.deleteMeal(meal.id))
    }
  }

  return (
    <ListItem
      key={meal.id}
      style={style}
      secondaryAction={
        <Button color={"error"} onClick={handleDelete}>
          <DeleteOutline />
        </Button>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText id={labelId} primary={meals[index].name} />
      </ListItemButton>
    </ListItem>
  )
}

export default MealRow
