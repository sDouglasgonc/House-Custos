import React from "react"
import "./Custos.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
import BoxConta from "../layout/BoxConta"
import ProgressBar from "../layout/ProgressBar"
import ButtonMain from "../layout/ButtonMain"
function Custos(){
    return(
      <div className="container">
        <div className="content_page"> 
  <div className="column-70"><Chart/></div>
  <div className="column-30"><Pie/></div>
  <div className="column-100"><ProgressBar/></div>  
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="box"><BoxConta/></div>
  <div className="bt"><ButtonMain/></div>
  </div>
  </div>

    )
}
export default Custos