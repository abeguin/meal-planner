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
import H2 from "../components/h2"
import styled from "@emotion/styled"


const Form = tw.form`grid grid-cols-1 gap-4 border p-16 m-4`
const Button = styled.button`
color: green
`


const Plan: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Form>
      <H2>Baseline</H2>
      <Input type="number" label={"Weight (kg)"} />
      <Input type="number" label={"Fat mass rate (%)"} />
      <Input type="number" step={0.1} value={1.1} label={"Activity factor"} />
      <Input type="number" disabled={true} label={"Maintenance"} />
      <hr />
      <H2>Goal</H2>
      <Input type="number" label={"Caloric difference compared to maintenance (%)"} />
      <hr />
      <H2>Constraints</H2>
      <Input type="number" step={0.1} value={1} label={"Protein coefficient"} />
      <Input type="number" step={0.1} value={0.7} label={"Lipid coefficient"} />
      <hr />
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
  )
}

export default Plan
