import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material"
import React, { CSSProperties } from "react"
import { DailyPlan } from "./dailyPlan"
import { DeleteOutline } from "@mui/icons-material"
import * as fromDailyPlan from "./dailyPlanSlice"
import { useDispatch } from "react-redux"


const DailyPlanRow: React.FC<{
  dailyPlans: DailyPlan[],
  index: number,
  style?: CSSProperties,
}> = ({ dailyPlans, index, style }) => {

  const dispatch = useDispatch()
  const dailyPlan = dailyPlans[index]
  const labelId = `meal-${dailyPlan.id}`

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (dailyPlan.id) {
      dispatch(fromDailyPlan.deleteDailyPlan(dailyPlan.id))
    }
  }

  return (
    <ListItem
      key={dailyPlan.id}
      style={style}
      secondaryAction={
        <Button color={"error"} onClick={handleDelete}>
          <DeleteOutline />
        </Button>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText id={labelId} primary={dailyPlan?.date?.toDateString()} />
      </ListItemButton>
    </ListItem>
  )
}

export default DailyPlanRow
