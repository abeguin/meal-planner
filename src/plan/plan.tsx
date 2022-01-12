import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as fromPlan from "./planSlice"
import tw from "twin.macro"
import { Box, Button, Divider, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { buildPlanSummary } from "./planSummary"

export type PlanFormFields = {
  weight?: number,
  bodyFat?: number,
  activityCoefficient?: number,
  delta?: number,
  proteinCoefficient?: number,
  lipidCoefficient?: number,
}

const Plan: React.FC = () => {
  const dispatch = useDispatch()

  const [ plan, setPlan ] = useState<PlanFormFields>({
    weight: 67,
    bodyFat: 17,
    activityCoefficient: 1.35,
    delta: 25,
    proteinCoefficient: 2.3,
    lipidCoefficient: 1.5
  })

  const [ valid, setValid ] = useState<boolean>(false)

  const validateForm = (): void => {
    const incomplete = Object.values(plan).map(v => !!v).includes(false)
    setValid(!incomplete)
  }

  const handleChange = (prop: keyof PlanFormFields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan({ ...plan, [prop]: event?.target?.value })
  }

  const handleSubmit = () => {
    const p = buildPlanSummary(plan)
    dispatch(fromPlan.add(p))
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
        <TextField
          label="Activity coefficient"
          id="activityCoefficient"
          value={plan.activityCoefficient}
          onChange={handleChange("activityCoefficient")}
          type={"number"}
        />
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
