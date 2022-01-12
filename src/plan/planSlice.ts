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
      reducer: adapter.addOne,
      prepare(plan) {
        const id = nanoid()
        return {
          payload: { ...plan, id }
        }
      }
    }
  }
})

export const { add } = planSlice.actions

//export const { selectById } = adapter.getSelectors()

export default planSlice.reducer
