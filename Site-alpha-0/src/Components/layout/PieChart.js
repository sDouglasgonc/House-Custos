import React from "react";
import {Chart} from "react-google-charts"
import "./PieChart.css"
const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
]

  const options = {
    title:"Resumo das contas",
    is3D:true
  }

function PieChart(){
  
  return(
    <div className="chart_pie">
<Chart
chartType="PieChart"
options={options}
data={data}
width={300}
height={300}
/>
</div>
  )
}
export default PieChart