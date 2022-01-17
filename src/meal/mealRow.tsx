import { Button, Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React, { CSSProperties } from "react"
import { Meal } from "./meal"
import { DeleteOutline } from "@mui/icons-material"
import * as fromMeal from "./mealSlice"
import { useDispatch } from "react-redux"


const MealRow: React.FC<{
  meals: Meal[],
  index: number,
  handleToggle?: (value: Meal) => () => void,
  checked?: Meal[],
  style?: CSSProperties,
}> = ({ meals, index, handleToggle, checked, style }) => {

  const dispatch = useDispatch()
  const meal = meals[index]
  const labelId = `meal-${meal.id}`

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (meal.id) {
      dispatch(fromMeal.deleteMeal(meal.id))
    }
  }

  const renderIcon = () => {
    console.log(meals)
    if (handleToggle && checked) {
      return (
        <ListItemIcon>
          <Checkbox
            edge="end"
            onChange={handleToggle(meal)}
            checked={checked.indexOf(meal) !== -1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
      )
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
        {renderIcon()}
        <ListItemText id={labelId} primary={meals[index].name} />
      </ListItemButton>
    </ListItem>
  )
}

export default MealRow
