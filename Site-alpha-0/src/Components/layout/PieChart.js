import React from "react"
import ApexChart from "react-apexcharts"
import "./Charts.css"

function Charts(){
    
const options = {

    options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
}
const label ={
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
}
const series = {
series:[[23,23,12,12,32]]
}
    return(
<div className="grafico">
    <ApexChart
    options={options}
    series={series}
    label={label}
    type="Pie"
    />
</div>
    )
}
export default Charts