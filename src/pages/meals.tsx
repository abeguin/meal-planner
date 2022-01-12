import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Button, Paper, Typography } from "@mui/material"
import tw from "twin.macro"
import * as fromMeal from "../meal/mealSlice"
import { Meal } from "../meal/meal"
import MealList from "../meal/mealList"
import { Link } from "gatsby"

const MealsPage: React.FC = () => {
  const dispatch = useDispatch()

  const [ init, setInit ] = useState(false)

  useEffect(() => {
    if (!init) {
      dispatch(fromMeal.fetchAll)
      setInit(true)
    }
  }, [ init ])

  return (
    <Layout>
      <Seo title={"Meal"} />
      <Paper css={[ tw`p-8` ]}>
        <Typography variant={"h6"}>
          Meals
        </Typography>
        <MealList />
        <Link to={"/meal"}>
          <Button css={tw`mt-8`}>New</Button>
        </Link>
      </Paper>
    </Layout>
  )
}

export default MealsPage
