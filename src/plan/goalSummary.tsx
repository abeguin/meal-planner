import * as React from "react"
import { useEffect, useState } from "react"
import * as Percentage from "../units/percentage"
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { PlanSummary } from "./planSummary"

export type PlanFormFields = {
  weight?: number,
  bodyFat?: number,
  activityCoefficient?: number,
  delta?: number,
  proteinCoefficient?: number,
  lipidCoefficient?: number,
}

const GoalSummary: React.FC<{ plan?: PlanSummary }> = ({ plan }) => {

  const [ total, setTotal ] = useState("")

  useEffect(() => {
    if (plan) {
      const prot = plan?.goal?.proteinPercentage?.value ?? 0
      const lipid = plan?.goal?.lipidPercentage?.value ?? 0
      const carb = plan?.goal?.carbohydratePercentage?.value ?? 0
      const total = Percentage.from((prot + lipid + carb)).displayValue
      setTotal(total)
    }
  })

  return (
    <>
      <Typography variant={"h6"}>
        Daily calorie intake distribution
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Energy</TableCell>
            <TableCell align="right">Ratio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"Protein"}>
            <TableCell component="th" scope="row">
              Protein
            </TableCell>
            <TableCell align="right">{plan?.goal?.protein?.amount?.displayValue}</TableCell>
            <TableCell align="right">{plan?.goal?.protein?.energy?.displayValue}</TableCell>
            <TableCell align="right">{plan?.goal?.proteinPercentage?.displayValue}</TableCell>
          </TableRow>
          <TableRow key={"Carbohydrate"}>
            <TableCell component="th" scope="row">
              Carbohydrate
            </TableCell>
            <TableCell align="right">{plan?.goal?.carbohydrate?.amount?.displayValue}</TableCell>
            <TableCell align="right">{plan?.goal?.carbohydrate?.energy?.displayValue}</TableCell>
            <TableCell align="right">{plan?.goal?.carbohydratePercentage?.displayValue}</TableCell>
          </TableRow>
          <TableRow key={"Lipid"}>
            <TableCell component="th" scope="row">
              Lipid
            </TableCell>
            <TableCell align="right">{plan?.goal?.lipid?.amount?.displayValue}</TableCell>
            <TableCell align="right">{plan?.goal?.lipid?.energy?.displayValue}</TableCell>
            <TableCell align="right">{plan?.goal?.lipidPercentage?.displayValue}</TableCell>
          </TableRow>
          <TableRow key={"Total"}>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">
              {
                plan?.goal?.calories?.displayValue
              }
            </TableCell>
            <TableCell align="right">
              {total}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default GoalSummary
