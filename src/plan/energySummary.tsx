import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import tw from "twin.macro"
import { PlanSummary } from "./planSummary"


const EnergySummary: React.FC<{ plan?: PlanSummary }> = ({ plan }) => {
  return (
    <>
      <Typography variant={"h6"}>
        Daily energy summary
      </Typography>
      <Table css={[ tw`mb-8` ]}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Energy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"Protein"}>
            <TableCell component="th" scope="row">
              Maintenance
            </TableCell>
            <TableCell align="right">{plan?.maintenance?.toString()}</TableCell>
          </TableRow>
          <TableRow key={"Carbohydrate"}>
            <TableCell component="th" scope="row">
              Goal
            </TableCell>
            <TableCell align="right">{plan?.goal?.calories?.toString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default EnergySummary
