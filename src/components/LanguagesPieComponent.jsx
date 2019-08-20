import React from "react"
import Pie from "./common/Pie"
let width = 400,
  height = 300
const name = d => d.name
const value = d => d.value
const chartSeries = []
const LanguagesPie = ({ languages }) => {
  //creating the seried for the chart based on the data.
  languages.forEach(language =>
    chartSeries.push({
      field: language.name,
      name: language.name,
    })
  )
  return (
    <div className="mdl-card__supporting-text">
      {/* <Pie
        id={"languages"}
        data={languages}
        width={width}
        height={height}
        chartSeries={chartSeries}
        value={value}
        name={name}
      /> */}
    </div>
  )
}
export default LanguagesPie
