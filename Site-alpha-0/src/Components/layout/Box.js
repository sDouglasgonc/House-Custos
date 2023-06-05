import React from "react";
import Imagem from "../imgs/homemadulto.png"
import styles from "./Box.module.css"

function Box () {
    return(
        
<div className={styles.container}>

     {/*começo do card */}

<div className={styles.slider_Wraper}>
<div className={styles.inner_carousel}>
    
    <div className={styles.card}>
    <h3>DOUGLAS </h3>
    <div className={styles.carder_header}>
        <div className={styles.ocupation}>ocupação</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.esse accusamus officiis.</p>
    </div>
    </div>

{/*final do card */}

    <div className={styles.card}>
    <h3>DOUGLAS </h3>
    <div className={styles.carder_header}>
        <div className={styles.ocupation}>ocupação</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.esse accusamus officiis.</p>
    </div>
    </div>

    <div className={styles.card}>
    <h3>DOUGLAS </h3>
    <div className={styles.carder_header}>
        <div className={styles.ocupation}>ocupação</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.esse accusamus officiis.</p>
    </div>
    </div>

</div>
</div>
</div>

    )
}
export default Box