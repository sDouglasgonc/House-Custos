import { Chart } from "react-google-charts"
import "./Charts.css"
import { useState, useEffect } from "react"

const options = {
  width: 800,
  height: 360,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },

  isStacked: true,

}

function Charts({ filledValues }) {

  const [chartData, setChartData] = useState([
    ["Meses do ano", "Água", "Energia", "Gás", "Cartão", "Mercado", "Previdencia Social", { role: 'anotation' }],
    ["Janeiro", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Fevereiro", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Março", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Abril", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Maio", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Jun", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Jul", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Ago", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Set", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Out", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Nov", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ["Dez", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
  ]);

  useEffect(() => {
    const newdata = [
      ["Meses do ano", "Água", "Energia", "Gás", "Cartão", "Mercado", "Previdencia Social", { role: 'anotation' }],
      ["Janeiro", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Fevereiro", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Março", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Abril", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Maio", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Jun", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Jul", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Ago", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Set", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Out", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Nov", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
      ["Dez", filledValues["1"] || 0, filledValues["2"] || 0, filledValues["3"] || 0, filledValues["4"] || 0, filledValues["5"] || 0, filledValues["6"] || 0, ''],
    ]
    setChartData(newdata)

  }, [filledValues])

  return (
    <>
      <div className="grafico">
        <Chart
          style={{ marginTop: 10, marginLeft: 10 }}
          chartType="ColumnChart"
          data={chartData}
          options={options}

          chartLanguage="pt-BR"
        />
      </div>
    </>
  )
}
export default Charts