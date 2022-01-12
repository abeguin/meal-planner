import { Paper } from "@mui/material"
import React from "react"
import tw from "twin.macro"
import { FixedSizeList } from "react-window"
import { Food } from "./food"
import FoodRow from "./foodRow"


const FoodList: React.FC<{ food: Food[] }> = ({ food }) => {
  return (
    <Paper css={[ tw`p-8` ]}>
      <FixedSizeList
        height={600}
        width={400}
        itemSize={46}
        itemCount={food.length}
        overscanCount={25}
      >
        {(props) => <FoodRow food={food} {...props} />}
      </FixedSizeList>
    </Paper>
  )
}

export default FoodList
