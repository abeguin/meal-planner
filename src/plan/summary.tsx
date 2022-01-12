import * as React from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import * as fromPlan from "./planSlice"
import * as Percentage from "../units/percentage"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import tw from "twin.macro"

export type PlanFormFields = {
  weight?: number,
  bodyFat?: number,
  activityCoefficient?: number,
  delta?: number,
  proteinCoefficient?: number,
  lipidCoefficient?: number,
}

const Summary: React.FC = () => {

  const plan = useSelector(fromPlan.lastPlan)
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
    <TableContainer component={Paper} css={[ tw`mt-8 p-8` ]}>
      <Typography variant={"h6"}>
        Summary
      </Typography>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
    </TableContainer>
  )
}

export default Summary
