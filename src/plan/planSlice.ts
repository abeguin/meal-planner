import { createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit"
import { PlanSummary } from "./planSummary"

const adapter = createEntityAdapter<PlanSummary>()

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    ids: [],
    entities: {}
  },
  reducers: {
    add: {
      reducer: (state, action) => {
        const id = nanoid()
        console.log({ action, id })
        //@ts-ignore
        state.entities[id] = {
          ...action.payload,
          id,
          weight: { ...action.payload.weight },
          bodyFat: { ...action.payload.bodyFat },
          activityCoefficient: { ...action.payload.activityCoefficient },
          delta: { ...action.payload.delta },
          proteinCoefficient: { ...action.payload.proteinCoefficient },
          lipidCoefficient: { ...action.payload.lipidCoefficient },
          maintenance: { ...action.payload.maintenance },
          goal: { ...action.payload.goal }
        }
        //@ts-ignore
        state.ids.push(id)
      }
    }
  }
})

export const { add } = planSlice.actions

//export const { selectById } = adapter.getSelectors()

export default planSlice.reducer
