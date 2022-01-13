import React, { useState } from "react"
import { Box, TextField } from "@mui/material"
import tw from "twin.macro"

const MealName: React.FC<{
  onBlur: (name: string) => void
}> = ({ onBlur }) => {
  const [ name, setName ] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
  }

  return (
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
        onBlur={() => onBlur(name)}
        type={"text"}
      />
    </Box>
  )
}

export default MealName
