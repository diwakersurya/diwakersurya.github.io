import React from "react"
let width = 400,
  height = 300
const name = d => d.name
const value = d => d.value
const chartSeries = []
const FrameworksPie = ({ frameworks }) => {
  //creating the seried for the chart based on the data.
  frameworks.forEach(framework =>
    chartSeries.push({
      field: framework.name,
      name: framework.name,
    })
  )
  return (
    <div className="mdl-card__supporting-text">
      {/* <PieChart
        id={"frameworks"}
        data={frameworks}
        width={width}
        height={height}
        chartSeries={chartSeries}
        value={value}
        name={name}
      /> */}
    </div>
  )
}
export default FrameworksPie
