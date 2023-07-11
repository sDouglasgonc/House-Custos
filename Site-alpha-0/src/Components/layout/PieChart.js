import React from "react";
import {Chart} from "react-google-charts"
import "./PieChart.css"
const data = [
  ["Task", "Hours per Day"],
  ["Água", 11],
  ["Energia", 2],
  ["Gás", 2],
  ["Cartão", 2],
  ["Mercado", 7],
  ["Previdencia Social",6]
]

  const options = {
    title:"Resumo das contas",
    is3D:true
  }

function PieChart(){
  
  return(
    <div className="chart_pie">
<Chart
style={{marginTop:10,marginLeft:6}}
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