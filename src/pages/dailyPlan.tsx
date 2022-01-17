import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Button, Paper, Typography } from "@mui/material"
import tw from "twin.macro"
import * as fromMeal from "../meal/mealSlice"
import * as fromDailyPlan from "../dailyPlan/dailyPlanSlice"
import { Meal } from "../meal/meal"
import { DailyPlan } from "../dailyPlan/dailyPlan"
import MealList from "../meal/mealList"

const DailyPlanPage: React.FC = () => {
  const dispatch = useDispatch()
  const meals = useSelector(fromMeal.selectAll)

  const [ name, setName ] = useState("")
  const [ checked, setChecked ] = useState<Meal[]>([])

  const handleToggle = (value: Meal) => (): void => {
    const currentIndex = checked.findIndex(v => v.id === value.id)
    const newChecked = [ ...checked ]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  const onMealNameBlur = (name: string) => setName(name)

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const dailyPlan: DailyPlan = { date: new Date(), meals: checked }
    console.log(dailyPlan)
    dispatch(fromDailyPlan.postDailyPlan(dailyPlan))
  }

  useEffect(() => {
    if (!meals?.length) {
      dispatch(fromMeal.fetchAll)
    }
  }, [ meals ])

  return (
    <Layout>
      <Seo title={"Daily plan"} />
      <Paper css={[ tw`p-8` ]}>
        <Typography variant={"h6"}>
          Daily plan
        </Typography>
        <Typography variant={"h6"} css={tw`mt-8`}>
          Select meals
        </Typography>
        <MealList handleToggle={handleToggle} checked={checked} />
        <Button onClick={handleSave} css={tw`mt-8`} disabled={!checked.length}>Save</Button>
      </Paper>
    </Layout>
  )
}

export default DailyPlanPage
