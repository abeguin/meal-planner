import { createDraftSafeSelector, createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit"
import { PlanSummary } from "./planSummary"
import { RootState } from "../store"

const adapter = createEntityAdapter<PlanSummary>()

export type PlanState = ReturnType<typeof adapter.getInitialState>;

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

export const { selectById } = adapter.getSelectors()

export const planState = (state: RootState) => state.plan
export const lastPlan = createDraftSafeSelector(
  planState,
  (state: PlanState) => {
    const last = state.ids[state.ids.length - 1]
    return state.entities[last]
  }
)

export default planSlice.reducer
