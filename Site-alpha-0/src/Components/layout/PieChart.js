
import React from "react";
import { Chart } from "react-google-charts"
import "./PieChart.css"
import { useMediaQuery } from "react-responsive";
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

const options481x767 = {
  width: 280,
  height: 300,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}

function Mobilefirst() {
  const Esdevice = useMediaQuery({
    query: "(min-width: 480px) and (max-width: 767px)"
  })
  if (Esdevice === true) {
    return options481x767
  } else {
    return options
  }
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
        options={Mobilefirst()}
        data={data}

      />
    </div>
  )
}
export default PieChart