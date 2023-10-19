
import React from "react";
import { Chart } from "react-google-charts"
import "./PieChart.css"
const data = [
  ["Task", "Hours per Day"],
  ["Água", 11],
  ["Energia", 2],
  ["Gás", 2],
  ["Cartão", 2],
  ["Mercado", 7],
  ["Previdencia Social", 6]
]

const options = {
  width: 300,
  height: 300,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}

const options2 = {
  width: 300,
  height: 300,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}

function PieChart() {



  return (
    <div className="chart_pie">
      <Chart
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
        chartType="PieChart"
        options={options}
        data={data}

      />
    </div>
  )
}
export default PieChart