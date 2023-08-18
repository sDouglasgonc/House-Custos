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
  const [submitData, setSubmitData] = useState([]);

  const updateProgress = () => {
    const totalPercentage = (filledBoxes / 3) * 50;
    return totalPercentage <= 100 ? totalPercentage : 100;
  };

  const handleBoxFill = (id, name, value) => {
    setFilledBoxes((prevFilledBoxes) => prevFilledBoxes + 1);

    setSubmitData((prevSubmitData) => [
      ...prevSubmitData,
      { id, nome: name, valor: value }
    ]);


    if (filledBoxes + 1 === 2) {
      setAllBoxesFilled(true)

    }
  };

  const handleStartButtonClick = () => {
    const jsondata = JSON.stringify(submitData)

    fetch("http://localhost:5000/Contas", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsondata
    },)
      .then((response) => {
        if (response.ok) {
          console.log("Dados da API enviados com sucesso!!")
        } else {
          console.log("Erro ao enviar os dados!!")
        }
      })

      .catch(error => {
        console.error("Erro ao enviar os dados para a API", error)
      })

  }

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
          <BoxConta id={"1"} name={"Conta de Água"} onFill={(value) => handleBoxFill("1", "Conta de Água", value)} />
        </div>
        <div className="box">
          <BoxConta id={"2"} name={"Conta de Energia"} onFill={(value) => handleBoxFill("2", "Conta de Energia", value)} />
        </div>
        {/*<div className="box">
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
  </div>*/}

        <div className="bt">
          {allboxesFilled && (<ButtonMain onStartClick={handleStartButtonClick} />)}
        </div>

      </div>
    </div>
  );
}

export default Custos;