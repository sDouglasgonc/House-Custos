import React from "react"
import "./Custos.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
import BoxConta from "../layout/BoxConta"
import ProgressBar from "../layout/ProgressBar"
import ButtonMain from "../layout/ButtonMain"
function Custos() {
  return (
    <div className="container">
      <div className="content_page">
        <div className="column-70"><Chart /></div>
        <div className="column-30"><Pie /></div>
        <div className="column-100"><ProgressBar /></div>
        <div className="box"><BoxConta id={[1]} /></div>
        <div className="box"><BoxConta id={[2]} /></div>
        <div className="box"><BoxConta id={[3]} /></div>
        <div className="box"><BoxConta id={[4]} /></div>
        <div className="box"><BoxConta id={[5]} /></div>
        <div className="box"><BoxConta id={[6]} /></div>
        <div className="bt"><ButtonMain /></div>
      </div>
    </div>

  )
}
export default Custos