import { createDraftSafeSelector, createEntityAdapter, createSlice, EntityState, nanoid } from "@reduxjs/toolkit"
import { PlanSummary } from "./planSummary"
import { RootState } from "../store"

export type PlanState = EntityState<PlanSummary> & { last: string }

const adapter = createEntityAdapter<PlanSummary>()

/**
 * Initial state & reducers
 */
export const planSlice = createSlice({
  name: "plan",
  initialState: {
    ids: [],
    entities: {},
    last: ""
  },
  reducers: {
    add(state, action) {
      const id = nanoid()
      state.last = id
      return adapter.addOne(state, { ...action.payload, id } as PlanSummary)
    }
  }
})

/**
 * Actions
 */
export const { add } = planSlice.actions

/**
 * Selectors
 */
export const planState = (state: RootState) => state.plan
export const { selectById } = adapter.getSelectors(planState)
export const lastPlan = createDraftSafeSelector(
  planState,
  (state: PlanState): PlanSummary => {
    const key = state.last
    return state.entities[key] as PlanSummary
  }
)

export default planSlice.reducer
