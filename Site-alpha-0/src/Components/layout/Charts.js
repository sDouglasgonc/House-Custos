import ApexChart from "react-apexcharts"
import "./Charts.css"

function Charts(){
    
const options = {
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 0,
        colors: ['transparent']
      },
   xaxis: {
        categories: ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out','Nov','Dez'],
      },
      yaxis: {
        title: {
          text: 'R$ Reais'
        }
    },
    fill:{
        opacity: 1
    }
}
const series = [{
    name: 'Luz',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66 ,80 ,40,56]
  }, {
    name: 'Água',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94,50 ,40,80]
  }, {
    name: 'Gás',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41,20 ,40,100]
  },
  {
    name: 'Internet',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41,20 ,40, 54]
  }
]
    return(
<div className="grafico">
    <ApexChart
    options={options}
    series={series}
    type="bar"
    />
</div>
    )
}
export default Charts