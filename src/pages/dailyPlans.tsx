import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Button, Paper, Typography } from "@mui/material"
import tw from "twin.macro"
import * as fromDailyPlan from "../dailyPlan/dailyPlanSlice"
import { Link } from "gatsby"
import DailyPlanList from "../dailyPlan/dailyPlanList"

const DailyPlanPage: React.FC = () => {
  const dispatch = useDispatch()

  const [ init, setInit ] = useState(false)

  useEffect(() => {
    if (!init) {
      dispatch(fromDailyPlan.fetchAll)
      setInit(true)
    }
  }, [ init ])

  return (
    <Layout>
      <Seo title={"Daily plans"} />
      <Paper css={[ tw`p-8` ]}>
        <Typography variant={"h6"}>
          Daily plans
        </Typography>
        <DailyPlanList />
        <Link to={"/dailyPlan"}>
          <Button css={tw`mt-8`}>New</Button>
        </Link>
      </Paper>
    </Layout>
  )
}

export default DailyPlanPage
