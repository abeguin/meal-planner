import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as fromFood from "../food/foodSlice"
import Seo from "../components/seo"
import Layout from "../components/layout"
import FoodList from "../food/foodList"
import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material"
import tw from "twin.macro"
import { Food } from "../food/food"
import * as fromMeal from "../meal/mealSlice"
import { Meal } from "../meal/meal"

const MealPage: React.FC = () => {
  const dispatch = useDispatch()
  const food = useSelector(fromFood.selectAll)

  const [ name, setName ] = useState("")
  const [ checked, setChecked ] = useState<Food[]>([])

  const handleToggle = (value: Food) => (): void => {
    const currentIndex = checked.findIndex(v => v.id === value.id)
    const newChecked = [ ...checked ]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
  }

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const meal: Meal = { name, ingredients: checked }
    dispatch(fromMeal.postMeal(meal))
  }

  useEffect(() => {
    if (!food?.length) {
      dispatch(fromFood.fetchFood)
    }
  }, [ food ])

  return (
    <Layout>
      <Seo title={"Meal"} />
      <Paper css={[ tw`p-8` ]}>
        <Typography variant={"h6"}>
          Meal
        </Typography>
        <Box
          component={"form"}
          autoComplete={"off"}
          css={[ tw`grid grid-cols-1 gap-4 m-8` ]}
        >
          <TextField
            label="Name"
            id="name"
            value={name}
            onChange={handleChange}
            type={"text"}
          />
        </Box>
        <Divider />
        <Typography variant={"h6"} css={tw`mt-8`}>
          Select ingredients
        </Typography>
        <FoodList handleToggle={handleToggle} checked={checked} />
        <Button onClick={handleSave} css={tw`mt-8`} disabled={!checked.length || !name}>Save</Button>
      </Paper>
    </Layout>
  )
}

export default MealPage
