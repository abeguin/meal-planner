import React, { useEffect } from "react"
import { FixedSizeList } from "react-window"
import { useDispatch, useSelector } from "react-redux"
import * as fromDailyPlan from "./dailyPlanSlice"
import DailyPlanRow from "./dailyPlanRow"


const DailyPlanList: React.FC = () => {

  const dispatch = useDispatch()
  const dailyPlanList = useSelector(fromDailyPlan.selectAll)

  return (
    <FixedSizeList
      height={400}
      width={400}
      itemSize={46}
      itemCount={dailyPlanList.length}
      overscanCount={25}
    >
      {
        (props) => (
          <DailyPlanRow
            dailyPlans={dailyPlanList}
            {...props}
          />
        )
      }
    </FixedSizeList>
  )
}

export default DailyPlanList
