import {Chart} from "react-google-charts"
import "./Charts.css"

const data = ([
  ["Meses do ano", "Água", "Energia", "Gás","Cartão","Mercado","Previdencia Social",{role:'anotation'}],
  ["Janeiro", 300, 200, 200, 200,232,121,''],
  ["Fevereiro", 200, 200, 200, 200,232,232,''],
  ["Março", 260, 220, 300,231,232,232,''],
  ["Abril", 230, 240, 350, 300,232,232,''],
  ["Maio", 200, 200, 200,46,350,300,''],
  ["Jun", 270, 260, 250,23,350,300,''],
  ["Jul", 260, 220, 200,345,350,300,''],
  ["Ago", 80, 240, 250,231,350,300,''],
  ["Set", 200, 200, 200,45,350,300,''],
  ["Out", 270, 260, 250,343,350,300,''],
  ["Nov", 210, 220, 200,342,350,300,''],
  ["Dez", 80, 240, 250,342,350,300,''],
  ])
  
  const options = {
    width: 800,
    height:360,
    chartArea:{width:"50%"},
      title:"Levantamento dos custos da casa",
      subtitle:"De acordo com os meses do ano",
    legend:{position:"rigth"},

    isStacked:true,
   
  }
 
  
function Charts(){
    
    return(
      <>
<div className="grafico">
    <Chart
    style={{marginTop:10,marginLeft:10}}
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