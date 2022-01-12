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
      const total = Percentage.from((prot + lipid + carb) * 100).toString()
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
            <TableCell align="right">{plan?.goal?.protein?.amount?.toString()}</TableCell>
            <TableCell align="right">{plan?.goal?.protein?.energy?.toString()}</TableCell>
            <TableCell align="right">{plan?.goal?.proteinPercentage?.toString()}</TableCell>
          </TableRow>
          <TableRow key={"Carbohydrate"}>
            <TableCell component="th" scope="row">
              Carbohydrate
            </TableCell>
            <TableCell align="right">{plan?.goal?.carbohydrate?.amount?.toString()}</TableCell>
            <TableCell align="right">{plan?.goal?.carbohydrate?.energy?.toString()}</TableCell>
            <TableCell align="right">{plan?.goal?.carbohydratePercentage?.toString()}</TableCell>
          </TableRow>
          <TableRow key={"Lipid"}>
            <TableCell component="th" scope="row">
              Lipid
            </TableCell>
            <TableCell align="right">{plan?.goal?.lipid?.amount?.toString()}</TableCell>
            <TableCell align="right">{plan?.goal?.lipid?.energy?.toString()}</TableCell>
            <TableCell align="right">{plan?.goal?.lipidPercentage?.toString()}</TableCell>
          </TableRow>
          <TableRow key={"Total"}>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">
              {
                plan?.goal?.calories?.toString()
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
