import React, { useEffect, useState } from "react"
import "./Custos.css"
import Chart from "../layout/Charts"
import Pie from "../layout/PieChart"
import BoxConta from "../layout/BoxConta"
import ProgressBar from "../layout/ProgressBar"
import ButtonMain from "../layout/ButtonMain"

function Custos() {

  const [filledPercentages, setFilledPercentages] = useState(0)

  const contas = [
    { id: "box1", name: "Conta de Água" },
    { id: "box2", name: "Conta de Água" },
    { id: "box3", name: "Conta de Água" },
    { id: "box4", name: "Conta de Água" },
    { id: "box5", name: "Conta de Água" },
    { id: "box6", name: "Conta de Água" },
    { id: "total", name: "Total de contas" }
  ]

  const updateProgress = () => {
    const totalFilled = accounts.reduce(
      (acc, account) => acc + (filledPercentages[account.id] || 0),
      0
    );

    const totalFilledPercentage = (totalFilled / (accounts.length * 100)) * 100;
    setFilledPercentage(totalFilledPercentage);
  };

  useEffect(() => {
    updateProgress();
  }, []);

  const [filledPercentages, setFilledPercentages] = useState({});

  return (
    <div className="container">
      <div className="content_page">
        <div className="column-70"><Chart /></div>
        <div className="column-30"><Pie /></div>
        {contas.map((conta) => (
          <React.Fragment key={contas.id}>
            <div className="column-100"><ProgressBar percent={filledPercentages['total'] || 0} /></div>
            <div className="box">
              <BoxConta
                key={conta.id}
                id={conta.id}
                name={conta.name}
                updateProgress={(percentage) =>
                  setFilledPercentages((prevPercentages) => ({
                    ...prevPercentages,
                    [conta.id] percentage,
                  }))
                } />
            </div>
          </React.Fragment>
        ))}

        <div className="bt"><ButtonMain /></div>
      </div>
    </div>

  )
}
export default Custos