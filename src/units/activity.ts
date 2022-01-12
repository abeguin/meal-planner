import { Unit } from "./unit"

export type ActivityFrequency = "NONE" | "NOT_OFTEN" | "OFTEN" | "VERY_OFTEN" | "VERY_OFTEN_AND_PHYSICAL_WORK";

export type Activity = Unit & { frequency: ActivityFrequency };


export type ActivityFactor = {
  frequency: ActivityFrequency,
  factor: number,
  label: string,
}

export const ACTIVITY_FACTORS: { [key in ActivityFrequency]: ActivityFactor } = {
  "NONE": {
    frequency: "NONE",
    factor: 1.1,
    label: "A few or no training"
  },
  "NOT_OFTEN": {
    frequency: "NOT_OFTEN",
    factor: 1.2,
    label: "Training one or twice a week"
  },
  "OFTEN": {
    frequency: "OFTEN",
    factor: 1.35,
    label: "Training three to five times a week"
  },
  "VERY_OFTEN": {
    frequency: "VERY_OFTEN",
    factor: 1.45,
    label: "Training six to eight times a week"
  },
  "VERY_OFTEN_AND_PHYSICAL_WORK": {
    frequency: "VERY_OFTEN_AND_PHYSICAL_WORK",
    factor: 1.7,
    label: "Training six to eight times a week with a physical work"
  }
}

export const from = (value: ActivityFrequency): Activity => ({
  frequency: value,
  value: ACTIVITY_FACTORS[value].factor,
  displayValue: ACTIVITY_FACTORS[value].label
})
