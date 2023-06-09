import React from "react"
import image from "../imgs/boneco.jpg"
import image2 from "../imgs/homemadulto.png"
import "./Integrantes.css"
function Integrantes(){

    const cards = [ 
    <div id="0" className="card">
    <div className="card_img">
   
    </div>
    <div className="card_header">
    <div className="tittle">polenta</div>
    <div className="sub_title">Ocupação</div>
        
    <p>Resumo sobre a pessoa de acordo</p>
        
    </div>
    </div>,

<div id="1" className="card">
<div className="card_imagem">
</div>
<div className="card_header">
<div className="title">pimenta adasdsad</div>
<div className="sub_title">Ocupação</div>
    
<p>Resumo sobre a pessoa de acordo</p>
    
</div>
</div>,


  <div id="2"className="card">
  <img src={image} alt="adsa"/>
  <div className="card_header">
  <div className="title">polenta</div>
  <div className="sub_title">Ocupação</div>
      
  <p>Resumo sobre a pessoa de acordo</p>
      
  </div>
  </div>

    ]
const imagens = [image]
    return(
        <>
<div className="container">
<div className="slideshow">
 {cards[2]}
<button className="prevButton">{"<"}</button>
<button className="nextButton">{">"}</button>

</div>

</div>

        </>
    )
}
export default Integrantes