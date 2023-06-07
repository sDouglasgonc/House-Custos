import React, {useState} from "react"
import styles from "./Integrantes.module.css"
import image from "../imgs/homemadulto.png"
import {wrap} from "framer-motion"
import { AnimatePresence, motion } from "framer-motion"


    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          };
        }
      };

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Integrantes(){
    const card2 = [ 
    <div className={styles.card}>
    <div className={styles.card_img}>
    <img src={image} alt="adsa"/>
    </div>
    <div className={styles.card_header}>
    <div className={styles.title}>polenta</div>
    <div className={styles.sub_title}>Ocupação</div>
        
    <p>Resumo sobre a pessoa de acordo</p>
        
    </div>
    </div>
    ]

const card3 = [ 
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
    ]

const [[page, direction], setPage] = useState([0, 0]);

const cardIndex = wrap(0, card2.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

    return(
        <>
<AnimatePresence initial={false} custom={direction}>
<motion.card
          key={page}
          src={card2[cardIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
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
    
</AnimatePresence>

 <div className={styles.next} onClick={() => paginate(1)}>
 {">"}
</div>
<div className={styles.prev} onClick={() => paginate(-1)}>
 {"<"}
</div>
</>
    )
}
export default Integrantes