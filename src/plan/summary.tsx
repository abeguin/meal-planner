import * as React from "react"
import { useSelector } from "react-redux"
import * as fromPlan from "./planSlice"
import { Paper, TableContainer } from "@mui/material"
import tw from "twin.macro"
import EnergySummary from "./energySummary"
import GoalSummary from "./goalSummary"

const Summary: React.FC = () => {

  const plan = useSelector(fromPlan.lastPlan)

  return (
    <TableContainer component={Paper} css={[ tw`mt-8 p-8` ]}>
      <EnergySummary plan={plan} />
      <GoalSummary plan={plan} />
    </TableContainer>
  )
}

export default Summary
