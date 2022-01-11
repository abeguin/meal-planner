import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const StyledInput = styled.input`
  ${tw`rounded border m-4`}
`

const Input: React.FC<{
  type: string,
  label: string,
  step?: number,
  value?: number | string,
  disabled?: boolean,
}> = ({ type, label, step, value, disabled }) => {
  return (
    <label>
      {label}
      <StyledInput type={type} step={step} value={value} disabled={disabled} />
    </label>
  )
}

export default Input
