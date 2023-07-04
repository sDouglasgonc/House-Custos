import React from "react"
import styles from "./Custos.module.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
function Custos(){
    return(
      <div className={styles.custos_main}>
  <Chart/>
  <Pie/>
  </div>
    )
}
export default Custos