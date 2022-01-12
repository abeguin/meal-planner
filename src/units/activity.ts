import { Unit } from "./unit"

export type Activity = Unit;

export type ActivityFrequency = "NONE" | "NOT_OFTEN" | "OFTEN" | "VERY_OFTEN" | "VERY_OFTEN_AND_PHYSICAL_WORK";

export type ActivityFactor = {
  factor: number,
  label: string,
}

export const ACTIVITY_FACTORS: { [key in ActivityFrequency]: ActivityFactor } = {
  "NONE": {
    factor: 1.1,
    label: "A few or no training"
  },
  "NOT_OFTEN": {
    factor: 1.2,
    label: "Training one or twice a week"
  },
  "OFTEN": {
    factor: 1.35,
    label: "Training three to five times a week"
  },
  "VERY_OFTEN": {
    factor: 1.45,
    label: "Training six to eight times a week"
  },
  "VERY_OFTEN_AND_PHYSICAL_WORK": {
    factor: 1.7,
    label: "Training six to eight times a week with a physical work"
  }
}

export const from = (value: ActivityFrequency): Activity => ({
  value: ACTIVITY_FACTORS[value].factor,
  toString: () => ACTIVITY_FACTORS[value].label
})
