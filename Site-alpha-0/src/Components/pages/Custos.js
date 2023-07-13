import React from "react"
import "./Custos.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
import BoxConta from "../layout/BoxConta"

function Custos(){
    return(
      <div className="container">
        <div className="content_page"> 
  <div className="column-70"><Chart/></div>
  <div className="column-30"><Pie/></div>

  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  
  </div>
  </div>

    )
}
export default Custos