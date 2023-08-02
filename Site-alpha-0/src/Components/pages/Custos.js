import React, { useState } from "react";
import "./Custos.css";
import Chart from "../layout/Charts";
import Pie from "../layout/PieChart";
import BoxConta from "../layout/BoxConta";
import ProgressBar from "../layout/ProgressBar";
import ButtonMain from "../layout/ButtonMain";

function Custos() {
  const [filledBoxes, setFilledBoxes] = useState(0);

  const updateProgress = () => {
    const totalPercentage = (filledBoxes / 3) * 50; // A cada 2 caixas preenchidas, avança 33%
    return totalPercentage <= 100 ? totalPercentage : 100; // Limita a barra em 100%
  };

  const handleBoxFill = () => {
    setFilledBoxes((prevFilledBoxes) => prevFilledBoxes + 1);
  };

  return (
    <div className="container">
      <div className="content_page">
        <div className="column-70">
          <Chart />
        </div>
        <div className="column-30">
          <Pie />
        </div>

        <div className="column-100">
          <ProgressBar percent={updateProgress()} />
        </div>
        <div className="box">
          <BoxConta id={"1"} name={"Conta de Água"} onFill={handleBoxFill} />
        </div>
        <div className="box">
          <BoxConta id={"2"} name={"Conta de Energia"} onFill={handleBoxFill} />
        </div>
        <div className="box">
          <BoxConta id={"3"} name={"Conta de Gás"} onFill={handleBoxFill} />
        </div>
        <div className="box">
          <BoxConta id={"4"} name={"Conta do Cartão"} onFill={handleBoxFill} />
        </div>
        <div className="box">
          <BoxConta id={"5"} name={"Conta do Mercado"} onFill={handleBoxFill} />
        </div>
        <div className="box">
          <BoxConta id={"6"} name={"Conta da Previdência Social"} onFill={handleBoxFill} />
        </div>

        <div className="bt">
          <ButtonMain />
        </div>
      </div>
    </div>
  );
}

export default Custos;