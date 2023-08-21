import { Chart } from "react-google-charts"
import "./Charts.css"
import { useEffect, useState } from "react"


const options = {
  width: 800,
  height: 360,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },

  isStacked: true,

}

function Charts({ submitData, confirmPressed }) {
  const [chartData, setChartData] = useState([
    ["Meses do ano", "Água", "Energia", "Gás", "Cartão", "Mercado", "Previdencia Social", { role: 'anotation' }],
    ["Janeiro", 23, 32, 56, 43, 23, 12, ''],
    ["Fevereiro", 23, 32, 56, 43, 23, 12, ''],
    ["Março", 23, 32, 56, 43, 23, 12, ''],
    ["Abril", 23, 32, 56, 43, 23, 12, ''],
    ["Maio", 23, 32, 56, 43, 23, 12, ''],
    ["Jun", 23, 32, 56, 43, 23, 12, ''],
    ["Jul", 23, 32, 56, 43, 23, 12, ''],
    ["Ago", 23, 32, 56, 43, 23, 12, ''],
    ["Set", 23, 32, 56, 43, 23, 12, ''],
    ["Out", 23, 32, 56, 43, 23, 12, ''],
    ["Nov", 23, 32, 56, 43, 23, 12, ''],
    ["Dez", 23, 32, 56, 43, 23, 12, ''],])

  useEffect(() => {
    if (confirmPressed) {
      const newChartSData = [
        ["Meses do ano", "Água", "Energia", "Gás", "Cartão", "Mercado", "Previdencia Social", { role: 'anotation' }],
        ["Janeiro", 0, 0, 0, 0, 0, 0, ''],
        ["Fevereiro", 0, 0, 0, 0, 0, 0, ''],
        ["Março", 0, 0, 0, 0, 0, 0, ''],
        ["Abril", 0, 0, 0, 0, 0, 0, ''],
        ["Maio", 0, 0, 0, 0, 0, 0, ''],
        ["Jun", 0, 0, 0, 0, 0, 0, ''],
        ["Jul", 0, 0, 0, 0, 0, 0, ''],
        ["Ago", submitData["1"]?.valor || 0, submitData["2"]?.valor || 0, submitData["3"]?.valor || 0, submitData["4"]?.valor || 0, submitData["5"]?.valor || 0, submitData["6"]?.valor || 0, ''],
        ["Set", 0, 0, 0, 0, 0, 0, ''],
        ["Out", 0, 0, 0, 0, 0, 0, ''],
        ["Nov", 0, 0, 0, 0, 0, 0, ''],
        ["Dez", 0, 0, 0, 0, 0, 0, ''],
      ]
      setChartData(newChartSData)
    }
  }, [submitData, confirmPressed])

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