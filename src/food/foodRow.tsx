import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material"
import React, { CSSProperties } from "react"
import { Food } from "./food"


const FoodRow: React.FC<{
  food: Food[],
  index: number,
  handleToggle: (value: Food) => () => void,
  checked: Food[],
  style?: CSSProperties,
}> = ({ food, index, handleToggle, checked, style }) => {

  const f = food[index]
  const labelId = `food-${f.id}`

  return (
    <ListItem
      key={f.id}
      style={style}
      onClick={handleToggle(f)}
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleToggle(f)}
          checked={checked.indexOf(f) !== -1}
          inputProps={{ "aria-labelledby": labelId }}
        />
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText id={labelId} primary={food[index].name} />
      </ListItemButton>
    </ListItem>
  )
}

export default FoodRow
