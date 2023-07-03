import React from "react"
import styles from "./Custos.module.css"
import Charts from "../layout/Charts"
import PieChart from "../layout/PieChart"
function Custos(){
    return(
      <div className={styles.custos_main}>
  <Charts/>
  <PieChart/>
  </div>
    )
}
export default Custos