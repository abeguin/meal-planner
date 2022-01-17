import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material"
import React, { CSSProperties } from "react"
import { DailyPlan } from "./dailyPlan"
import { DeleteOutline } from "@mui/icons-material"
import * as fromDailyPlan from "./dailyPlanSlice"
import { useDispatch } from "react-redux"
import { useProteinTotal } from "./useProteinTotal"
import { useLipidTotal } from "./useLipidTotal"
import { useCarbohydrateTotal } from "./useCarbohydrateTotal"
import { useEnergyTotal } from "./useEnergyTotal"


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

  const [ protein, setProtein ] = useProteinTotal(dailyPlan)
  const [ lipid, setLipid ] = useLipidTotal(dailyPlan)
  const [ carbohydrate, setCarbohydrate ] = useCarbohydrateTotal(dailyPlan)
  const [ energy, setEnergy ] = useEnergyTotal(dailyPlan)

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
        <ListItemText
          id={labelId}
          primary={dailyPlan?.date?.toDateString()}
          secondary={`
            ${energy.displayValue},
            protein: ${protein.amount.displayValue},
            lipid: ${lipid.amount.displayValue},
            carbohydrate: ${carbohydrate.amount.displayValue}
          `}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default DailyPlanRow
