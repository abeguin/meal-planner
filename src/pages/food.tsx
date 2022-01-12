import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as fromFood from "../food/foodSlice"
import Seo from "../components/seo"
import Layout from "../components/layout"
import FoodList from "../food/foodList"

const FoodPage: React.FC = () => {
  const dispatch = useDispatch()
  const food = useSelector(fromFood.selectAll)

  useEffect(() => {
    if (!food?.length) {
      dispatch(fromFood.fetchFood)
    }
  }, [ food ])

  return (
    <Layout>
      <Seo title={"Home"} />
      <FoodList food={food} />
    </Layout>
  )
}

export default FoodPage
