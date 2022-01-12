import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material"
import React, { CSSProperties, useState } from "react"
import { Food } from "./food"


const FoodRow: React.FC<{ food: Food[], index: number, style?: CSSProperties }> = ({ food, index, style }) => {
  const [ checked, setChecked ] = useState<Food[]>([])

  const handleToggle = (value: Food) => () => {
    const currentIndex = checked.findIndex(v => v.id === value.id)
    const newChecked = [ ...checked ]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

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
