import React from "react"
import { Provider } from "react-redux"
import { theme, WithTheme } from "./src/theme"
import createStore from "./src/store"
import { Typography } from "@mui/material"

const wrapWithProvider = ({ element }) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <WithTheme theme={theme}>
          {element}
      </WithTheme>
    </Provider>
  )
}

export default wrapWithProvider
