import * as React from "react"
import styles from "./Integrantes.module.css"
import image from "../imgs/homemadulto.png"
function Integrantes(){

    return(
<div className={styles.container}>
<div className={styles.headings}>
    <h1>blá blá blá</h1>
</div>
<div className={styles.slider_wraper}>
<div className={styles.inner_crousel}>

<div className={styles.card}>
<div className={styles.card_img}>
<img src={image} alt="adsa"/>
</div>
<div className={styles.card_header}>
    <div className={styles.title}>Nome</div>
    <div className={styles.sub_title}>Ocupação</div>
    
    <p>Resumo sobre a pessoa de acordo</p>
    
</div>
</div>

<div className={styles.card}>
<div className={styles.card_img}>
<img src={image} alt="adsa"/>
</div>
<div className={styles.card_header}>
    <div className={styles.title}>Nome</div>
    <div className={styles.sub_title}>Ocupação</div>
    
    <p>Resumo sobre a pessoa de acordo</p>
    
</div>
</div>

<div className={styles.card}>
<div className={styles.card_img}>
<img src={image} alt="adsa"/>
</div>
<div className={styles.card_header}>
    <div className={styles.title}>Nome</div>
    <div className={styles.sub_title}>Ocupação</div>
    <p>Resumo sobre a pessoa</p>
</div>
</div>

</div>
</div>
</div>
    )
}
export default Integrantes