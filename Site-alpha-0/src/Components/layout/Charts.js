import { Chart } from "react-google-charts"
import "./Charts.css"


const options = {
  width: 800,
  height: 360,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },

  isStacked: true,

}

function Charts({ filledValues }) {

  const data = [
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
    ["Dez", 23, 32, 56, 43, 23, 12, ''],
  ]


  return (
    <>
      <div className="grafico">
        <Chart
          style={{ marginTop: 10, marginLeft: 10 }}
          chartType="ColumnChart"
          data={data}
          options={options}

          chartLanguage="pt-BR"
        />
      </div>
    </>
  )
}
export default Charts