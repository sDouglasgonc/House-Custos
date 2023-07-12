import React from "react"
import "./Custos.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
import BoxConta from "../layout/BoxConta"
function Custos(){
    return(
      <div className="container">
  <Chart/>
  <Pie/>
  </div>
    )
}
export default Custos