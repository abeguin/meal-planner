import * as React from "react"
import { useDispatch } from "react-redux"
import * as fromPlan from "./planSlice"
import { Percentage } from "../units/percentage"
import { Lipid } from "../food/lipid"
import { KgCalorie } from "../units/kgCalorie"
import { Carbohydrate } from "../food/carbohydrate"
import { Protein } from "../food/protein"
import { GramPerKg } from "../units/gramPerKg"
import { KG } from "../units/kg"
import Input from "../components/input"
import tw from "twin.macro"
import { Button, Divider, Paper, Typography } from "@mui/material"

const Form = tw.form`grid grid-cols-1 gap-4 p-16 m-4`

const Plan: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Paper css={[ tw`mt-8` ]}>
      <Form>
        <Typography variant={"h4"}>
          <h2>Baseline</h2>
        </Typography>
        <Input type="number" label={"Weight (kg)"} />
        <Input type="number" label={"Fat mass rate (%)"} />
        <Input type="number" step={0.1} value={1.1} label={"Activity factor"} />
        <Input type="number" disabled={true} label={"Maintenance"} />
        <Divider />
        <Typography variant={"h4"}>
          <h2>Goal</h2>
        </Typography>
        <Input type="number" label={"Caloric difference compared to maintenance (%)"} />
        <Divider />
        <Typography variant={"h4"}>
          <h2>Constraints</h2>
        </Typography>
        <Input type="number" step={0.1} value={1} label={"Protein coefficient"} />
        <Input type="number" step={0.1} value={0.7} label={"Lipid coefficient"} />
        <Divider />
        <Button onClick={() => dispatch(fromPlan.add({
          activityFactor: 10,
          delta: new Percentage(1),
          fat: new Percentage(0),
          lipidFactor: new GramPerKg(1),
          proteinFactor: new GramPerKg(2),
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
      </Form>
    </Paper>
  )
}

export default Plan
