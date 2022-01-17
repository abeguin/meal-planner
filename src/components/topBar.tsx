import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import tw from "twin.macro"
import { Link } from "gatsby"

const TopBar: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div">
              Meal planner
            </Typography>
            <Box css={tw`flex flex-row flex-1 items-center justify-end`}>
              <Link to={"/"} css={tw`px-4`}>
                Plan
              </Link>
              <Link to={"/meals"}>
                Meals
              </Link>
              <Link to={"/dailyPlans"}>
                Daily plans
              </Link>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar
