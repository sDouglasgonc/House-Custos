import React, { useState } from "react"
import image from "../imgs/homemadulto.png"
import image2 from "../imgs/painho.png"
import image3 from "../imgs/mainha.png"
import { AnimatePresence,motion} from "framer-motion"

import "./Integrantes.css"

const imagens = [image,image2,image3]

const cards = [ 

    <div id="0" className="card">
    <img src={imagens[0]} alt="adsa"/>
    <div className="card_header">
    <div className="title">Integrante 1</div>
    <div className="sub_title">Ocupação 1</div>
        
    <p>Resumo sobre a pessoa de acordo as coisas 1</p>
        
    </div>
    </div>,

<div id="1" className="card">
<img src={imagens[1]} alt="adsa"/>
<div className="card_header">
<div className="title">Integrante 2</div>
<div className="sub_title">Ocupação 2</div>
    
<p>Resumo sobre a pessoa de acordo as coisas 2</p>
    
</div>
</div>,


  <div id="2"className="card">
  <img src={imagens[2]} alt="adsa"/>
  <div className="card_header">
  <div className="title">Integrante 3</div>
  <div className="sub_title">Ocupação 3</div>
      
  <p>Resumo sobre a pessoa de acordo as coisas 3</p>
      
  </div>
  </div>
  ]

const variants ={
    inital:{
        x: 200,
        opacity: 1
    }, 
    animate:{
        x:0,
        opacity: 0
    },
    exit:{
        x:-200,
        opacity: 1
    }

}


function Integrantes({isVisible}){

const[index , setIndex] = useState(0)

    function nextSlide(){
if(index === cards.length - 1){
setIndex(0)
return
}
setIndex(index + 1)
    }
    function prevSlide(){
        if(index === 0){
setIndex(cards.length - 1)
return
        }
setIndex(index - 1)
    }


    return(
        <>
     <AnimatePresence> 
<div className="container">
<div className="slideshow">
    
 <motion.div

 variants={variants}
 animate="animate"
 initial ="initial"
 exit="exit"
 key={cards[index]}
 >
 {cards[index]}
</motion.div>
<button className="prevButton" onClick={prevSlide}>{"<"}</button>
<button className="nextButton" onClick={nextSlide}>{">"}</button>

</div>

</div>
</AnimatePresence>  
        </>
    )
}
export default Integrantes