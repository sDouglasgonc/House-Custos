import * as React from "react"
import { useState } from "react"
import { wrap } from "framer-motion"
import { motion,AnimatePresence} from "framer-motion"
import Box from "./Box.js"
import styles from "./Integrantes.module.css"

const variants = {
    enter: direction => {
        return{
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: direction => {
        return{
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        }
      }
    }
     const swipethreshold = 1000
     const swipepower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
     }

function Integrantes(){

const [[page, direction], setPage] = useState([0, 0]);

const boxIndex = wrap(0, Box.length , page)

const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
}
    return(
<>
<div  className={styles.review}>
<AnimatePresence initial={false} custom={direction}>
<motion.box className={styles.box}
key={page}
src={Box[boxIndex]}
custom={direction}
variants={variants}
initial="enter"
animate="center"
exit="exit"
transition={{
    x:{ type:"spring",stiffness: 300, damping:30},
    opacity: {duration: 0.2}
}}
drag="x"
dragContrains={{left: 0, right: 0}}
dragElastic={1}
onDragEnd={(e,{offset, velocity}) =>{
    const swipe = swipepower(offset.x,velocity.x)
    if(swipe < -swipethreshold){
        paginate(1)
    } else if(swipe > swipethreshold) {
    paginate(-1)
    }
}} 
/>
</AnimatePresence>
</div>
<div className={styles.next} onClick={()=> paginate(1)}>
{"<"}
</div>
<div className={styles.prev} onClick={()=> paginate(-1)}>
{">"}
</div>
</>

    )
}
export default Integrantes