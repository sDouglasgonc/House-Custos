import React, { useState } from "react";
import "./Custos.css";
import Chart from "../layout/Charts";
import Pie from "../layout/PieChart";
import BoxConta from "../layout/BoxConta";
import ProgressBar from "../layout/ProgressBar";
import ButtonMain from "../layout/ButtonMain";

function Custos() {
  const [filledBoxes, setFilledBoxes] = useState(0);
  const [allboxesFilled, setAllBoxesFilled] = useState(false);
  const [filledValues, setFilledValues] = useState({})

  const updateProgress = () => {
    const totalPercentage = (filledBoxes / 3) * 50;
    return totalPercentage <= 100 ? totalPercentage : 100;
  };

  const handleBoxFill = (id, value) => {
    setFilledBoxes((prevFilledBoxes) => prevFilledBoxes + 1);

    setFilledValues((prevFilledValues) => ({
      ...prevFilledValues,
      [id]: value
    }));
    if (filledBoxes + 1 === 6) {
      setAllBoxesFilled(true)
    }
  };

  const handleStartButtonClick = () => {
    const updateValues = {
      "1": filledValues["1"],
      "2": filledValues["2"],
      "3": filledValues["3"],
      "4": filledValues["4"],
      "5": filledValues["5"],
      "6": filledValues["6"],
    }
    setFilledValues(updateValues)
  }
  return (
    <div className="container">
      <div className="content_page">
        <div className="column-70">
          <Chart filledValues={filledValues} />
        </div>
        <div className="column-30">
          <Pie />
        </div>

        <div className="column-100">
          <ProgressBar percent={updateProgress()} />
        </div>
        <div className="box">
          <BoxConta id={"1"} name={"Conta de Água"} onFill={(value) => handleBoxFill("1", value)} />
        </div>
        <div className="box">
          <BoxConta id={"2"} name={"Conta de Energia"} onFill={(value) => handleBoxFill("2", value)} />
        </div>
        <div className="box">
          <BoxConta id={"3"} name={"Conta de Gás"} onFill={(value) => handleBoxFill("3", value)} />
        </div>
        <div className="box">
          <BoxConta id={"4"} name={"Conta do Cartão"} onFill={(value) => handleBoxFill("4", value)} />
        </div>
        <div className="box">
          <BoxConta id={"5"} name={"Conta do Mercado"} onFill={(value) => handleBoxFill("5", value)} />
        </div>
        <div className="box">
          <BoxConta id={"6"} name={"Conta da Previdência Social"} onFill={(value) => handleBoxFill("6", value)} />
        </div>

        <div className="bt">
          {Object.keys(filledValues).length === 6 && allboxesFilled === 6 && (<ButtonMain onStartClick={handleStartButtonClick} />)}
        </div>

      </div>
    </div>
  );
}

export default Custos;