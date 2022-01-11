import * as React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import * as fromPlan from "./planSlice"
import { Percentage } from "../units/percentage"
import { Lipid } from "../food/lipid"
import { KgCalorie } from "../units/kgCalorie"
import { Carbohydrate } from "../food/carbohydrate"
import { Protein } from "../food/protein"
import { GramPerKg } from "../units/gramPerKg"
import { KG } from "../units/kg"
import tw from "twin.macro"
import { Box, Button, Divider, InputAdornment, Paper, TextField, Typography } from "@mui/material"

type FormFields = {
  weight?: number,
  bodyFat?: number,
  activityCoefficient?: number,
  delta?: number,
  proteinCoefficient?: number,
  lipidCoefficient?: number,
  goal?: number
}

const Plan: React.FC = () => {
  const dispatch = useDispatch()

  const [ plan, setPlan ] = useState<FormFields>({
    weight: undefined,
    bodyFat: undefined,
    activityCoefficient: undefined,
    delta: undefined,
    proteinCoefficient: undefined,
    lipidCoefficient: undefined
  })

  const [ valid, setValid] = useState<boolean>(false)

  const validateForm = (): void => {
    const incomplete = Object.values(plan).map(v => !!v).includes(false)
    setValid(!incomplete)
  }

  const handleChange = (prop: keyof FormFields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan({ ...plan, [prop]: event?.target?.value })
    validateForm()
  }

  const handleSubmit = () => {

  }

  return (
    <Paper css={[ tw`mt-8` ]}>
      <Box
        component={"form"}
        autoComplete={"off"}
        css={[ tw`grid grid-cols-1 gap-4 m-16` ]}
      >
        <Typography variant={"h6"}>
          <h2>Baseline</h2>
        </Typography>
        <TextField
          label="Weight"
          id="weight"
          value={plan.weight}
          onChange={handleChange('weight')}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position={"end"}>kg</InputAdornment>
          }}
        />
        <TextField
          label="Body fat"
          id="bodyFat"
          onChange={handleChange('bodyFat')}
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
          onChange={handleChange('activityCoefficient')}
          type={"number"}
        />
        <Divider />
        <Typography variant={"h6"}>
          <h2>Goal</h2>
        </Typography>
        <TextField
          label="Caloric deficit"
          id="caloricDeficit"
          value={plan.delta}
          onChange={handleChange('delta')}
          type={"number"}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>
          }}
        />
        <Divider />
        <Typography variant={"h6"}>
          <h2>Constraints</h2>
        </Typography>
        <TextField
          label="Protein coefficient"
          id="proteinCoefficient"
          value={plan.proteinCoefficient}
          onChange={handleChange('proteinCoefficient')}
          type={"number"}
        />
        <TextField
          label="Lipid coefficient"
          id="lipidCoefficient"
          value={plan.lipidCoefficient}
          onChange={handleChange('lipidCoefficient')}
          type={"number"}
        />
        <Button
          variant={"outlined"}
          disabled={!valid}
          onClick={() => dispatch(fromPlan.add({
            activityCoefficient: 10,
            delta: new Percentage(1),
            bodyFat: new Percentage(0),
            lipidCoefficient: new GramPerKg(1),
            proteinCoefficient: new GramPerKg(2),
            maintenance: new KgCalorie(0),
            weight: new KG(60),
            goal: {
              calories: new KgCalorie(0),
              carbohydrate: new Carbohydrate(0),
              lipid: new Lipid(0),
              protein: new Protein(0)
            }
          }))}>
          Submit
        </Button>
      </Box>
    </Paper>
  )
}

export default Plan
