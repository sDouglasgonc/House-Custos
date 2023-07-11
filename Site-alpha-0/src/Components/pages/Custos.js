import React from "react"
import "./Custos.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
function Custos(){
    return(
      <div className="custos_main">
  <Chart/>
  <Pie/>
  </div>
    )
}
export default Custos