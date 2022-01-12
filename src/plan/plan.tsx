import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as fromPlan from "./planSlice"
import tw from "twin.macro"
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from "@mui/material"
import { buildPlanSummary } from "./planSummary"
import { ACTIVITY_FACTORS, ActivityFrequency } from "../units/activity"

export type PlanFormFields = {
  weight?: number,
  bodyFat?: number,
  activityCoefficient?: ActivityFrequency,
  delta?: number,
  proteinCoefficient?: number,
  lipidCoefficient?: number,
}

const Plan: React.FC = () => {
  const dispatch = useDispatch()

  const [ plan, setPlan ] = useState<PlanFormFields>({
    weight: 67,
    bodyFat: 17,
    activityCoefficient: "NONE",
    delta: 25,
    proteinCoefficient: 2.3,
    lipidCoefficient: 1.5
  })

  const [ valid, setValid ] = useState<boolean>(false)

  const validateForm = (): void => {
    const incomplete = Object.values(plan)
      .map((v: number | ActivityFrequency) => !!v)
      .includes(false)
    setValid(!incomplete)
  }

  const handleChange = (prop: keyof PlanFormFields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan({ ...plan, [prop]: event?.target?.value })
  }

  const handleOptionChange = (prop: keyof PlanFormFields) => (event: SelectChangeEvent) => {
    setPlan({ ...plan, [prop]: event?.target?.value })
  }

  const handleSubmit = () => {
    const p = buildPlanSummary(plan)
    dispatch(fromPlan.add(p))
  }

  const renderActivityOptions = () => {
    const freq: ActivityFrequency[] = Object.keys(ACTIVITY_FACTORS) as ActivityFrequency[]
    return freq.map(key => (
      <MenuItem value={key}>
        {ACTIVITY_FACTORS[key].label}
      </MenuItem>)
    )
  }

  useEffect(() => {
    validateForm()
  })

  return (
    <Paper css={[ tw`mt-8` ]}>
      <Box
        component={"form"}
        autoComplete={"off"}
        css={[ tw`grid grid-cols-1 gap-4 m-8` ]}
      >
        <Typography variant={"h6"}>
          Personal information
        </Typography>
        <TextField
          label="Weight"
          id="weight"
          value={plan.weight}
          onChange={handleChange("weight")}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position={"end"}>kg</InputAdornment>
          }}
        />
        <TextField
          label="Body fat"
          id="bodyFat"
          onChange={handleChange("bodyFat")}
          value={plan.bodyFat}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>
          }}
        />
        <FormControl>
          <InputLabel id="activity-label">Activity frequency</InputLabel>
          <Select
            labelId="activity-label"
            id="activity-coefficient"
            value={plan.activityCoefficient}
            label={"Activity frequency"}
            onChange={handleOptionChange("activityCoefficient")}
          >
            {renderActivityOptions()}
          </Select>
        </FormControl>
        <Divider />
        <Typography variant={"h6"}>
          Energetic deficit
        </Typography>
        <TextField
          label="Energy deficit"
          id="caloricDeficit"
          value={plan.delta}
          onChange={handleChange("delta")}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>
          }}
        />
        <Divider />
        <Typography variant={"h6"}>
          Intake constraints
        </Typography>
        <TextField
          label="Protein coefficient"
          id="proteinCoefficient"
          value={plan.proteinCoefficient}
          onChange={handleChange("proteinCoefficient")}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position="end">g/kg</InputAdornment>
          }}
        />
        <TextField
          label="Lipid coefficient"
          id="lipidCoefficient"
          value={plan.lipidCoefficient}
          onChange={handleChange("lipidCoefficient")}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position="end">g/kg</InputAdornment>
          }}
        />
        <Button
          variant={"outlined"}
          disabled={!valid}
          onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Paper>
  )
}

export default Plan
